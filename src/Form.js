import React, { Component } from "react";
import "./css/form.scss";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }

  initialState = {
    title: "",
    description: "",
  };

  handleChange = (e) => {
    let title = this.state.title;
    let description = this.state.description;

    if (e.target.name === "title") {
      title = e.target.value;
    } else if (e.target.name === "description") {
      description = e.target.value;
    }

    this.setState({ title: title });
    this.setState({ description: description });
  };

  submitForm = () => {
    let input_value = document.querySelector("input").value;
    let textarea_value = document.querySelector("textarea").value;

    if (!input_value) {
      return;
    } else {
      this.props.submit(this.state);
      this.setState(this.initialState);
    }

    // Formのクリア
    document.querySelector("input").value = "";
    document.querySelector("textarea").value = "";
  };

  render() {
    return (
      <div className="form">
        <form>
          <div className="form-left">
            <input
              name="title"
              className="input"
              placeholder="TODOを追加"
              onChange={this.handleChange.bind(this)}
            ></input>
            <textarea
              name="description"
              className="description"
              placeholder="説明を追加"
              onChange={this.handleChange.bind(this)}
            ></textarea>
          </div>
          <button
            type="button"
            className="submit"
            onClick={this.submitForm}
          ></button>
        </form>
      </div>
    );
  }
}
