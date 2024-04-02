import { combineReducers } from "redux";
import { messageReducer } from "./Messages/messagesReducers";
import { cartReducer } from "./Cart/cartReducers";
import { orderReducer } from "./Order/orderReducers";
import { paymentReducer } from "./Payment/paymentReducers";
import { productReducer } from "./Product/productReducer";
import { userReducer } from "./Users/usersreducer";
import { catagoryReducer } from "./Catagory/catagoryReducers";

const rootReducer = combineReducers({
    messageReducer: messageReducer,
    cartReducer:cartReducer,
    orderReducer:orderReducer,
    paymentReducer:paymentReducer,
    productReducer:productReducer,
    userReducer:userReducer,
    catagoryReducer:catagoryReducer,
});

export default rootReducer;