import axios from 'axios'
import * as actionTypes from './cartActionTypes'
import { URLst } from '../../constants/index'
import { errorMessage, successMessage } from '../Messages/messagesAction'

export const cartStart =()=>{
    return {
        type:actionTypes.cart_START,
    }
}

export const cartSuccess=(data)=>{
    return {
        type:actionTypes.CARTS_GET,
        data:data
    }
}

export const cartFail=(error)=>{
    return {
        type:actionTypes.CART_FAIL,
        error:error
    }
}

export const cartSingle=(data)=>{
    return {
        type:actionTypes.CART_GET,
        data:data
    }
}


export const cartDeletSuccess = (data)=>{
    return {
        type:actionTypes.CART_DELETE,
        data:data
    }
}

export const cartCreateSuccess=(data)=>{
    return {
        type:actionTypes.CART_CREATE,
        data:data
    }
}

export const cartUpdateSuccess=(data)=>{
    return {
        type:actionTypes.CART_UPDATE,
        data:data
    }
}
export const getcartList=()=>{
    return (dispatch)=>{
        dispatch(cartStart())
        axios({
            method:'get',
            url:URLst+'carts'
        })
        .then((res)=>{
            dispatch(cartSuccess(res.data))
        })
        .catch((err)=>{
            var errorData;
            console.log(err.response);
            if (err.response != null) {
              errorData = err.response.status;
            } else {
              errorData = err.message;
            }
            dispatch(cartFail(errorData))
        })
    }
}

export const getSinlgecart= (id)=>{
    
    return (dispatch)=>{
        dispatch(cartStart)
        axios({
            method:'get',
            url:URLst+'carts/'+id
        })
        .then((res)=>{
            dispatch(cartSingle(res.data))
        })
        .catch((err)=>{
            var errorData;
        console.log(err.response);
        if (err.response != null) {
          errorData = err.response.status;
        } else {
          errorData = err.message;
        }
        dispatch(cartFail(errorData))
        })
    }
}

export const deletecart =(id,allcarts=[])=>{

    return (dispatch)=>{
       
        dispatch(cartStart())
        axios({
            method:"delete",
            url:URLst+ id,
        })
        .then((res)=>{
           
            console.log("cartS_DELETE" , res.data);
            dispatch(cartDeletSuccess(allcarts.filter(e=>e.id!==id)))
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
            dispatch(cartFail(error))
        })
    }
}

export const cartCreate=(
  value, 
    )=>{
    return (dispatch)=>{
        dispatch(cartStart())
        axios({
            url:`${URLst}carts`,
            method:'post',
            data:value,
            headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((res)=>{
            console.log("Created Success cart" , res.data);
            dispatch(cartCreateSuccess(res.data))
            dispatch(successMessage("Successfully Created cart!"))
        })
        .catch((err)=>{
            dispatch(cartFail(err))
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

export const addToCarts =(item)=>{
    return (dispatch)=>{
        dispatch({
            type:actionTypes.ADD_TO_CART,
            item
        })
    }
}

export const updateCartItem = (item) => {
    return (dispatch)=>{
        dispatch({
            type: actionTypes.UPDATE_CART_ITEM,
             item
        })
    }
}
export const updateCartItemQuantity = (product, quantity) => {
return (dispatch)=>{
    dispatch({
        type: actionTypes.UPDATE_CART_ITEM_QUANTITY,
        product,
        quantity
    })
}
}

export const clearCart = () => {
    return (dispatch)=>{
        dispatch({
    type: actionTypes.CLEAR_CART,
         })
    }
}


// // Action creators
// export const addProductToCart = (product) => 
// ({
//     type: actionTypes.ADD_TO_CART,
//     payload: product,
//   });
  
//   export const increaseQuantity = (productId) => ({
//     type: actionTypes.INCREASE_QUANTITY,
//     payload: productId,
//   });
  
//   export const decreaseQuantity = (productId) => ({
//     type: actionTypes.DECREASE_QUANTITY,
//     payload: productId,
//   });
  
//   export const deleteItem = (productId) => ({
//     type: actionTypes.DELETE_ITEM,
//     payload: productId,
//   });
  
//   export const resetCart = () => ({
//     type: actionTypes.RESET_CART,
//   });

export const addProductToCart = (product) => {
    return (dispatch) => {
      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: product ,
      });
    };
  };
  
  export const increaseQuantity = (productId) => {
    return (dispatch) => {
      dispatch({
        type: actionTypes.INCREASE_QUANTITY,
        payload: productId,
      });
    };
  };
  
  export const decreaseQuantity = (productId) => {
    return (dispatch) => {
      dispatch({
        type: actionTypes.DECREASE_QUANTITY,
        payload: productId,
      });
    };
  };
  
  export const deleteItem = (productId) => {
    return (dispatch) => {
      dispatch({
        type: actionTypes.DELETE_ITEM,
        payload: productId,
      });
    };
  };
  
  export const resetCart = () => {
    return (dispatch) => {
      dispatch({
        type: actionTypes.RESET_CART,
      });
    };
  };