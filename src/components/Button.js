import React , {Component} from 'react';


const Button = ({onClick,size,value,label,...rest}) => (
      <div
        onClick={onClick}
        className="Button"
        data-size={size}
        data-value={value}
      >
        {label}
      </div>
    )


export default Button;
