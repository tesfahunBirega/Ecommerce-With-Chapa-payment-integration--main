/* eslint-disable no-unused-vars */
import * as actionTypes from './catagoryActionTypes'

const initialState={
    catagory_error:null,
    catagory_loading:false,
    catagory:[],
}

const catagoryStart=(state , action)=>{
    return {
        ...state,
        catagory_error:null,
        catagory_loading:true,
    }
}

const catagorySuccess= (state,action )=>{
    return {
        ...state , 
        catagory:action.data,
        catagory_error:null,
        catagory_loading:false
    }
}

const catagoryCreate=(state,action)=>{
    return {
        ...state , 
        single_catagory:action.data,
        catagory_error:null,
        catagory_loading:false
    }
}

const catagoryFail = (state,action)=>{
    return {
        ...state,
        catagory_error:action.error,
        catagory_loading:false
    }
}

export const catagoryReducer= (state = initialState , action ) =>{
    switch (action.type){
        case actionTypes.CATAGORY_START:
            return catagoryStart(state,action)
        case actionTypes.CATAGORY_GET:
            return catagorySuccess(state,action)
        case actionTypes.CATAGORY_CREATE:
            return catagoryCreate(state,action)
        case actionTypes.CATAGORY_FAIL:
            return catagoryFail(state,action)
        default:
            return state
    }
}