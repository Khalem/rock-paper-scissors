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
  }

  render() {
    return (
      <div>
        <h1>Rock, Paper, Scissors!</h1>
        <ul className='selection-list'>
          <li>👊</li>
          <li>🖐</li>
          <li>✌</li>
        </ul>
        <h2>Choose Carefully</h2>
        <Selection choice='🤜'/>
        <Selection choice='🤛'/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
