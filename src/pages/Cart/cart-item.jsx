import React, {useContext} from 'react'
import styles from '../Shop/shop.module.css'
import { ShopContext } from '../../context/shop-context';





export const Cartitem = (props) => {
    const {id, productName,price, productImage} = props.data;
    const {cart, pickToCart, removeFromCart, updateShopContext} = useContext(ShopContext);


  return (
    <div className={styles.cart}>
        <div className={styles.cartitem}>
            <img src={productImage} alt="product" />
        <div className={styles.description}>
          <p> <b>{productName}</b> </p>
          <p>${price}</p>  
          <div className={styles.counter}>
            <button onClick={() => removeFromCart(id)}>-</button>
            <input value={cart[id]} onChange={(e) => updateShopContext(Number(e.target.value), id)}/>
            <button onClick={() => pickToCart(id)}>+</button>
          </div>
        </div>
        </div>
        
    </div>
  )
}
