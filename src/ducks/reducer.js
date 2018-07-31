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


export default function reducer(state = initialState, action){
    switch(action.type){

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
    return{
        type: CARTSIZE,
        payload: value
    }
}

export function handleSubtotal(value){
    return{
        type: SUBTOTAL,
        payload: value
    }
}

export function handleShoeSize(value){
    return{
        type: SHOESIZE,
        payload: value
    }
}

export function handleeditCart(value){
    return{
        type: editCart,
        payload: value
    }
}

export function handleClearEditCart(){
    return{
        type: clearEditCart
        
    }
}

