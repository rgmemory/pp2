//state

const initialState = {
    cart: [],
    products: [],
    total: null
    // size: null,
    // quantity: null
}

//action types

const CART = 'CART'
const PRODUCTS = 'PRODUCTS'
const TOTAL = 'TOTAL'


//reducer

///use slice to copy the card and add the new item

export default function reducer(state = initialState, action){
    switch(action.type){

        case CART:
            let tempCart = state.cart.slice(0);
            tempCart.push(action.payload)
            return Object.assign({}, state, {cart: tempCart})///copied cart Plus the new 

        case PRODUCTS:
            return Object.assign({}, state, {products: action.payload})

        case TOTAL:
            return Object.assign({}, state, {total: action.payload})

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

export function handleTotal(value){
    return{
        type: TOTAL,
        payload: value
    }
}