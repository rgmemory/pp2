//state

const initialState = {
    cartSize: 0,
    subtotal: null
}

//action types

const CARTSIZE = 'CART'
const SUBTOTAL = 'SUBTOTAL'


//reducer

///use slice to copy the card and add the new item

export default function reducer(state = initialState, action){
    switch(action.type){

        // case CART:
        //     let tempCart = state.cart.slice(0);
        //     tempCart.push(action.payload)
        //     return Object.assign({}, state, {cart: tempCart})///copied cart Plus the new 

        case CARTSIZE:
            return Object.assign({}, state, {cartSize: action.payload})


        case SUBTOTAL:
            return Object.assign({}, state, {subtotal: action.payload})

        default: 
            return state
    }
}

//actions

export function handleCartSize(value){
    return{
        type: CARTSIZE,
        payload: value
    }
}

export function handleSubtotal(value){
    console.log('handlesubtotal', value)
    return{
        type: SUBTOTAL,
        payload: value
    }
}