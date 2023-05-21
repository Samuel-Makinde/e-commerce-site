import React, { createContext, useState } from 'react';
import { Products } from '../product';

export const ShopContext = createContext(null);

// to get the objects in the product.jsx file 
const knowDefaultCart = () => {
  let cart = {};
  for(let i = 1; i < Products.length + 1; i++){
    cart[i]=0;
  }
  return cart;
}

export const ShopContextProvider = (props) => {
  const [cart, setCartItem] = useState(knowDefaultCart())

  const getTotalAmount = () => {
    let totalAmount = 0;
    for( const item in cart){
      if(cart[item] > 0){
        let itemInfo = Products.find((product) => product.id === Number(item));
        totalAmount += cart[item] * itemInfo.price; 
      }
    }
    return totalAmount
  }

  const pickToCart = (itemId) => {
    setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
  }

  const updateShopContext = (newValue, itemId) => {
    setCartItem((prev) => ({...prev, [itemId]: newValue}))
  }
const contextValue = {cart, pickToCart, removeFromCart, updateShopContext, getTotalAmount }
console.log(cart)
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

