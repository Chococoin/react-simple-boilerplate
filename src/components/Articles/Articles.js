import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Articles.css';


class Articles extends Component {
  componentDidMount() {

  }

  render() {
    const alma = this.props.list_art.map(el => (
      <div key={el.id} className="Articles">
          <tr>
            <td>{el.id}</td>
            <td>{el.titulo}</td>
            <td>{el.cuerpo}</td>
          </tr>
      </div>
    ));



    return (
      <div className="Articles">
        <h1>Articles:</h1>
          <table>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Content</th>
                <th>Del</th>
              </tr>
              <div>{alma}</div>
          </table>
      </div>)
    }
}

export default Articles;

