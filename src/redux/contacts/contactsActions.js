import { createAction } from "@reduxjs/toolkit";
// ==========================
import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_ERROR,
  ADD_CONTACTS_REQUEST,
  ADD_CONTACTS_SUCCESS,
  ADD_CONTACTS_ERROR,
  DELETE_CONTACTS_REQUEST,
  DELETE_CONTACTS_SUCCESS,
  DELETE_CONTACTS_ERROR,
  FILTER_CONTACTS,
  CLEAR_ERROR,
} from "./contactsConstants";

const fetchContactRequest = createAction(FETCH_CONTACTS_REQUEST);
const fetchContactSuccess = createAction(FETCH_CONTACTS_SUCCESS);
const fetchContactError = createAction(FETCH_CONTACTS_ERROR);

const addContactRequest = createAction(ADD_CONTACTS_REQUEST);
const addContactSuccess = createAction(ADD_CONTACTS_SUCCESS);
const addContactError = createAction(ADD_CONTACTS_ERROR);

const deleteContactRequest = createAction(DELETE_CONTACTS_REQUEST);
const deleteContactSuccess = createAction(DELETE_CONTACTS_SUCCESS);
const deleteContactError = createAction(DELETE_CONTACTS_ERROR);

const filterContact = createAction(FILTER_CONTACTS);

const clearError = createAction(CLEAR_ERROR);

export {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContact,
  clearError,
};
