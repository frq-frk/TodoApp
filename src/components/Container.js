import React from "react";

import "./styles.css";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [{ todo: "Eat" }, { todo: "Sleep" }],
      inputText: ""
    };
  }

  deleteTodo(ipIndex) {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter((item, index) => index !== ipIndex)
    }));
  }

  render() {
    return (
      <div className="Container">
        <form>
          <input
            type="text"
            onChange={(e) =>
              this.setState({
                inputText: e.target.value
              })
            }
            value={this.state.inputText}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              this.setState((prevState) => ({
                todoList: [
                  ...prevState.todoList,
                  { todo: prevState.inputText }
                ],
                inputText: ""
              }));
            }}
          >
            add
          </button>
          {console.log(this.state.todoList)}
        </form>
        <div className="ListContainer">
          {this.state.todoList.map((item, index) => (
            <div className="List" key={index}>
              <p>{item.todo}</p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.deleteTodo(index);
                }}
              >
                &#10799;
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Container;
