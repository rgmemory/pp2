//state

const initialState = {
    cart: [],
    products: []
    // size: null,
    // quantity: null
}

//action types

const CART = 'CART'
const PRODUCTS = 'PRODUCTS'


//reducer

///use slice to copy the card and add the new item

export default function reducer(state = initialState, action){
    switch(action.type){
        case CART:

            let tempCart = state.cart.slice(0);
            tempCart.push(action.payload)

            // let tempCart = state.cart;
            // tempCart.push(action.payload)
            return Object.assign({}, state, {cart: tempCart})///copied cart Plus the new 

        case PRODUCTS:
            return Object.assign({}, state, {products: action.payload})

        default: 
            return state
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