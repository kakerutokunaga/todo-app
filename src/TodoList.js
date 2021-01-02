import React, { Component } from "react";
import "./css/todo-list.scss";

const TodoItem = (props) => {
  const items = props.listItem.map((obj, index) => {
    return (
      <li className="item" key={index}>
        <div className="item_text">
          <p className="item_title">{obj.title}</p>
          <p className="item_description">{obj.description}</p>
        </div>
        <div className="item_icon">
          <img
            onClick={() => props.handleDelete(index)}
            src={`${process.env.PUBLIC_URL}/delete.png`}
            alt="Logo"
          />
          <img src={`${process.env.PUBLIC_URL}/edit.png`} alt="Logo" />
        </div>
      </li>
    );
  });
  return <>{items}</>;
};

class TodoList extends Component {
  // ListItem = [
  //   { title: "筋トレ", description: "腹筋2回" },
  //   { title: "豆まき", description: "お正月" },
  //   { title: "ゲームする", description: "ゲームは楽しい" },
  // ];

  render() {
    return (
      <div className="todo-list">
        <ul>
          <TodoItem
            handleDelete={this.props.handleDelete}
            listItem={this.props.listItem}
          />
        </ul>
      </div>
    );
  }
}

export default TodoList;
