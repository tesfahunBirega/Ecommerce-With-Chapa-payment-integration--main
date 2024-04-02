import * as actionTypes from './cartActionTypes'

const initialState ={
    cart_error:null,
    cart_loading:false,
    carts:[],
    cart_single:{},
    userInfo: [],
    products: [], 
}

// const cartStart = (state , action )=>{
//     return {
//         ...state,
//         cart_error:null,
//         cart_loading:true,
//     }
// }

// const cartsGetSuccess= (state,action )=>{
//     return {
//         ...state , 
//         carts:action.data,
//         cart_error:null,
//         cart_loading:false
//     }
// }

// const cartGetSuccess= (state,action )=>{
//     return {
//         ...state , 
//         cart_single:action.data,
//         cart_error:null,
//         cart_loading:false
//     }
// }
// const cartUpdateSuccess= (state,action )=>{
//     return {
//         ...state , 
//         cart_single:action.data,
//         cart_error:null,
//         cart_loading:false
//     }
// }
// const cartDeleteSuccess= (state,action )=>{
//     return {
//         ...state , 
//         cart_single:action.data,
//         cart_error:null,
//         cart_loading:false
//     }
// }

// const cartFail = (state,action)=>{
//     return {
//         ...state,
//         cart_error:null,
//         cart_loading:false
//     }
// }
// const clearCart = (state,action)=>{
//     return {
//         ...state,
//         cart_error:null,
//         cart_loading:false,
//         carts:[]
//     }
// }
// const updateCart = (state,action)=>{
//     const item = action.item;
//             if (item && item.quantity > 0) {
//                 const index = state.carts.findIndex(it => it.product.id === item.product.id);
//                 const newItems = [...state.carts];
//                 if (index !== -1) {
//                     newItems[index] = { ...item };
//                     return { ...state, carts: newItems };
//                 } else {
//                     newItems.push({ ...item });
//                 }
//                 return { ...state, carts: newItems };
//             } else {
//                 const items = state.carts.filter(it => it.product.id !== item.product.id);
//                 return { ...state, cart };
//             }
// }

// const updateCartItemQuantity = (state,action)=>{
//     const quantity = action.quantity;
//     const product = action.product;

//     if (quantity === 0) {
//         const cart = state.cart.filter(it => it.product._id !== product._id);
//         return { ...state, cart };
//     } else {
//         const index = state.cart.findIndex(it => it.product._id === product._id);
//         if (index !== -1) {
//             const newItems = [...state.cart];
//             const item = { ...state.cart[index], quantity };
//             newItems[index] = { ...item };
//             return { ...state, cart: newItems };
//         } else {
//             // pass, should never happen
//         }
//     }
//     return state;
// }


// const addToCartSuccess=(state,action)=>{
//     const item = state.carts.find(
//         (item) => item._id === action.payload._id
//       );
//       if (item) {
//         item.quantity += action.payload.quantity;
//       } else {
//         state.carts.push(action.payload);
//       }
      
//     // return {
//     //     ...state,
//     //     cart_error:null,
//     //     cart_loading:false,
//     //     carts: 
        
//     // }
// }

// export const cartReducer = (state = initialState , action)=>{
//     switch (action.type){
//         case actionTypes.CART_START:
//             return cartStart(state,action)
//         case actionTypes.CARTS_GET:
//             return cartsGetSuccess(state,action)
//         case actionTypes.CART_GET:
//             return cartGetSuccess(state,action)
//         case actionTypes.CART_UPDATE:
//             return cartUpdateSuccess(state,action)
//         case actionTypes.CART_DELETE:
//             return cartDeleteSuccess(state,action)
//         case actionTypes.CART_FAIL:
//             return cartFail(state,action)
//         case actionTypes.CLEAR_CART:
//             return clearCart(state,action)
//         case actionTypes.UPDATE_CART_ITEM:
//             return updateCart(state,action)
//         case actionTypes.UPDATE_CART_ITEM_QUANTITY:
//             return updateCartItemQuantity(state,action)
//         case actionTypes.ADD_TO_CART:
//             return addToCartSuccess(state,action)
//         default:
//             return state
//     }
// }

// const c =[
//     {0: {
//         product:{
//             id:"ksdajflk",
//             pname:'kasadfj',
//         },
//         quantity:2

//     }
// }
// ]
// const addToCartSuccess=(state,action)=>{
//      // Check if the product is already in the cart
//      const existingItem = state.carts.filter((item) => item._id === action.payload._id);

//      if (existingItem) {
//        // If it exists, update the quantity
//        existingItem.quantity += action.payload.quantity;
//      } else {
//        // If it doesn't exist, add it to the cart
//        return {
//          ...state,
//          carts: [...state.carts, action.payload],
//        };
//      }
//      return { ...state };
// }
// const addToCartSuccess = (state, action) => {
//     const newItem = action.payload;
//     const existingItem = state[newItem.product.id];
  
//     if (existingItem) {
//       // If it exists, update the quantity
//       existingItem.quantity += newItem.quantity;
//     } else {
//       // If it doesn't exist, add it to the cart
//       return {
//         ...state,
//         [newItem.product.id]: {
//           product: newItem.product,
//           quantity: newItem.quantity,
//         },
//       };
//     }
  
