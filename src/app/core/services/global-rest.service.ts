import {
  LoginResponse,
  LoginData,
  ProductsResponse,
  SingleProductResponse,
  CategoriesResponse,
  SingleCategoryResponse,
  CartResponse,
  CartPostItem,
  LikesResponse,
} from './../../models/rest.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalRestService {
  url = 'https://trainee-program-api-staging.applaudostudios.com/api/v1';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  login(loginData: LoginData): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.url}/users/login`, {
      data: loginData,
    });
  }

  getAllProducts(
    page: number,
    itemPerPage: number
  ): Observable<ProductsResponse> {
    return this.http.request<ProductsResponse>(
      'get',
      `${this.url}/products?include=master,category`,
      {
        body: {
          page: {
            size: itemPerPage,
            number: page,
          },
        },
      }
    );
  }

  searchProducts(
    page: number,
    itemPerPage: number,
    search: string,
    category_id: string
  ): Observable<ProductsResponse> {
/*     let filterOptions: Filter = {
      category_id_eq: category_id,
    }; */

    return this.http.get<ProductsResponse>(`${this.url}/products?include=master,category,image_attachment.blob&[page][size]=${itemPerPage}&[page][number]=${page}&[filter][name_cont]=${search}&[filter][category_id_eq]=${category_id}&sort=name asc`);
  }

  getSingleProduct(productSlug: string): Observable<SingleProductResponse> {
    return this.http.get<SingleProductResponse>(
      `${this.url}/products/${productSlug}?include=master,category,image_attachment.blob`
    );
  }

  getSingleProductWithId(productId: number): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(
      `${this.url}/products?include=master,category,image_attachment.blob&[filter][id_eq]=${productId}`
    )
  }

  rateProduct(
    kind: 'up' | 'down',
    product_id: number
  ): Observable<LikesResponse> {
    return this.http.post<LikesResponse>(`${this.url}/likes`, {
      data: {
        product_id: product_id,
        kind: kind,
      },
    });
  }

  getProductLiked (user_id: number, product_id: number): Observable<LikesResponse> {
    return this.http.get<LikesResponse> (`${this.url}/likes?[filter][user_id_eq]=${user_id}&[filter][product_id_eq]=${product_id}`)
  }

  getCategories(): Observable<CategoriesResponse> {
    return this.http.get<CategoriesResponse>(
      `${this.url}/categories?[page][size]=100`
    );
  }

  getSingleCategory(categorySlug: string): Observable<SingleCategoryResponse> {
    return this.http.get<SingleCategoryResponse>(
      `${this.url}/products/${categorySlug}`
    );
  }

  getCart(): Observable<CartResponse> {
    return this.http.get<CartResponse>(`${this.url}/cart`);
  }

  uploadCart(cartItems: CartPostItem[]): Observable<CartResponse> {
    return this.http.post<CartResponse>(`${this.url}/cart`, {
      data: { items: cartItems },
    });
  }

  addNewItemToCart(cartItems: CartPostItem[]): Observable<CartResponse> {
    return this.http.put<CartResponse>(`${this.url}/cart`, {
      data: { items: cartItems },
    });
  }

  changeItemQuantityCart(cartItems: CartPostItem, id: number): Observable<CartResponse> {
    return this.http.put<CartResponse>(`${this.url}/cart`, {
      data: { items: [
        {
          _destroy: true,
          id: id
        },
        {
        product_variant_id: cartItems.product_variant_id,
        quantity: cartItems.quantity
      }] },
    });
  }

  removeItemCart(id: number): Observable<CartResponse> {
    return this.http.put<CartResponse>(`${this.url}/cart`, {
      data: { items: [
        {
          _destroy: true,
          id: id
        }
     ]},
    });
  }

  deleteCart(): Observable<object> {
    return this.http.delete(`${this.url}/cart`);
  }
}
