import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import Form from './components/ExpenceForm';
import List from './components/ExpenceList';
import { v4 as uuidv4 } from 'uuid';

const initial_expences = [
  {id: uuidv4(), charge: "Rent", amount: 1200},
  {id: uuidv4(), charge: "Education", amount: 1000},
  {id: uuidv4(), charge: "Food", amount: 1500},
  {id: uuidv4(), charge: "Journey", amount: 800},
  {id: uuidv4(), charge: "Cloth", amount: 1000}
]

console.log(initial_expences)

function App() {

  /** State values
   * all expences, addExpence
   */
  const [expences, setExpences] = useState(initial_expences);

  /** Alert state */
  const [alert, setAlert] = useState({show:false})

  /** Charge state value */
  const [charge, setCharge] = useState("")

  /** Amount state value */
  const [amount, setAmount] = useState("")


  /** Functionality */

  /** handleCharge state value */
  const handleCharge = (e) => {
    setCharge(e.target.value)
  }

  /** handleAmount state value */
  const handleAmount = (e) => {
    (e.target.validity.valid) && setAmount(e.target.value)
  }

  /** handle alert */
  const handleAlert = (type, text) => {
    setAlert({show: true, type, text})
    setTimeout(() => {
      setAlert({show: false})
    }, 3000)
  }

  /**handle form submit */
  const handleSubmit = (e) => {
    e.preventDefault()

    const singleExpence = {id: uuidv4(), charge: charge, amount: amount}
    
    if(charge !== "" && amount>0)
    {
      setExpences([...initial_expences, singleExpence])
      handleAlert({type:"success", text:"Item added"})
      setAmount("")
      setCharge("")
    }
    else
      //alert
      handleAlert({type:"danger", text:"Input fields can not be empty!!!"})
  }

  /** handle delete all button  */
  const handleDeleteAll = () => {
    console.log('All deleted')
  }

  /** handle single delete */
  const handleSingleDelete = (id) =>{
    console.log(`Deleted id : ${id}`)
  }

  /** const edit item */
  const handleSingleEdit = (id) => {
    console.log(`Edited id : ${id}`)
  } 


  return (
      <>
        {
          alert.show && <Alert alert={alert} />
        }

        <h1>Budget Calculator</h1>
        <main className="App">
          <Form 
            Charge={[charge, handleCharge]} 
            Amount={[amount, handleAmount]} 
            handleSubmit={handleSubmit} 
          />
          <List 
            expences={expences} 
            handleDeleteAll={handleDeleteAll}
            handleSingleDelete={handleSingleDelete}
            handleSingleEdit={handleSingleEdit}
          />
        </main>

        <h1>
          Total spend: <span className="total"> $
            {
              expences.reduce((acc, curr) => {
                return acc += parseInt(curr.amount);
              }, 0)
            }
          </span>
        </h1>
      </>

  );
}

export default App;
