import React, { useState } from "react";
import BalanceTitle from './components/BalanceTitle'
import Budget from './components/Budget'
import BudgetTitle from './components/BudgetTitle'
import ExpenseManager from './components/ExpenseManager'
import ExpenseTitle from './components/ExpenseTitle'
import Information from './components/Information'
//import { Error, Button } from "./components/Error.style";

export const TabContext = React.createContext()

export const BudgetContext = React.createContext()

export const ExpenseContext = React.createContext()

export const AmountContext = React.createContext()

export const StateContext = React.createContext()

export const PriceContext = React.createContext()

const App = () => {
  const [tab, setTab] = useState([])
  const [expense, setExpense] = useState('')
  const [amount, setAmount] = useState('')
  const [stateExpense, setStateExpense] = useState(true)
  const [budget, setBudget] = useState('')
  const [price, setPrice] = useState('')




  return (
    <div className="container">
      <TabContext.Provider value={[tab, setTab]}>
        <ExpenseContext.Provider value={[expense, setExpense]}>
          <AmountContext.Provider value={[amount, setAmount]}>
            <StateContext.Provider value={[stateExpense, setStateExpense]}>
              <BudgetContext.Provider value={[budget, setBudget]}>
                <PriceContext.Provider value={[price, setPrice]}>
                  <div className="row mt-4">
                    <div className="col-lg-4 col-sm-12">
                      <Budget />

                      <Information />
                    </div>
                    <div className="col-lg-8 col-sm-12">
                      {/*<Error active={msgErrors}>
                      <Button onClick={handleErrorsClick}>
                        <i className="fas fa-times"></i>
                      </Button>
                      Errors try again.....
  </Error>*/}
                      <div className="row">
                        <BudgetTitle />
                        <ExpenseTitle />
                        <BalanceTitle />
                      </div>
                      <div className="row mt-4">
                        <ExpenseManager />
                      </div>
                    </div>
                  </div>
                </PriceContext.Provider>
              </BudgetContext.Provider>
            </StateContext.Provider>
          </AmountContext.Provider>
        </ExpenseContext.Provider>
      </TabContext.Provider >
    </div >
  )
}

export default App
