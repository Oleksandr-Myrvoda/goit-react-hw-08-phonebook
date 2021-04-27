import React from "react";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import { contactsSelectors, filterContact } from "../../redux";

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    <p className={styles.title}>Filter</p>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  </label>
);

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(filterContact(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
