/* eslint-disable no-unused-vars */
import * as actionTypes from './usersActionType'

const initialState={

    users_error:null,
    users_loading:false,
    users:[],
    single_user:{},
    user_delete:[],
    user_create:[],
    loged_user:{}
    
}

const userStart=(state , action)=>{
    return {
        ...state,
        users_error:null,
        users_loading:true,
    }
}

const userSuccess= (state,action )=>{
    return {
        ...state , 
        users:action.data,
        users_error:null,
        users_loading:false
    }
}

const userSingle=(state,action)=>{
    return {
        ...state , 
        single_user:action.data,
        users_error:null,
        users_loading:false
    }
}

const userFail = (state,action)=>{
    return {
        ...state,
        users_error:action.error,
        users_loading:false
    }
}

const delUser =(state,action)=>{
    return {
        ...state,
        user_delete:action.data
    }
}

const loginUser =(state,action)=>{
    return {
        ...state,
        loged_user:action.data
    }
}


export const userReducer= (state = initialState , action ) =>{
    switch (action.type){
        case actionTypes.USER_START:
            return userStart(state,action)
        case actionTypes.GET_USER_SUCCESS:
            return userSuccess(state,action)
        case actionTypes.GET_SINGLE_USER:
            return userSingle(state,action)
        case actionTypes.GET_USER_FAIL:
            return userFail(state,action)
        case actionTypes.USER_DELETE:
            return delUser(state,action)
        case actionTypes.USER_CREATE:
            return creUser(state,action)
        case actionTypes.USER_LOGIN:
            return loginUser(state,action)
        default:
            return state
    }
}