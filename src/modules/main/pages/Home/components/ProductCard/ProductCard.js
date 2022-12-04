import React from 'react'
import s from './ProductCard.module.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = (props) => {
  const { id, title, images, price } = props
  const navigate = useNavigate()
  return (
    <div className={s.form}>
      <div className={s.title}>{title}</div>
      <img className={s.img} src={images[0]} onClick={() => navigate(`/product/${id}`)} />
      <div className={s.price}>Цена: {price}$</div>
      <button className={s.button} onClick={() => navigate('/')}>
        Добавить в корзину
      </button>
    </div>
  )
}

export default ProductCard
