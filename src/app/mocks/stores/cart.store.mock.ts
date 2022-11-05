import { MockSelector } from "@ngrx/store/testing"
import { Cart } from "src/app/models/rest.models"

export const cartInitialStateMock: Cart = {
    "id": 311,
    "user_id": 6,
    "number": 282,
    "status": "cart",
    "total": 8.98,
    "total_items": 8.98,
    "completed_at": null,
    "created_at": "2022-11-05T17:50:06.838Z",
    "items": [
        {
            "id": 883,
            "quantity": 1,
            "product_variant_id": 40,
            "product_id": 40,
            "order_id": 311,
            "total": "8.98",
            "price": "8.98",
            "name": "M&M's Peanut Butter ",
            "description": "Mini Candy",
            "promotion": 0
        }
    ]
}

export const cartSelectorsMock: MockSelector[] = [{ selector: 'cartFromStore', value: {cart:cartInitialStateMock}}]