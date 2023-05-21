import React, { useContext } from 'react'
import styles from './shop.module.css'
import { ShopContext } from '../../context/shop-context';


export const Product = (props) => {
    const {id, productName,price, productImage} = props.data;
    const {pickToCart, cart} = useContext(ShopContext);
    const cartItemAmount = cart[id];
  return (
    <div className={styles.product}>
        <img src={productImage} alt='product' />
        <div>
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>
        <button className={styles.addbutton} onClick={() => pickToCart(id)} >Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
  );
}
