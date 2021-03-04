import React, { Component } from 'react';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      list: [],
      //done: false
    }
  }

  onInputChange = (input) => {
    this.setState({
      userInput: input
    })
  }

  additem = (input) => {
    let listArray = this.state.list;
    listArray.push(input);
    this.setState({
      list: listArray,
      userInput: '',

    })
  }

  deleteItem = (id) => {
    this.state.list.splice(id, 1)
    this.setState({
      list: this.state.list
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <input
              type="text"
              placeholder="Enter Text"
              value={this.state.userInput}
              onChange={(e) => this.onInputChange(e.target.value)}
            />
            <button
              type="button"
              onClick={() => this.additem(this.state.userInput)}
            >Add Item</button>
          </form>
        </header>
        <ul>
          {
            this.state.list.map((value, index) =>
              <li
                key={index}>
                <input type="checkbox" />
                <span>
                  {value}
                  <button
                    onClick={() => this.deleteItem(index)}>
                    Delete
                  </button> 
                </span>
              </li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;