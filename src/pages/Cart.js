import React from "react";
import "../css/Cart.css";

const Cart = (props) => {
  const { cartItems, onAdd, onRemove, onDelete } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div className="row container cartContainer">
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-lg-6">
            <img
              className="cartItmImg"
              src={`https://watch-shop-server.onrender.com/images/${item.image}`}
            />
            {item.name}
          </div>
          <div className="col-lg-3 addRemove">
            <button className="btn btn-dark" onClick={() => onRemove(item)}>
              -
            </button>{" "}
            <button className="btn btn-warning" onClick={() => onAdd(item)}>
              +
            </button>
            <button className="btn btn-danger" onClick={() => onDelete(item)}>
              Remove
            </button>
          </div>
          <div className="col-lg-3 text-right itemPrice">
            <span>
              {item.qty} x ${item.price.toFixed(2)}
            </span>
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
          </div>

          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="row">
            <button onClick>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
