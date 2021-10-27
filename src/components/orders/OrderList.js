import classes from "./OrderList.module.css";
import OrderItem from "./OrderItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders, searchOrder } from "../../redux/actions/productActions";
import { connect } from "react-redux";

function OrderList({ getOrders, searchOrder }) {
  let orders = useSelector((store) => store.allOrders.orders) || [];
  let value = useSelector((store) => store.allOrders.value);

  useEffect(() => {
    getOrders();
  }, [value]);

  return (
    <ul className={classes.list}>
      {console.log(value, "gfjhgfgh")}

      {value.length > 0 ? 
        orders
          .filter((order) => order.Fullname.indexOf(value, 0) > -1)
          .reverse()
          .map((order, index) => {
            return <OrderItem key={index} order={order} />;
          })
        :
        orders
        .reverse()
        .map((order, index) => {
          return <OrderItem key={index} order={order} />;
        })
        }

    </ul>
  );
}

export default connect(null, { getOrders, searchOrder })(OrderList);
