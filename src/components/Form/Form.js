import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Form.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
}


class Form extends Component {
  componentDidMount() {

  }

  render() {
    const alma = this.props.list_art.map(el => (
      <div key={el.id} className="Form">
          <tr>
            <td>{el.id}</td>
            <td>{el.titulo}</td>
            <td>{el.cuerpo}</td>
          </tr>
      </div>
    ));

    var ContactForm = React.createClass({
      propTypes: {
        value: React.PropTypes.object.isRequired
    },

    return (
      <div className="Form">
        <h1>Form:</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
      </div>)
  }
}

export default Form;

