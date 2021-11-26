import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" />
      </div>

      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>

      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>

      <div className={classes.control}>
        <label htmlFor="postcode">Post Code</label>
        <input type="text" id="postcode" />
      </div>
      <button type="submit">Confirm</button>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default Checkout;
