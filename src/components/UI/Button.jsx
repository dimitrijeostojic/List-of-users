import React from 'react'
import classses from './Button.module.css'

const Button = (props) => {
    return (
        <div>
            <button type={props.type || 'button'} className={classses.button} onClick={props.onClick}>{props.children}</button>
        </div>
    )
}

export default Button