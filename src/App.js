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

  /** Edit state value */
  const [edit, setEdit] = useState(false)

  /** Edit item state value */
  const [editItemId, setEditItemId] = useState(0)


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
  const handleAlert = ({type, text}) => {
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
      if(edit) 
      {
        let tempExpences = expences.map((item) => item.id === editItemId ? {...item, charge, amount} : item )
        setExpences(tempExpences)
        setEdit(false)
        setEditItemId(0)
        handleAlert({type:"success", text:"Item updated"})
      }
      else
      {
        setExpences([...initial_expences, singleExpence])
        handleAlert({type:"success", text:"Item added"})
      }

      setAmount("")
      setCharge("")
    }
    else
      //alert
      handleAlert({type:"danger", text:"Input fields can not be empty!!!"})
  }

  /** handle delete all button  */
  const handleDeleteAll = () => {
    setExpences([]);
    handleAlert({type:"danger", text:"All items deleted!!!"})
    console.log('All deleted')
  }

  /** handle single delete */
  const handleSingleDelete = (id) =>{
    let tempExpences = expences.filter((item) => item.id !== id)
    setExpences(tempExpences)
    handleAlert({type:"danger", text:"Item deleted !!!"})
  }

  /** const edit item */
  const handleSingleEdit = (id) => {
    const item = expences.find((i) => i.id === id)
    const {charge, amount} = item
    setCharge(charge)
    setAmount(amount)
    setEdit(true)
    setEditItemId(id)
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
            edit = {edit}
            editItemId = {editItemId}
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
