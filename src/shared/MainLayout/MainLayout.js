import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from './MainLayout.module.css'
import cn from 'classnames'

const MainLayout = (props) => {
  const navigate = useNavigate()

  return (
    <div>
      <div className={s.wrapper}>
        <header>
          <div className={s.head_container}>
            <a>
              <img
                className={s.logo}
                src='https://static.1tv.ru/uploads/project/logo_image/2019/06/21/1550/_original/1550_9cf954d5d5.png'
              />
            </a>
            <nav className={s.nav}>
              <ul className={s.ul}>
                <li className={cn(s.li, s.nav_text)}>
                  <a onClick={() => navigate('/')} className={s.menu_link}>
                    Домой
                  </a>
                </li>
                <li className={cn(s.li, s.nav_text)}>
                  <a onClick={() => navigate('/support')} className={s.menu_link}>
                    Форма обратной связи
                  </a>
                </li>
                <li className={cn(s.li, s.nav_text)}>
                  <a onClick={() => navigate('/cart')} className={s.menu_link}>
                    Корзина
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
      <div className={s.content}>{props.children}</div>
      <footer>
        <div className={s.footer}>
          <ul className={s.bar}>
            <li className={s.li_bar}>Home</li>
            <li className={s.li_bar}>Contacts</li>
            <li className={s.li_bar}>About</li>
            <li className={s.li_bar}>FAQs</li>
          </ul>
          <p className={s.paragraph}>© 2022 Company, Inc</p>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
