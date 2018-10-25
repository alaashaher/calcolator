import React, {Component} from 'react';


const Display = ({data,...rest}) => (
    <div className="Display"> {data.join('')} </div>
)

export default Display;
