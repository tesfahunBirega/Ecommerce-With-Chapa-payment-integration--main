/* eslint-disable no-unused-vars */
import axios from "axios";
import * as actionTypes from "./usersActionType";
import { errorMessage, successMessage } from "../Messages/messagesAction";
import { URLst } from "../../constants";

export const userStart = () => {
  return {
    type: actionTypes.USER_START,
  };
};

export const userSuccess = (data) => {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    data: data,
  };
};

export const userFail = (error) => {
  return {
    type: actionTypes.USER_FAIL,
    error: error,
  };
};

export const userSingle = (data) => {
  return {
    type: actionTypes.GET_SINGLE_USER,
    data: data,
  };
};

export const userDeletSuccess = (data) => {
  return {
    type: actionTypes.USER_DELETE,
    data: data,
  };
};

export const userCreateSuccess = (data) => {
  return {
    type: actionTypes.USER_CREATE,
    data: data,
  };
};
export const userLoginSuccess = (data) => {
  return {
    type: actionTypes.USER_LOGIN,
    data: data,
  };
};

export const userUpdateSuccess = (data) => {
  return {
    type: actionTypes.USER_UPDATE,
    data: data,
  };
};
export const getUserList = () => {
  return (dispatch) => {
    dispatch(userStart());
    axios({
      method: "get",
      url: URLst + "users",
    })
      .then((res) => {
        console.log(res.data, "ALL ACTION");
        dispatch(userSuccess(res.data));
      })
      .catch((err) => {
        console.log(err, "err ACTION");
        var errorData;
        console.log(err.response);
        if (err.response != null) {
          errorData = err.response.status;
        } else {
          errorData = err.message;
        }
        dispatch(userFail(errorData));
      });
  };
};

export const getSinlgeUser = (id) => {
  return (dispatch) => {
    dispatch(userStart);
    axios({
      method: "get",
      url: URLst + "users/" + id,
    })
      .then((res) => {
        console.log(res.data, "SINLGE ACTION");

        dispatch(userSingle(res.data));
      })
      .catch((err) => {
        var errorData;
        console.log(err.response);
        if (err.response != null) {
          errorData = err.response.status;
        } else {
          errorData = err.message;
        }
        dispatch(userFail(errorData));
      });
  };
};

export const deleteUser = (id, allUsers = []) => {
  return (dispatch) => {
    dispatch(userStart());
    axios({
      method: "delete",
      url: URLst + id,
    })
      .then((res) => {
        console.log("USERS_DELETE", res.data);
        dispatch(userDeletSuccess(allUsers.filter((e) => e.id !== id)));
      })
      .catch((err) => {
        let error;

        if (err.response) {
          error = err.message + " " + err.response.data;
        }
        if (err.request) {
          error = err.message + "Faild request, Try Again!";
        }

        dispatch(errorMessage(error));
        dispatch(userFail(error));
      });
  };
};

export const userCreate = (value) => {
  console.log(value, "valuevalue");
  return (dispatch) => {
    dispatch(userStart());
    axios({
      url: `${URLst}users`,
      method: "post",
      data: value,
      headers: { "Content-Type": "multipart/form-data" },
      mode: "no-cors",
    })
      .then((res) => {
        console.log("Created Success user", res.data);
        dispatch(userCreateSuccess(res.data));
        dispatch(successMessage("Successfully Created User!"));
      })
      .catch((err) => {
        dispatch(userFail(err));
        let error;

        if (err.response) {
          error = err.message + " " + err.response.data;
        }
        if (err.request) {
          error = err.message + "Faild request, Try Again!";
        }

        console.log("ErrorError", error);

        dispatch(errorMessage(error));
      });
  };
};
export const userLogin = (value) => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch(userStart());
    axios({
      url: `${URLst}users/login`,
      method: "post",
      data: value,
      mode: "no-cors",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log("Login data", res);
        localStorage.setItem("token", res.data.token);
        dispatch(userLoginSuccess(res.data));
        dispatch(successMessage(res.data.message));
      })
      .catch((err) => {
        dispatch(userFail(err));
        let error;

        if (err.response) {
          error = err.message + " " + err.response.data;
        }
        if (err.request) {
          error = err.message + "Faild request, Try Again!";
        }

        console.log("ErrorError", error);

        dispatch(errorMessage(error));
      });
  };
};
