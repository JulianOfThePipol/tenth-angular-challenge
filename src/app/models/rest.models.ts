export interface Meta {
    "current_page":number,
    "from": string | null,
    "last_page": number,
    "per_page":number,
    "to": number,
    "total": number
}

export interface Filter {
    "name_cont"?: string,
    "name_not_cont"?: string,
    "name_start"?: string,
    "name_not_start"?: string,
    "name_end"?: string,
    "name_not_end"?: string,
    "name_eq"?: string,
    "name_not_eq"?: string,
    "category_in"?: string[],
    "category_not_in"?: string[],
    "author_null"?: number,
    "author_not_null"?: number,
    "reproductions_gt"?: number,
    "reproductions_gteq"?: number,
    "reproductions_lt"?: number,
    "reproductions_lteq"?: number,
    "reproductions_true"?: number,
    "reproductions_false"?: number,
    "category_id_eq"?: string
}

export interface Page {
    "size": number,
    "number": number
}

export interface User {
    "id" : number,
    "email":string,
    "name": string
}

export interface LoginData {
    "email": string,
    "password": string
}

export interface LoginResponse {
    "data" : {
        "token": string,
        "user": User
    }
}

export interface Product {
    "id": number,
    "slug": string,
    "name": string,
    "description": string,
    "active": number,
    "likes_count": number,
    "likes_up_count": number,
    "likes_down_count": number,
    "published_at": string
    "master": {
        "id": number,
        "sku": string,
        "price": string,
        "promotional_price": string,
        "stock": number,
        "weight": string,
        "height": string,
        "width": string,
        "depth": string,
        "is_master": number,
        "position": number
    },
    "category"?: {
        "id": number,
        "slug": string,
        "name": string
    },
    "image"?: {
        "id": number,
        "url": string
    }
}

export interface Category {
    "id": string,
    "slug": string,
    "name": string
}

export interface Like {
    "id": number,
    "user_id": number,
    "product_id": number,
    "kind": -1 | 0 | 1
}



export interface CartItem {
    "id"?: number,
    "quantity": number,
    "product_variant_id": number,
    "product_id"?: number,
    "order_id"?: number,
    "total"?: string,
    "price"?: string,
    "name"?: string,
    "description"?: string,
    "promotion"?: number,
    "image_url"?: string
}



export interface Cart {
    "id"?: number,
    "user_id"?: number,
    "number"?: number,
    "status"?: string,
    "total": number,
    "total_items": number,
    "completed_at"?: null | string,
    "created_at"?: string,
    "items": CartItem[]
}


export interface ProductsResponse {
    "data": Product[]
    "meta": Meta
}

export interface SingleProductResponse {
    "data": Product
    "meta": Meta
}


export interface LikesResponse  {
    "data": Like[],
    "meta": Meta
}

export interface CategoriesResponse {
    "data": Category[],
    "meta": Meta
}

export interface SingleCategoryResponse {
    "data": Category,
    "meta": Meta
}

export interface CartResponse {
    "data": Cart,
    "meta"?: Meta
}

export interface CartPostItem {
    "id"?:number,
    "product_variant_id": number,
    "quantity": number
}