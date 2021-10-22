import React from 'react'
import { MdSend } from 'react-icons/md'

export const ExpenceForm = ({Charge, Amount, handleSubmit}) => {

    const [charge, handleCharge] = Charge
    const [amount, handleAmount] = Amount

    return (
        <form>
            <div className="form-center">
                <div className="form-group">
                    <label for="charge">Charge</label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="charge"
                        name="charge"
                        placeholder="eg: Rent"
                        value={charge}
                        onChange={handleCharge}
                    />
                </div>
                <div className="form-group">
                    <label for="amonut">Amonut</label>
                    <input 
                        type="text" 
                        pattern="[0-9]*"
                        className="form-control"
                        id="amonut"
                        name="amonut"
                        placeholder="eg: 1200"
                        value={amount}
                        onChange={handleAmount}
                    />
                </div>
            </div>
            <button type="submit" className="btn" onClick={handleSubmit}>
                Submit
                <MdSend className="btn-icon"/>
            </button>
        </form>
    )
}

export default ExpenceForm;
