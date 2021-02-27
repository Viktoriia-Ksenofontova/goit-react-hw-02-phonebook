import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.formSubmitHandler(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            id={this.nameInputId}
          />
        </label>

        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            placeholder="Enter telephone number"
            name="number"
            value={number}
            onChange={this.handleInputChange}
            id={this.numberInputId}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default ContactForm;
