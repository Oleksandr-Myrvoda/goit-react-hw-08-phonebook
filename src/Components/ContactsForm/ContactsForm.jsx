import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import { connect } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  componentDidMount() {
    this.props.fetchContact();
  }

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = ({ name, number, id }) => {
    const newContact = {
      name,
      number,
      id,
    };
    if (
      this.props.contacts
        .map((contact) => contact.name.toLowerCase())
        .includes(newContact.name.toLowerCase())
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.props.addContact(newContact);
    }
  };

  deleteContact = (id) => {
    this.props.deleteContact(id);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.addContact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.formLabel}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label className={styles.formLabel}>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { contacts: contactsSelectors.getAllContacts(state) };
};

const mapDispatchToProps = {
  fetchContact: contactsOperations.fetchContact,
  addContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
