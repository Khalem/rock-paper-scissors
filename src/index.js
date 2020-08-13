import React from 'react';
import ReactDOM from 'react-dom';
import { Fist } from './components/fist/fist.component';
import { SelectionList } from './components/selection-list/selection-list.component';

import './main.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choice: '🤜',
      aiChoice: '🤛',
      options: ['rock', 'paper', 'scissors'],
      reference: {
        'rock': '👊',
        'paper': '🖐',
        'scissors': '✌'
      },
      result: ''
    }
  }


    /*
  This works by essentially using an index to look up your choice and see if your opponent's choice is the result, if it is, it means you won.
  I then do the same using the AI's choice, if your choice is the result, you lose.
  Otherwise, it's a draw!
  */
  winOrLose = (user, ai) => {
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


  chooseSelection = (e) => {
    this.setState({
      choice: '🤜',
      aiChoice: '🤛',
      result: 'Good luck!'
    });
    let element = e.target;
    element.classList.add('active');
    let userChoice = element.id;
    let aiChoice = this.state.options[Math.floor(Math.random() * (3))];
    let fists = document.getElementsByClassName('selection');
    for (let i = 0; i < fists.length; i++) {
      fists[i].style.animation = 'bump .75s 3';
    }

    // Wait until animation is finished to change state
    fists[0].addEventListener('animationend', () => {
      this.setState({
        choice: this.state.reference[userChoice],
        aiChoice: this.state.reference[aiChoice],
        result: this.winOrLose(userChoice, aiChoice)
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
        <SelectionList options={this.state.options} reference={this.state.reference} onClickHandle={this.chooseSelection} />
        <h2>{this.state.result != '' ? this.state.result : 'Choose Carefully..'}</h2>
        <Fist choice={this.state.choice} user={true} />
        <Fist choice={this.state.aiChoice} user={false} />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
