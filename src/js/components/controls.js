import React, { Component } from 'react';
import store from '../index.js';
import { showAnswer, goToNext } from '../actions';

const answerButtonStyle = {
  borderRadius: '4',
  color: 'white',
  fontSize: '20px',
  background: '#E91E63',
  padding: '10px 20px 10px 20px',
  textDecoration: 'none',
  border: 'none',
  marginRight: '20px'
}

const nextButtonStyle = {
  borderRadius: '4',
  color: 'white',
  fontSize: '20px',
  background: '#AD1457',
  padding: '10px 20px 10px 20px',
  textDecoration: 'none',
  border: 'none'
}

export default class Controls extends Component {
    render() {
        return (
            <section id="controls">
                <button style={answerButtonStyle} onClick={e => this.showAnswer()}>show answer</button>
                <button style={nextButtonStyle} onClick={e => this.goToNext()}>&gt;</button>
            </section>
        )
    }

    showAnswer() {
        store.dispatch(showAnswer());
    }

    goToNext() {
        store.dispatch(goToNext());
    }
}
