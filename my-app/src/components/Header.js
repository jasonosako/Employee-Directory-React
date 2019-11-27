import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>EMPLOYEE DIRECTORY</h1>
        <p>search for an employee</p>
      </div>
    )
  }
}
