import React, { useEffect, useRef, useState } from 'react'
import { MainLayout } from 'shared'
import s from './Home.module.css'
import { ProductCard } from './components'
import api from '../../config/api'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const Home = () => {
  // Все продукты и флаг
  const [productsList, setProductsList] = useState([])
  const [Loading, setLoading] = useState(false)

  //Инпут поиска
  const [search, setSearch] = useState('')
  const [foundProducts, setFoundProducts] = useState([])

  //Селект категорий
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])

  // Конечное количество продуктов, которое зависит от поиска и от категории
  const [totalProduct, setTotalProduct] = useState([])

  const searchButtonRef = useRef(null)

  // Кнопка поиска
  const doSearch = () => {
    const filtredProducts = productsList.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase().trim())
    )
    setFoundProducts(filtredProducts)
  }

  // Селект категорий
  useEffect(() => {
    if (selectedCategory) {
      const selectedProducts = productsList.filter(
        (product) => product.category === selectedCategory
      )
      setFilteredProducts(selectedProducts)
    } else if (selectedCategory === '' || !selectedCategory) {
      setFilteredProducts(productsList)
    }
  }, [selectedCategory, productsList])

  // Конечный список продуктов, с учетом всех фильтраций
  useEffect(() => {
    if (filteredProducts.length !== productsList.length) {
      const totalProducts = foundProducts.filter(
        (product) => filteredProducts.indexOf(product) !== -1
      )
      console.log(totalProducts)
      setTotalProduct(totalProducts)
    } else {
      setTotalProduct(foundProducts)
    }
  }, [filteredProducts, foundProducts, productsList])

  //Загрузка всех товаров
  useEffect(() => {
    setLoading(true)
    api.fetchData().then((data) => {
      setProductsList(data.products)
      setFoundProducts(data.products)
      setFilteredProducts(data.products)
      setTotalProduct(data.products)
      setLoading(false)

      const category = new Set(data.products.map((item) => item.category))
      setCategories(['', ...Array.from(category)])
    })
  }, [])

  return (
    <MainLayout>
      <div className={s.search}>
        <input
          className={s.input}
          type='text'
          value={search}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              searchButtonRef.current.click()
            }
          }}
          onChange={(event) => {
            setSearch(event.target.value)
          }}
        />
        <button className={s.search_button} type='button' onClick={doSearch} ref={searchButtonRef}>
          Поиск
        </button>
      </div>
      <div className={s.line}></div>
      <div className={s.select_block}>
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id='selects'> </InputLabel>
          <Select
            labelId='selects'
            className={s.select}
            value={selectedCategory}
            name='select'
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {categories.map((category) => (
              <MenuItem value={category} key={category}>
                {' '}
                {category}{' '}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <button
          className={s.search_button}
          onClick={() => {
            setSearch('')
            setSelectedCategory('')
            setFoundProducts(productsList)
          }}
        >
          Сброс
        </button>
      </div>
      <div></div>
      <div className={s.form}>
        {!Loading ? (
          totalProduct.length !== 0 ? (
            totalProduct.map((product) => (
              <ProductCard
                key={product.id}
                images={product.images}
                title={product.title}
                price={product.price}
                id={product.id}
              ></ProductCard>
            ))
          ) : (
            <h1>Нет такого товара на нашей барахолке</h1>
          )
        ) : (
          <h1>Загрузка...</h1>
        )}
      </div>
    </MainLayout>
  )
}

export default Home
