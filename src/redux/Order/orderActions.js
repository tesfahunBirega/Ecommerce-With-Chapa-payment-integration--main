import axios from 'axios'
import * as actionTypes from './orderActionTypes'
import { URLst } from '../../constants/index'
import { errorMessage, successMessage } from '../Messages/messagesAction'

export const orderStart =()=>{
    return {
        type:actionTypes.ORDER_START,
    }
}

export const orderSuccess=(data)=>{
    return {
        type:actionTypes.ORDERS_GET,
        data:data
    }
}

export const orderFail=(error)=>{
    return {
        type:actionTypes.ORDER_FAIL,
        error:error
    }
}

export const orderSingle=(data)=>{
    return {
        type:actionTypes.ORDER_GET,
        data:data
    }
}


export const orderDeletSuccess = (data)=>{
    return {
        type:actionTypes.ORDER_DELETE,
        data:data
    }
}

export const orderCreateSuccess=(data)=>{
    return {
        type:actionTypes.ORDER_CREATE,
        data:data
    }
}

export const orderUpdateSuccess=(data)=>{
    return {
        type:actionTypes.ORDER_UPDATE,
        data:data
    }
}
export const getorderList=()=>{
    return (dispatch)=>{
        dispatch(orderStart())
        axios({
            method:'get',
            url:URLst+'orders'
        })
        .then((res)=>{
            dispatch(orderSuccess(res.data))
        })
        .catch((err)=>{
            var errorData;
            console.log(err.response);
            if (err.response != null) {
              errorData = err.response.status;
            } else {
              errorData = err.message;
            }
            dispatch(orderFail(errorData))
        })
    }
}

export const getSinlgeorder= (id)=>{
    
    return (dispatch)=>{
        dispatch(orderStart)
        axios({
            method:'get',
            url:URLst+'order/'+id
        })
        .then((res)=>{
            dispatch(orderSingle(res.data))
        })
        .catch((err)=>{
            var errorData;
        console.log(err.response);
        if (err.response != null) {
          errorData = err.response.status;
        } else {
          errorData = err.message;
        }
        dispatch(orderFail(errorData))
        })
    }
}

export const deleteorder =(id,allorders=[])=>{

    return (dispatch)=>{
       
        dispatch(orderStart())
        axios({
            method:"delete",
            url:URLst+ id,
        })
        .then((res)=>{
           
            console.log("orderS_DELETE" , res.data);
            dispatch(orderDeletSuccess(allorders.filter(e=>e.id!==id)))
        })
        .catch((err)=>{
            let error;

            if(err.response){
                error = err.message +" " +  err.response.data
            }
            if(err.request){
                error=err.message + "Faild request, Try Again!"
            }
            
            dispatch(errorMessage(error))
            dispatch(orderFail(error))
        })
    }
}

export const orderCreate=(
  value, token
    )=>{
    return (dispatch)=>{
        dispatch(orderStart())
        axios({
            url:`${URLst}order`,
            method:'post',
            data:value,
            headers: { "Access-Control-Allow-Origin": "*" , "Authorization":`Bearer ${token}` },
        })
        .then((res)=>{
            console.log("Created Success order" , res.data);
            dispatch(orderCreateSuccess(res.data))
            dispatch(successMessage("Successfully Created order!"))
        })
        .catch((err)=>{
            dispatch(orderFail(err))
            let error;

            if(err.response){
                error = err.message +" " +  err.response.data
            }
            if(err.request){
                error=err.message + "Faild request, Try Again!"
            }
            dispatch(errorMessage(error))
        })
       
    }
}