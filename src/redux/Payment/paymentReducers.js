import * as actionTypes from './paymentActionTypes'


const initialState ={
    payment_loading:false,
    payment_error:null,
    payments:[],
    payment_single:{}
}


const paymentStart = (state , action )=>{
    return {
        ...state,
        payment_error:null,
        payment_loading:true,
    }
}

const paymentsGetSuccess= (state,action )=>{
    return {
        ...state , 
        payments:action.data,
        payment_error:null,
        payment_loading:false
    }
}

const paymentGetSuccess= (state,action )=>{
    return {
        ...state , 
        payment_single:action.data,
        payment_error:null,
        payment_loading:false
    }
}
const paymentUpdateSuccess= (state,action )=>{
    return {
        ...state , 
        payment_single:action.data,
        payment_error:null,
        payment_loading:false
    }
}
const paymentDeleteSuccess= (state,action )=>{
    return {
        ...state , 
        payment_single:action.data,
        payment_error:null,
        payment_loading:false
    }
}

const paymentFail = (state,action)=>{
    return {
        ...state,
        payment_error:null,
        payment_loading:false
    }
}
const paymentsCreateSuccess=(state,action)=>{
    return {
        ...state,
        payment_error:null,
        payment_loading:false,
        payment_single:action.data
    }
}

export const paymentReducer = (state = initialState , action)=>{
    switch (action.type){
        case actionTypes.PAYMENT_START:
            return paymentStart(state,action)
        case actionTypes.PAYMENTS_GET:
            return paymentsGetSuccess(state,action)
        case actionTypes.PAYMENT_CREATE:
            return paymentsCreateSuccess(state,action)
        case actionTypes.PAYMENT_GET:
            return paymentGetSuccess(state,action)
        case actionTypes.PAYMENT_UPDATE:
            return paymentUpdateSuccess(state,action)
        case actionTypes.PAYMENT_DELETE:
            return paymentDeleteSuccess(state,action)
        case actionTypes.PAYMENT_FAIL:
            return paymentFail(state,action)
        default:
            return state
    }
}