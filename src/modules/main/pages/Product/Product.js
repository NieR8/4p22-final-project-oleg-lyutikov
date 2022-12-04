import s from './Product.module.css'
import { MainLayout } from '../../../../shared'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../config/api'

function Product() {
  const [Loading, setLoading] = useState(false)
  const [product, setProduct] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    api.fetchSingleProduct(params.productId).then((data) => {
      setProduct(data)
      setLoading(false)
    })
  }, [params])
  return (
    <MainLayout>
      <div>
        {Loading ? (
          <h1>Loading</h1>
        ) : product ? (
          <div className={s.form}>
            <div className={s.image}>
              <img
                src={product.images[1] ? product.images[1] : product.images[0]}
                className={s.img}
              />
            </div>
            <div className={s.text_form}>
              <h2 className={s.title}>{product.title}</h2>
              <div className={s.desc}>
                Описание товара: <br /> <span className={s.span}>{product.description}</span>
              </div>
              <div className={s.rating}>
                Рейтинг: <span className={s.span}>{product.rating}</span>
              </div>
              <div className={s.price}>
                Цена: <span className={s.span}>{product.price}$</span>
              </div>
              <div className={s.stock}>
                Количество: <span className={s.span}>{product.stock} в наличии</span>
              </div>
            </div>
            <div className={s.buttons}>
              <button className={s.button}>Добавить в корзину</button>
            </div>
          </div>
        ) : (
          <h1>Нет такого товара</h1>
        )}
      </div>
    </MainLayout>
  )
}

export default Product
