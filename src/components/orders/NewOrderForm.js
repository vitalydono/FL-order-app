import classes from "./NewOrderForm.module.css";
import Card from "../ui/Card";
import { useRef, useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { createOrder } from "../../redux/actions/productActions";
import { connect } from 'react-redux'


function NewOrderForm({ createOrder }) {
  // const orders = useSelector((store) => store.allOrders.orders);


  const history = useHistory();



  //for post order
  const fullnameInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const SenderNameInputRef = useRef();
  const SenderPhoneNumberInputRef = useRef();
  const addressInputRef = useRef();
  const priceInputRef = useRef();
  const colorsInputRef = useRef();
  const greetingInputRef = useRef();

  //for update order
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [senderName, setSenderName] = useState("");
  const [senderPhoneNumber, setSenderPhoneNumber] = useState(null);
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(null);
  const [colors, setColors] = useState("");
  const [greeting, setGreeting] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  //posting

  function AddOrder() {
    const enteredFullName = fullnameInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    const enteredSenderName = SenderNameInputRef.current.value;
    const enteredSenderPhoneNumber = SenderPhoneNumberInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredcColors = colorsInputRef.current.value;
    const enteredgGreeting = greetingInputRef.current.value;

    const orderData = {
      Fullname: enteredFullName,
      phoneNumber: enteredPhoneNumber,
      SenderName: enteredSenderName,
      SenderPhoneNumber: enteredSenderPhoneNumber,
      address: enteredAddress,
      price: enteredPrice,
      colors: enteredcColors,
      greeting: enteredgGreeting,
    };
    history.replace('/allOrders');

    createOrder(orderData)
  }



  useEffect(() => {
    getOneOrder();
  }, []);

  async function getOneOrder() {
    const url = history.location.pathname;
    const id = url.split("/").splice(2, 1).join();
    if (id) {
      setIsEdit(true);
      const response = await axios
        .get(`http://localhost:4000/orders/${id}`)
        .catch((err) => {
          console.log("err", err);
        });
      const order = response.data;
      setFullName(order.Fullname);
      setPhoneNumber(order.phoneNumber);
      setSenderName(order.SenderName);
      setSenderPhoneNumber(order.SenderPhoneNumber);
      setAddress(order.address);
      setPrice(order.price);
      setColors(order.colors);
      setGreeting(order.greeting);
    }
  }

//updating
  async function updateOrder(e) {
    e.preventDefault()
    const url = history.location.pathname;
    const id = url.split("/").splice(2, 1).join();

    const enteredFullName = fullnameInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    const enteredSenderName = SenderNameInputRef.current.value;
    const enteredSenderPhoneNumber = SenderPhoneNumberInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredcColors = colorsInputRef.current.value;
    const enteredgGreeting = greetingInputRef.current.value;

    if (id) {
      const response = await axios
        .put(`http://localhost:4000/orders/${id}`, {
          Fullname: enteredFullName,
          phoneNumber: enteredPhoneNumber,
          SenderName: enteredSenderName,
          SenderPhoneNumber: enteredSenderPhoneNumber,
          address: enteredAddress,
          price: enteredPrice,
          colors: enteredcColors,
          greeting: enteredgGreeting,
        })
        .catch((err) => {
          console.log(err);
        })
    }
    history.replace('/allOrders');
  }




  return (
    <Card>
      <form className={classes.form} >
        <div className={classes.control}>
          <label htmlFor="fullName">full name</label>
          <input
            defaultValue={fullName}
            type="text"
            id="fullName"
            ref={fullnameInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="phoneNumber">phone number</label>
          <input
            defaultValue={phoneNumber}
            type="text"
            id="phoneNumber"
            ref={phoneNumberInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="SenderName">sender name</label>
          <input
            defaultValue={senderName}
            type="text"
            id="SenderName"
            ref={SenderNameInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="SenderPhoneNumber">sender phone number</label>
          <input
            type="text"
            id="SenderPhoneNumber"
            ref={SenderPhoneNumberInputRef}
            defaultValue={senderPhoneNumber}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">address</label>
          <input
            defaultValue={address}
            type="text"
            id="address"
            ref={addressInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">price</label>
          <input
            defaultValue={price}
            type="text"
            id="price"
            ref={priceInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="colors">colors</label>
          <input
            defaultValue={colors}
            type="text"
            id="colors"
            ref={colorsInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="greeting">greeting</label>
          <textarea
            defaultValue={greeting}
            id="greeting"
            rows="5"
            ref={greetingInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          {isEdit ? (
            <button onClick={updateOrder}>Update Order</button>
          ) : (
            <button onClick={AddOrder}>Add Order</button>
          )}
        </div>
      </form>
    </Card>
  );
}

export default connect(null, { createOrder })(NewOrderForm);
