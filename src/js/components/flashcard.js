import React, { Component, PropTypes } from 'react';
import { flashcardContent } from '../flashcardContent.js';
import store from '../index.js';
import { connect } from 'react-redux';

const flashCardStyle = {
  fontSize: '24px'
}

const questionStyle =  {
  minHeight: '20vh'
}

const answerStyle =  {
  minHeight: '30vh'
}

export class Flashcard extends Component {
    constructor(props) {
        super(props);
        if (!store.getState().changeState.nextCard) {
            this.randomNumber = Math.floor((Math.random() * flashcardContent.length));
        }
    }

    render() {
        if (store.getState().changeState.nextCard) {
            this.randomNumber = Math.floor((Math.random() * flashcardContent.length));
        }
        this.props.answerHidden.answerHidden = store.getState().changeState.answerHidden;

        return (
            <section id="flashcard" style={flashCardStyle}>
                <article>
                    <div style={questionStyle}>
                        <div>{flashcardContent[this.randomNumber].question}</div>
                    </div>
                    <div style={answerStyle}>
                        <div style={{display: this.props.answerHidden.answerHidden ? 'none' : 'block'}}>
                            {flashcardContent[this.randomNumber].answer}
                        </div>
                    </div>
                </article>
            </section>
        )
    }
}


function mapStateToProps(state) {
    return { answerHidden: state.changeState }
}

export default connect(mapStateToProps)(Flashcard)
