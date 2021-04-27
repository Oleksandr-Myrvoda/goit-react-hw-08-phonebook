import { createAction } from "@reduxjs/toolkit";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR,
} from "./authConstants";

const registerRequest = createAction(REGISTER_REQUEST);
const registerSuccess = createAction(REGISTER_SUCCESS);
const registerError = createAction(REGISTER_ERROR);

const loginRequest = createAction(LOGIN_REQUEST);
const loginSuccess = createAction(LOGIN_SUCCESS);
const loginError = createAction(LOGIN_ERROR);

const logoutRequest = createAction(LOGOUT_REQUEST);
const logoutSuccess = createAction(LOGOUT_SUCCESS);
const logoutError = createAction(LOGOUT_ERROR);

const getCurrentUserRequest = createAction(GET_CURRENT_USER_REQUEST);
const getCurrentUserSuccess = createAction(GET_CURRENT_USER_SUCCESS);
const getCurrentUserError = createAction(GET_CURRENT_USER_ERROR);

// export default authActions;
export {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
