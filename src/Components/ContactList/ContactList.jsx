import React from "react";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux";

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {console.log(contacts)}
    {contacts.map(({ name, number, id }) => (
      <li key={id} className={styles.item}>
        <p>
          {name}: {number}
        </p>
        <button
          type="button"
          className={styles.button}
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state) => {
  console.log(contactsSelectors.getFilter(state));
  return {
    contacts: contactsSelectors.getVisibleContacts(state),
  };
};
const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
