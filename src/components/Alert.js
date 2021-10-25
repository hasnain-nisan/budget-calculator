import React from 'react'

export const Alert = ({alert}) => {
    const {show, type, text} = alert
    return (
        <div className={`alert alert-${type}`}>{text}</div>
    )
}

export default Alert;
