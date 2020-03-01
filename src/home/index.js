import React, { Component } from 'react';
import './home.scss'

import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import App from "./app";

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="container">
          <DndProvider backend={HTML5Backend}>
            <App />
          </DndProvider>
        </div>
      </div>
    );
  }
}

export default Home
