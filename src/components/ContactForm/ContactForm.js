import PropTypes from 'prop-types';

import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from 'components/ContactForm/ContactForm.styled';
// import { Formik, Form } from 'formik';

export class ContactForm extends Component {
  state = {
    name: '',
  };
  nameInputId = nanoid();

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onData(this.state);
    this.reset();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onData: PropTypes.func.isRequired,
};
