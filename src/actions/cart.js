export const ADD_TO_CART = Symbol('ADD_TO_CART')
export const REMOVE_FROM_CART = Symbol('REMOVE_FROM_CART')

export function addToCart(item){
    return {
        type: ADD_TO_CART,
        payload: {
            item
        }
    }
}
export function removeFromCart(itemId){
    return {
        type: REMOVE_FROM_CART,
        payload: {
            itemId
        }
    }
}