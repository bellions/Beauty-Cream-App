import React from 'react'
import {ProductsData} from "../../data/products"
import css from "../Products/Products.module.css"
import Plane from "../../assets/plane.png"

function Products() {
    const [menuProducts, setMenuProducts] = React.useState(ProductsData)
    const filter = (type) =>{
        setMenuProducts(ProductsData.filter((product) => product.type === type))
    }
  return (
    <div className={css.container}>
        <img src={Plane} alt="" />
        <h1>Our Featured Products</h1>
        <div className={css.products}>
            <ul className={css.menu}>
                <li  onClick={() => setMenuProducts(ProductsData)}>All</li>
                <li onClick={() => filter("skin care")}>Skin Care</li>
                <li onClick={() => filter("conditioner")}>Conditioners</li>
                <li onClick={() => filter("foundation")}>Foundations</li>
            </ul>

            <div className={css.list}>
                {menuProducts.map((product, i) => (
                    <div className={css.product}>
                       <div className='left-side'>
                         <div className="name">
                            <span>{product.name}</span>
                            <span>{product.detail}</span>
                         </div>
                         <span>${product.price}</span>
                         <div>Show Now</div>
                       </div>
                       <img src={product.img} alt="" className="img-p" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products