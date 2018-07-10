//state

const initialState = {
    cart: [],
    products: []
}


//action types

const CART = 'CART'
const PRODUCTS = 'PRODUCTS'


//reducer

///use slice to copy the card and add the new item

export default function reducer(state = initialState, action){
    switch(action.type){
        case CART:
            return Object.assign({}, state, {cart: action.payload})///copied cart Plus the new 
        case PRODUCTS:
            return Object.assign({}, state, {products: action.payload})
    }
}


//actions

export function handleCart(value){
    return{
        type: CART,
        payload: value
    }
}

export function handleProducts(value){
    return{
        type: PRODUCTS,
        payload: value
    }
}


