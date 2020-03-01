import React, { Component } from 'react';
import Board from "./board";
import "./home.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      section1: [
        {
          id: "item-1",
          content: "Happy"
        },
        {
          id: "item-2",
          content: "Sleepy"
        },
        {
          id: "item-3",
          content: "Doc"
        }
      ],
      section2: [
        {
          id: "item-4",
          content: "Sneezy"
        },
        {
          id: "item-5",
          content: "Grumpy"
        }
      ],
      section3: [
        {
          id: "item-6",
          content: "Dopey"
        },
        {
          id: "item-7",
          content: "Bashful"
        }
      ]
    }
  }

  onChangeDnd = (item, dropResult) => {
    if (item.placeName !== dropResult.name) {
      let arrFrom = this.state[item.placeName].filter((obj) => obj.id !== item.id)
      let arrTo = this.state[dropResult.name]
      arrTo.push({ id: item.id, content: item.name })
      this.setState({
        ...this.state,
        [item.placeName]: arrFrom,
        [dropResult.name]: arrTo
      })
    }
  };
  handleSubmit(e) {
    e.preventDefault();
    let { section1, name } = this.state;
    if (name.trim().length > 0) {
      section1.push({
        id: Math.random().toString().substring(2),
        content: name
      });
      this.setState({
        section1,
        name: ''
      })
    } else {
      return false
    }
  }
  render() {
    return (
      <div className="appContainer">
        <div className="inputBox">
          <span>Add new dwarf</span>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input className="inputName" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} type="text" name="name" required />
            <input className="inputButton" type="submit" value="Add" />
          </form>
        </div>
        <div className="boardBox" style={{ overflow: 'hidden', clear: 'both' }}>
          <Board onChangeDnd={this.onChangeDnd} name={'section1'} items={this.state.section1} />
          <Board onChangeDnd={this.onChangeDnd} name={'section2'} items={this.state.section2} />
          <Board onChangeDnd={this.onChangeDnd} name={'section3'} items={this.state.section3} />
        </div>
      </div>
    );
  }
}

export default App;