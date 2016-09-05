import React, { Component } from 'react';
import Controls from './controls.js';
import Flashcard from './flashcard.js';
import { Provider } from 'react-redux';
import store from '../index.js';
import ReactDOM from 'react-dom';

const containerStyles = {
  background: 'white',
  minHeight: '80vh',
  width: '80vw',
  margin: '0 auto',
  borderRadius: '4'
}

const innerStyles = {
  padding: '40px'
}

class App extends Component {
    render() {
        return (
            <div style={containerStyles}>
              <div style={innerStyles}>
                <Flashcard />
                <Controls />
              </div>
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('main'));
