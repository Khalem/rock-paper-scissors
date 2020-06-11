import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';


const Selection = (props) => {
  return (
    <h1 className="selection">{props.choice}</h1>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choice: '🤜',
      aiChoice: '🤛',
      reference: {
        'rock': '👊',
        'paper': '🖐',
        'scissors': '✌'
      }
    }

    this.chooseSelection = this.chooseSelection.bind(this);
  }


  chooseSelection(e) {
    const options = ['rock', 'paper', 'scissors'];
    let userChoice = e.target.id;
    let aiChoice = options[Math.floor(Math.random() * (3))];
    let fists = document.getElementsByClassName('selection');
    for (let i = 0; i < fists.length; i++) {
      fists[i].style.animation = 'bump .75s 3';
    }

    // Wait until animation is finished to change state
    fists[0].addEventListener('animationend', () => {
      this.setState({
        choice: this.state.reference[userChoice],
        aiChoice: this.state.reference[aiChoice]
      });

      // Reset animation
      fists[0].style.animation = '';
      fists[1].style.animation = '';
    });
  }


  render() {
    return (
      <div>
        <h1>Rock, Paper, Scissors!</h1>
        <ul className='selection-list'>
          <li onClick={this.chooseSelection} id='rock'>👊</li>
          <li onClick={this.chooseSelection} id='paper'>🖐</li>
          <li onClick={this.chooseSelection} id='scissors'>✌</li>
        </ul>
        <h2>Choose Carefully</h2>
        <Selection choice={this.state.choice}/>
        <Selection choice={this.state.aiChoice}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
