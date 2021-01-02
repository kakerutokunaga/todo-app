import React, { Component } from "react";
import "./css/header.scss";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="title">リマインダー</h1>
        <p className="todo-counter">TODO: {this.props.counts}</p>
      </div>
    );
  }
}
