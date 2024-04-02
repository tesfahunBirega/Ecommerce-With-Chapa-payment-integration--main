import * as actionTypes from "./productActionTypes";

const initialState = {
  product_error: null,
  product_loading: false,
  products: [],
  product_single: {},
  filtered_products: [],
};

const productStart = (state, action) => {
  return {
    ...state,
    product_error: null,
    product_loading: true,
  };
};

const productsGetSuccess = (state, action) => {
  return {
    ...state,
    products: action.data.product,
    product_error: null,
    product_loading: false,
  };
};

const productGetSuccess = (state, action) => {
  return {
    ...state,
    product_single: action.data,
    product_error: null,
    product_loading: false,
  };
};
const productUpdateSuccess = (state, action) => {
  return {
    ...state,
    product_single: action.data,
    product_error: null,
    product_loading: false,
  };
};
const productDeleteSuccess = (state, action) => {
  return {
    ...state,
    product_single: action.data,
    product_error: null,
    product_loading: false,
  };
};

const productFail = (state, action) => {
  return {
    ...state,
    product_error: action.error,
    product_loading: false,
  };
};

const productFilterCatagorySuccess = (state, action) => {
  return {
    ...state,
    products: action.data,
    product_error: null,
    product_loading: false,
  };
};
const productFilterPriceSuccess = (state, action) => {
  return {
    ...state,
    products: action.data,
    product_error: null,
    product_loading: false,
  };
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_START:
      return productStart(state, action);
    case actionTypes.PRODUCTS_GET:
      return productsGetSuccess(state, action);
    case actionTypes.PRODUCT_GET:
      return productGetSuccess(state, action);
    case actionTypes.PRODUCT_UPDATE:
      return productUpdateSuccess(state, action);
    case actionTypes.PRODUCT_DELETE:
      return productDeleteSuccess(state, action);
    case actionTypes.PRODUCT_FAIL:
      return productFail(state, action);
    case actionTypes.PRODUCTS_FILTER_CATAGORY:
      return productFilterCatagorySuccess(state, action);
    case actionTypes.PRODUCTS_FILTER_PRICE:
      return productFilterPriceSuccess(state, action);

    default:
      return state;
  }
};