//     return { ...state };
//   };

// const addToCartSuccess = (state, action) => {
//     const newItem = action.payload;
//     const existingItem = state.carts[newItem.product._id];
  
//     if (existingItem) {
//       // If it exists, update the quantity
//       return {
//         ...state,
//         [newItem.product._id]: {
//           product: newItem.product,
//           quantity: existingItem.quantity + newItem.quantity,
//         },
//       };
//     } else {
//       // If it doesn't exist, add it to the cart
//       return {
//         ...state,
//         carts:[
//             ...state.carts,  [newItem.product._id]: {
//           product: newItem.product,
//           quantity: newItem.quantity,
//         },
//     ]
//       };
//     }
//   };

// const addToCartSuccess = (state, action) => {
//     const newItem = action.payload;
//     // const existingItem = state.carts.filter((item) => item.product._id === newItem.product._id);
//     const existingItem = state.carts.find((item) => item.product && newItem.product && item.product._id === newItem.product._id);

//     if (existingItem) {
//       // If it exists, update the quantity
//       return {
//         ...state,
//         carts: state.carts.map((item) =>
//           item.product._id === newItem.product._id
//             ? {
//                 ...item,
//                 quantity: item.quantity + newItem.quantity,
//               }
//             : item
//         ),
//       };
//     } else {
//       // If it doesn't exist, add it to the cart
//       if (state.carts.length === 0) {
//         // If the cart is empty, change the data structure to an object
//         return {
//           ...state,
//           carts: {
//             [newItem.product._id]: {
//               product: newItem.product,
//               quantity: newItem.quantity,
//             },
//           },
//         };
//       } else {
//         // If there are existing items in the cart, keep the data structure as an array
//         return {
//           ...state,
//           carts: [...state.carts, { product: newItem.product, quantity: newItem.quantity }],
//         };
//       }
//     }
//   };

const addToCartSuccess = (state, action) => {
    const newItem = action.payload;
    const existingItemIndex = state.carts.findIndex(
      (item) => item.product._id === newItem.product._id
    );
  
    if (existingItemIndex !== -1) {
      // If it exists, update the quantity
      const updatedCarts = [...state.carts];
      updatedCarts[existingItemIndex] = {
        ...updatedCarts[existingItemIndex],
        quantity: updatedCarts[existingItemIndex].quantity + newItem.quantity,
      };
  
      return {
        ...state,
        carts: updatedCarts,
      };
    } else {
      // If it doesn't exist, add it to the cart
      return {
        ...state,
        carts: [...state.carts, { product: newItem.product, quantity: newItem.quantity }],
      };
    }
  };
const increaseQuantitySuccess=(state,action)=>{

   const increasedProductId = action.payload;
      const increaseItemIndex = state.carts.findIndex((item) => item.product._id === increasedProductId);

      if (increaseItemIndex !== -1) {
        const updatedCarts = [...state.carts];
        updatedCarts[increaseItemIndex] = {
          ...updatedCarts[increaseItemIndex],
          quantity: updatedCarts[increaseItemIndex].quantity + 1,
          product: {
            ...updatedCarts[increaseItemIndex].product,
            quantity: updatedCarts[increaseItemIndex].product.quantity + 1,
          },
        };

        return {
          ...state,
          carts: updatedCarts,
        };
      }
      return state;

//    return state;
}
const decreaseQuantitySuccess=(state,action)=>{

    const decreasedProductId = action.payload;
  const decreaseItemIndex = state.carts.findIndex((item) => item.product._id === decreasedProductId);

  if (decreaseItemIndex !== -1) {
    const updatedCarts = [...state.carts];
    if (updatedCarts[decreaseItemIndex].quantity > 1) {
      updatedCarts[decreaseItemIndex] = {
        ...updatedCarts[decreaseItemIndex],
        quantity: updatedCarts[decreaseItemIndex].quantity - 1,
        product: {
          ...updatedCarts[decreaseItemIndex].product,
          quantity: updatedCarts[decreaseItemIndex].product.quantity - 1,
        },
      };
    }

    return {
      ...state,
      carts: updatedCarts,
    };
  }
  return state;
  }
  const deleteItemSuccess=(state,action)=>{
    const deletedProductId = action.payload;
    const updatedCarts = state.carts.filter((item) => item.product._id !== deletedProductId);

    return {
      ...state,
      carts: updatedCarts,
    };
  }
  const resetCartSuccess=(state,action)=>{
    return {
        ...state,
        carts: [],
      };
  }


export const cartReducer = (state = initialState , action)=>{
    switch (action.type){
        case actionTypes.ADD_TO_CART:
            return addToCartSuccess(state,action)
        case actionTypes.INCREASE_QUANTITY:
            return increaseQuantitySuccess(state,action)
        case actionTypes.DECREASE_QUANTITY:
            return decreaseQuantitySuccess(state,action)
        case actionTypes.DELETE_ITEM:
            return deleteItemSuccess(state,action)
        case actionTypes.RESET_CART:
            return resetCartSuccess(state,action)
             
        default:
            return state
    }
}