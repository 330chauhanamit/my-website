import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLE =['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
       children,
       type,
       onClick,
       buttonStyle,
       buttonSize
}) =>{
       const chechButtonStyle = STYLE.includes(buttonStyle)
       ? buttonStyle
       : STYLE[0]

       const checkButtonSize = STYLE.includes(buttonSize)
       ? buttonSize
       : SIZES[0]

       return(
              <Link to='/sign-up' className='btn-mobile'>
                     <button
                            className = {`btn ${chechButtonStyle} ${checkButtonSize}`}
                            onClick = {onClick}
                            type = {type}
                     >
                            {children}
                     </button>
              </Link>
       )
}

