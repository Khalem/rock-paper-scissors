import React from 'react';

import './fist.styles.css';

export const Fist = (props) => (
    <div className='selection'>
        <h1>{props.choice}</h1>
        <p>{props.user == true ? 'You' : 'Opponent'}</p>
    </div>
)