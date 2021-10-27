// import { useSelector } from "react-redux";
import OrderList from '../components/orders/OrderList'
import classes from './AllOrders.module.css'
import { connect } from 'react-redux'
import { searchOrder } from '../redux/actions/productActions'
import { saveValue } from '../redux/actions/productActions'



function AllOrders({searchOrder,saveValue}) {
  
  const filterOrders = (e) => {
    saveValue(e.target.value)
    searchOrder(e.target.value)
  }
  return (
    <section>
        <div className={classes.searchSection}>
            <input
             className={classes.searchInput}
             type="text"
             onChange={filterOrders}
              />
        </div>
        <div>
            <OrderList/>
        </div>
    </section>
  );
}

export default connect(null, {searchOrder,saveValue})(AllOrders);
