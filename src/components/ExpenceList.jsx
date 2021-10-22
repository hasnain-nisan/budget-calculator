import React from 'react'
import Item from './ExpenceItem'
import { MdDelete } from "react-icons/md"

export const ExpenceList = ({expences}) => {
    return (
        <>
            <ul className="list">
                {
                    expences.map((expence) => {
                        return <Item key={expence.id} expence={expence}/>
                    })
                }
            </ul>

            {
                expences.length > 0 && <button className="btn">
                        Clear expences
                        <MdDelete className="btn-icon"/>
                    </button>
            }
        </>
    )
}

export default ExpenceList;
