import axios from 'axios'
import * as actionTypes from './paymentActionTypes'
import { URLst } from '../../constants/index'
import { errorMessage, successMessage } from '../Messages/messagesAction'

export const paymentStart =()=>{
    return {
        type:actionTypes.PAYMENT_START,
    }
}

export const paymentSuccess=(data)=>{
    return {
        type:actionTypes.PAYMENTS_GET,
        data:data
    }
}

export const paymentFail=(error)=>{
    return {
        type:actionTypes.PAYMENT_FAIL,
        error:error
    }
}

export const paymentSingle=(data)=>{
    return {
        type:actionTypes.PAYMENT_GET,
        data:data
    }
}


export const paymentDeletSuccess = (data)=>{
    return {
        type:actionTypes.PAYMENT_DELETE,
        data:data
    }
}

export const paymentCreateSuccess=(data)=>{
    return {
        type:actionTypes.PAYMENT_CREATE,
        data:data
    }
}

export const paymentUpdateSuccess=(data)=>{
    return {
        type:actionTypes.PAYMENT_UPDATE,
        data:data
    }
}
export const getPaymentList=()=>{
    return (dispatch)=>{
        dispatch(paymentStart())
        axios({
            method:'get',
            url:URLst+'payments'
        })
        .then((res)=>{
            dispatch(paymentSuccess(res.data))
        })
        .catch((err)=>{
            var errorData;
            console.log(err.response);
            if (err.response != null) {
              errorData = err.response.status;
            } else {
              errorData = err.message;
            }
            dispatch(paymentFail(errorData))
        })
    }
}

export const getSinlgePayment= (id)=>{
    
    return (dispatch)=>{
        dispatch(paymentStart)
        axios({
            method:'get',
            url:URLst+'payments/'+id
        })
        .then((res)=>{
            dispatch(paymentSingle(res.data))
        })
        .catch((err)=>{
            var errorData;
        console.log(err.response);
        if (err.response != null) {
          errorData = err.response.status;
        } else {
          errorData = err.message;
        }
        dispatch(paymentFail(errorData))
        })
    }
}

export const paymentDelete =(id,allpayments=[])=>{

    return (dispatch)=>{
       
        dispatch(paymentStart())
        axios({
            method:"delete",
            url:URLst+ id,
        })
        .then((res)=>{
           
            console.log("paymentS_DELETE" , res.data);
            dispatch(paymentDeletSuccess(allpayments.filter(e=>e.id!==id)))
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
            dispatch(paymentFail(error))
        })
    }
}

export const paymentCreate=(
  value,token
    )=>{
       console.log(value,"valuevalue")
    return (dispatch)=>{
        dispatch(paymentStart())
        axios({
            url:`${URLst}payment`,
            method:'post',
            data:value,
            headers: { "Access-Control-Allow-Origin": "*", "Authorization":`Bearer ${token}`},
        })
        .then((res)=>{
            console.log("Created Success payment" , res.data.checkout_url);
            if(res.data.checkout_url){
                window.location.href = res.data.checkout_url;
            }else{
                throw new Error("Chapa Payment Failed")
            }        
            dispatch(paymentCreateSuccess(res.data))
            dispatch(successMessage("Successfully Created payment!"))
        })
        .catch((err)=>{
            dispatch(paymentFail(err))
            let error;

            if(err.response){
                error = err.message +" " +  err.response.data
            }
            if(err.request){
                error=err.message + "Faild request, Try Again!"
            }
            dispatch(errorMessage(error))
            
            dispatch(errorMessage(error))
        })
       
    }
}