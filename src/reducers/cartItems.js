const init = [];

export default cartItems = (state=init, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            {
            const product = action.payload;
            const cart = state;

            const existingProductIndex = findProductIndex(cart,product.id);

            const updatedCart= existingProductIndex >= 0
            ? updateProductUnits(cart,product)
            :[...cart, product]
            
            return updatedCart
            // return [...state, action.payload]
            }
        case 'DEC_TO_CART':
            {
                const product = action.payload;
                const cart = state;

            const existingProductIndex = findProductIndex(cart,product.id);

            const updatedCart= existingProductIndex >= 0
            ? updateDecProductUnits(cart,product)
            :[...cart, product]
            
            return updatedCart

            // const updatedCart
            // if(existingProductIndex >0){
            //     updatedCart = updateDecProductUnits(cart,product)
            //     return updatedCart
            // }else{
            //     return state.filter(cartItem => cartItem.id !== action.payload.id)
            // }
            
            }
        case 'REMOVE_FROM_CART':
            return state.filter(cartItem => cartItem.id !== action.payload.id)
    }

    return state
}

const findProductIndex = (cart,productId) => {
    return cart.findIndex(p=>p.id === productId)
}
    const updateProductUnits = (cart,product) => {
        const productIndex = findProductIndex(cart,product.id);

        const updatedCart = [...cart];
        const existingProduct = updatedCart[productIndex];

        const updatedUnitsProduct = {
            ...existingProduct,
            quantity: existingProduct.quantity + 1
        };
        updatedCart[productIndex] = updatedUnitsProduct;

        return updatedCart;
    }
    const updateDecProductUnits = (cart,product) => {
        const productIndex = findProductIndex(cart,product.id);

        const updatedCart = [...cart];
        const existingProduct = updatedCart[productIndex];

        const updatedUnitsProduct = {
            ...existingProduct,
            quantity: existingProduct.quantity - 1
        };
        updatedCart[productIndex] = updatedUnitsProduct;

        return updatedCart;
    }

