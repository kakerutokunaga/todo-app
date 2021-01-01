import logo from "./logo.svg";
import "./App.scss";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
