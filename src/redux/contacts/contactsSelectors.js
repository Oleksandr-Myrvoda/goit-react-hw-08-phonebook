import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getAllContacts = (state) => state.contacts.items;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
    );
  }
);

export default {
  getLoading,
  getFilter,
  getAllContacts,
  getVisibleContacts,
};
