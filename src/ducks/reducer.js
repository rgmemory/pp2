//state

const initialState = {
    cartSize: null,
    subtotal: null,
    editCart: [],
    shoeSize: null,
    clearEditCart: []
}

//action types

const CARTSIZE = 'CART'
const SUBTOTAL = 'SUBTOTAL'
const SHOESIZE = 'SHOESIZE'
const editCart = 'editCart'
const clearEditCart = 'clearEditCart'


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

        case SHOESIZE:
            return Object.assign({}, state, {shoeSize: action.payload}) 
            
        case editCart:
            let tempCart = state.editCart.slice(0);
            tempCart.push(action.payload)
            return Object.assign({}, state, {editCart: tempCart})

        case clearEditCart:
            let secondTempCart = [];
            return Object.assign({}, state, {editCart: secondTempCart})
        default: 
            return state
    }
}

//actions

export function handleCartSize(value){
    // console.log('cartsize value on reducer', value)
    return{
        type: CARTSIZE,
        payload: value
    }
}

export function handleSubtotal(value){
    // console.log('handlesubtotal', value)
    return{
        type: SUBTOTAL,
        payload: value
    }
}

export function handleShoeSize(value){
    console.log('handleShoeSize', value)
    return{
        type: SHOESIZE,
        payload: value
    }
}

export function handleeditCart(value){
    // console.log('editCart', value)
    return{
        type: editCart,
        payload: value
    }
}

export function handleClearEditCart(){
    // console.log('editCart', value)
    return{
        type: clearEditCart
        
    }
}

