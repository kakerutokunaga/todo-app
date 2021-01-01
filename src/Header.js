import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="title">リマインダー</h1>
        <p className="todo-counter">TODO: 3</p>
      </div>
    );
  }
}
