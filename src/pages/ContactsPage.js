import React, { Component } from "react";
import { connect } from "react-redux";
import { contactsOperations } from "../redux/contacts";

import ContactsForm from "../Components/ContactsForm";
import Filter from "../Components/Filter";
import ContactList from "../Components/ContactList";

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div>
        <h2>Contacts</h2>

        <ContactsForm />
        <Filter />

        <ContactList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(ContactsPage);
