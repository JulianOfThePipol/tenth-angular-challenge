import {
  LoginResponse,
  LoginData,
  ProductsResponse,
  Filter,
  SingleProductResponse,
  LikeResponse,
  CategoriesResponse,
  SingleCategoryResponse,
  CartResponse,
  CartPostItem,
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
    return this.http.post<LoginResponse>(`${this.url}/users/login`, loginData);
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
    category: string
  ): Observable<ProductsResponse> {
    let filterOptions: Filter = {
      name_cont: search,
      category_in: [category],
    };

    return this.http.request<ProductsResponse>('get', `${this.url}/products`, {
      body: {
        page: {
          size: itemPerPage,
          number: page,
        },
        filter: filterOptions,
      },
    });
  }

  getSingleProduct(productSlug: string): Observable<SingleProductResponse> {
    return this.http.get<SingleProductResponse>(
      `${this.url}/products/${productSlug}?include=master,category`
    );
  }

  rateProduct(
    kind: 'up' | 'down',
    product_id: number
  ): Observable<LikeResponse> {
    return this.http.post<LikeResponse>(`${this.url}/likes`, {
      data: {
        product_id: product_id,
        kind: kind,
      },
    });
  }

  getCategories(): Observable<CategoriesResponse> {
    return this.http.get<CategoriesResponse>(`${this.url}/categories`);
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

  deleteCart(): Observable<object> {
    return this.http.delete(`${this.url}/cart`);
  }
}
