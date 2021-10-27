import classes from "./OrderItem.module.css";
import Card from "../ui/Card";
import { deleteOrder } from "../../redux/actions/productActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faRibbon, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react'


function OrderItem({ order, deleteOrder }) {
  const history = useHistory();
  const [greenBackground, setGreenBackground] = useState(false)
  const [redBackground, setRedBackground] = useState(false)


  function updateOrder(id) {
    history.replace(`/update-page/${id}`);
  }
  function changeToGreen() {
    setGreenBackground(true)
  }
  function changeToRed(){
    setRedBackground(true)
  }

  return (
    <Card toGreen = {greenBackground} toRed={redBackground}>
      <div className={classes.deleteUpdateBtn}>
        <button
          className={classes.updateBtn}
          onClick={() => updateOrder(order._id)}
        >
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button
          className={classes.deleteBtn}
          onClick={() => deleteOrder({ id: order._id })}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <li className={classes.item}>
        <div className={classes.content}>
          <b>שם מלא : </b>
          {order.Fullname}
        </div>
        <div className={classes.content}>
          <b>מספר טלפון : </b>
          {order.phoneNumber}
        </div>
        <div className={classes.content}>
          <b>שם השולח : </b>
          {order.SenderName}
        </div>
        <div className={classes.content}>
          <b>מספר טלפון של השולח : </b>
          {order.SenderPhoneNumber}
        </div>
        <div className={classes.content}>
          <b>כתובת : </b>
          {order.address}
        </div>
        <div className={classes.content}>
          <b>מחיר כולל משלוח : </b>
          {order.price}
        </div>
        <div className={classes.content}>
          <b>צבעים בזר : </b>
          {order.colors}
        </div>
        <div className={classes.content}>
          <b>ברכה : </b>
          {order.greeting}
        </div>
      </li>
      <div className={classes.footerOfCardArea}>
        <button className={classes.sandedBtn} onClick={changeToRed}>נשלח</button>
        <button className={classes.paidBtn} onClick={changeToGreen}>שולם</button>
         
      </div>
    </Card>
  );
}

export default connect(null, { deleteOrder })(OrderItem);
