import React from 'react';
import { Products } from '../../product';
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';
import styles from '../Shop/shop.module.css'
import { Cartitem } from './cart-item';
import { useNavigate } from 'react-router-dom';



export default function Cart() {
    const {cart, getTotalAmount} = useContext(ShopContext);
    const totalPrice = getTotalAmount();
    const navigation = useNavigate();

  return (
    <div className={styles.cart}>
      <h1>Your Cart Items</h1>;
      <div>
        {Products.map((product) => {
          if(cart[product.id] !== 0){
            return <Cartitem data={product}/>
          }
        })}
      </div>
{totalPrice > 0 ?
      <div className={styles.checkout}>
        <p>Subtotal: ${totalPrice}</p>
        <button onClick={() => navigation('/')}>Continue Shopping</button>
        <button>CheckOut</button>
      </div>
    : (<h1>Add items to your cart</h1>)}
    </div>
  )
}
