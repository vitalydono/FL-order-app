import classes from "./Card.module.css";


function Card(props) {
  return props.toGreen && !props.toRed  ? (
    <div className={classes.card} style={{ background: "#80ff80" }}>
      {props.children}
    </div>
  ) : props.toGreen && props.toRed ? (
    <div className={classes.card} style={{ background: "#ff3333" }}>
      {props.children}
    </div>
  ) : (
    <div className={classes.card}>{props.children}</div>
  );




  
}

export default Card;
