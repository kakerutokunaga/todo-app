import logo from "./logo.svg";
import React, { Component } from "react";
import "./css/App.scss";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      counts: 0,
      listItem: [],
    };
  }

  handleSubmit(obj) {
    // const listItem = this.state.listItem.slice();
    const counts = this.state.counts;
    this.setState({ listItem: this.state.listItem.concat(obj) });
    // countの追加
    this.setState({ counts: counts + 1 });
  }

  handleDelete(i) {
    // const listItem = this.state.listItem.slice();
    const counts = this.state.counts;

    this.setState({
      listItem: this.state.listItem.filter((value, index) => index !== i),
    });
    this.setState({ counts: counts - 1 });
  }

  render() {
    return (
      <div className="App">
        <Header counts={this.state.counts} />
        <Form submit={this.handleSubmit.bind(this)} />
        <TodoList
          handleDelete={this.handleDelete.bind(this)}
          listItem={this.state.listItem}
        />
      </div>
    );
  }
}

export default App;
