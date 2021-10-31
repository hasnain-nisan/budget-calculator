import React from 'react'
import Item from './ExpenceItem'
import { MdDelete } from "react-icons/md"

export const ExpenceList = ({expences, handleDeleteAll, handleSingleDelete, handleSingleEdit}) => {
    return (
        <>
            <ul className="list">
                {
                    expences.map((expence) => {
                        return <Item key={expence.id} 
                                    expence={expence}
                                    handleSingleDelete={handleSingleDelete}
                                    handleSingleEdit={handleSingleEdit}
                                />
                    })
                }
            </ul>

            {
                expences.length > 0 && <button className="btn" onClick={handleDeleteAll}>
                        Clear expences
                        <MdDelete className="btn-icon"/>
                    </button>
            }
        </>
    )
}

export default ExpenceList;
