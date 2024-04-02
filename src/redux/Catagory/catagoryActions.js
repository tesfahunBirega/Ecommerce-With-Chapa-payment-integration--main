/* eslint-disable no-unused-vars */
import axios from 'axios'
import * as actionTypes from './catagoryActionTypes'
import { errorMessage, successMessage } from '../Messages/messagesAction'
import { URLst } from '../../constants'

export const catagoryStart =()=>{
    return {
        type:actionTypes.CATAGORY_START,
    }
}

export const catagorySuccess=(data)=>{
    return {
        type:actionTypes.CATAGORY_GET,
        data:data
    }
}

export const catagoryFail=(error)=>{
    return {
        type:actionTypes.CATAGORY_FAIL,
        error:error
    }
}

export const catagoryCreateSuccess=(data)=>{
    return {
        type:actionTypes.CATAGORY_CREATE,
        data:data
    }
}

export const getcatagoryList=()=>{
    return (dispatch)=>{
        dispatch(catagoryStart())
        axios({
            method:'get',
            url:URLst+'category'
        })
        .then((res)=>{
            dispatch(catagorySuccess(res.data))
        })
        .catch((err)=>{
            var errorData;
            console.log(err.response);
            if (err.response != null) {
              errorData = err.response.status;
            } else {
              errorData = err.message;
            }
            dispatch(catagoryFail(errorData))
        })
    }
}

export const getSinlgecatagory= (id)=>{
    
    return (dispatch)=>{
        dispatch(catagoryStart)
        axios({
            method:'get',
            url:URLst+'catagorys/'+id
        })
        .then((res)=>{
            dispatch(catagorySingle(res.data))
        })
        .catch((err)=>{
            var errorData;
        console.log(err.response);
        if (err.response != null) {
          errorData = err.response.status;
        } else {
          errorData = err.message;
        }
        dispatch(catagoryFail(errorData))
        })
    }
}

export const catagoryCreate=(
  value, 
    )=>{
       console.log(value,"valuevalue")
    return (dispatch)=>{
        dispatch(catagoryStart())
        axios({
            url:`${URLst}category`,
            method:'post',
            data:value,
            mode:"no-cors"
        })
        .then((res)=>{
            dispatch(catagoryCreateSuccess(res.data))
            dispatch(successMessage("Successfully Created catagory!"))
        })
        .catch((err)=>{
            dispatch(catagoryFail(err))
            let error;

            if(err.response){
                error = err.message +" " +  err.response.data
            }
            if(err.request){
                error=err.message + "Faild request, Try Again!"
            }
            
            console.log("ErrorError",error);

            dispatch(errorMessage(error))
        })
       
    }
}