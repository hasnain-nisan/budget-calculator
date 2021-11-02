import React from 'react'

export const Alert = ({alert}) => {
    const {type, text} = alert
    return (
        <div className={`alert alert-${type}`}>{text}</div>
    )
}

export default Alert;
