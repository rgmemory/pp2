//state

const initialState = {
    cartSize: null,
    total: null
}

//action types

const CARTSIZE = 'CART'
const TOTAL = 'TOTAL'


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


        case TOTAL:
            return Object.assign({}, state, {total: action.payload})

        default: 
            return state
    }
}

//actions

export function handleCartSize(value){
    console.log('handlecartsize', value)
    return{
        type: CARTSIZE,
        payload: value
    }
}

export function handleTotal(value){
    return{
        type: TOTAL,
        payload: value
    }
}