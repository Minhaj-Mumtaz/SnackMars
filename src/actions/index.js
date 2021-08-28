export const selectProduct = (productId) => {
    return{
        type: 'select_product',
        payload: productId
    }
}

export const addItemToCart = (product) => {
    return{
        type: 'ADD_TO_CART',
        payload: product
    }
}

export const DecreaseItemToCart = (product) => {
    return{
        type: 'DEC_TO_CART',
        payload: product
    }
}

export const removeItem = (product) => {
    return{
        type: 'REMOVE_FROM_CART',
        payload: product
    }
}