import React from 'react'
import styles from './shop.module.css'
import { Products } from '../../product'
import { Product } from './product'

export default function Shop() {
  return (
    <div className={styles.shop}>
        <div>
            <h1>Men's Products</h1>
            </div>
            <div className={styles.products}>
                {Products.map((product) => {
                  return  <Product data={product}/>
                })}
            </div>
    </div>
  )
}
