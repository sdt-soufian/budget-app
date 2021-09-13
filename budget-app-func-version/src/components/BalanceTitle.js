import React, { useContext } from 'react'
import { PriceContext, TabContext } from '../App'


const BalanceTitle = () => {
    const [tab, setTab] = useContext(TabContext)
    const [price, setPrice] = useContext(PriceContext)

    const sum = (tab, price) => {
        if (price === '') {
            price = 0
        } else {
            tab.forEach(elem => {
                price -= elem.amount
            })
        }

        return price
    }

    return (
        <div className="col">
            <div className="text-center">
                <h3>BALANCE</h3>
                <i style={{ color: '#7289da' }} className="fas fa-pound-sign fa-3x"></i>
                <h3>{sum(tab, price)}</h3>
            </div>
        </div>
    )
}

export default BalanceTitle
