
const productReducer = (state=null, action) => {
    switch (action.type) {
        case 'select_product':
            return action.payload
    }

    return state
}

export default productReducer