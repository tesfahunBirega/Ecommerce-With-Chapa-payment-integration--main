import * as actionTypes from './orderActionTypes'

const initialState ={
    order_error:null,
    order_loading:false,
    orders:[],
    order:{},
    order_single:{}
}

const orderStart = (state , action )=>{
    return {
        ...state,
        order_error:null,
        order_loading:true,
    }
}

const ordersGetSuccess= (state,action )=>{
    return {
        ...state , 
        orders:action.data,
        order_error:null,
        order_loading:false
    }
}

const orderGetSuccess= (state,action )=>{
    return {
        ...state , 
        order_single:action.data,
        order_error:null,
        order_loading:false
    }
}
const orderCreateSuccess= (state,action )=>{
    return {
        ...state , 
        order:action.data,
        order_error:null,
        order_loading:false
    }
}
const orderUpdateSuccess= (state,action )=>{
    return {
        ...state , 
        order_single:action.data,
        order_error:null,
        order_loading:false
    }
}
const orderDeleteSuccess= (state,action )=>{
    return {
        ...state , 
        order_single:action.data,
        order_error:null,
        order_loading:false
    }
}

const orderFail = (state,action)=>{
    return {
        ...state,
        order_error:null,
        order_loading:false
    }
}

export const orderReducer = (state = initialState , action)=>{
    switch (action.type){
        case actionTypes.ORDER_START:
            return orderStart(state,action)
        case actionTypes.ORDERS_GET:
            return ordersGetSuccess(state,action)
        case actionTypes.ORDER_CREATE:
            return orderCreateSuccess(state,action)
        case actionTypes.ORDER_GET:
            return orderGetSuccess(state,action)
        case actionTypes.ORDER_UPDATE:
            return orderUpdateSuccess(state,action)
        case actionTypes.ORDER_DELETE:
            return orderDeleteSuccess(state,action)
        case actionTypes.ORDER_FAIL:
            return orderFail(state,action)
        default:
            return state
    }
}