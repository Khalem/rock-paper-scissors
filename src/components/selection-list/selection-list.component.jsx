import React from 'react';

import './selection-list.styles.css';

export const SelectionList = (props) => (
    <div className='selection-list'>
        {props.options.map(option =>(
           <h1 key={option} id={option} onClick={props.onClickHandle}> {props.reference[option]} </h1> 
        ))}
    </div>
)