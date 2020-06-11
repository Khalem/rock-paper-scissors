import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';


/*
This works by essentially using an index to look up your choice and see if your opponent's choice is the result, if it is, it means you won.
I then do the same using the AI's choice, if your choice is the result, you lose.
Otherwise, it's a draw!
*/
const winOrLose = (user, ai) => {
 const winners = {
   'rock': 'scissors',
   'paper': 'rock',
   'scissors': 'paper'
 }

 if (winners[user] == ai) {
   return ("Victory!");
 } else if (winners[ai] == user) {
   return ("Defeat!");
 } else {
   return ("Stalemate!");
 }
}


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
      },
      result: ''
    }

    this.chooseSelection = this.chooseSelection.bind(this);
  }


  chooseSelection(e) {
    this.setState({
      choice: '🤜',
      aiChoice: '🤛',
      result: 'Good luck!'
    });
    // Need to change e.target to variable as I will be using it out of scope for an event listener
    let element = e.target;
    element.classList.add('active');
    const options = ['rock', 'paper', 'scissors'];
    let userChoice = element.id;
    let aiChoice = options[Math.floor(Math.random() * (3))];
    let fists = document.getElementsByClassName('selection');
    for (let i = 0; i < fists.length; i++) {
      fists[i].style.animation = 'bump .75s 3';
    }

    // Wait until animation is finished to change state
    fists[0].addEventListener('animationend', () => {
      this.setState({
        choice: this.state.reference[userChoice],
        aiChoice: this.state.reference[aiChoice],
        result: winOrLose(userChoice, aiChoice)
      });

      // Reset animation
      fists[0].style.animation = '';
      fists[1].style.animation = '';

      element.classList.remove('active');
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
        <h2>{this.state.result != '' ? this.state.result : 'Choose Carefully..'}</h2>
        <Selection choice={this.state.choice}/>
        <Selection choice={this.state.aiChoice}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
