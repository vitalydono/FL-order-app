import React from 'react'
import AllOrders from './AllOrders'
import NewOrderForm from '../components/orders/NewOrderForm'
import UpdatePage from './UpdatePage'
import classes from './Home.module.css'

function Home() {
    return (
        <div className={classes.mainPage}>
            <AllOrders/>
            <NewOrderForm/>
            <UpdatePage/>
        </div>
    )
}

export default Home
