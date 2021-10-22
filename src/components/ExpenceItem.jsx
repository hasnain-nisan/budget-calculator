import React from 'react'
import { MdEdit, MdDelete } from "react-icons/md"

export const ExpenceItem = ({expence}) => {
    const {id, charge, amount = 0} = expence
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">$ {amount}</span>
            </div>
            <div>
                <button className="edit-btn" aria-label="Edit Button">
                    <MdEdit />
                </button>
                <button className="clear-btn" aria-label="Delete Button">
                    <MdDelete />
                </button>
            </div>
        </li>
    )
}

export default ExpenceItem;

