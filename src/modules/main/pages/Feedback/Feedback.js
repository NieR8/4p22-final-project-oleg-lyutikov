import React, { useEffect, useState } from 'react'
import { MainLayout } from '../../../../shared'
import s from './Feedback.module.css'
import cn from 'classnames'
import { validateEmail, validatePhone } from './Feedback.utils/Feedback.utils'

const Feedback = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [phone, setPhone] = useState('')
  const [emailValid, setEmailValid] = useState(false)
  const [namelValid, setNameValid] = useState(false)
  const [phoneValid, setPhoneValid] = useState(false)

  return (
    <MainLayout>
      <div className={s.container}>
        <h2 className={s.title}>Форма обратной связи</h2>
        <div className={s.form}>
          <div className={s.tabs}>
            <div className={cn(s.tab, s.active_tab)}>Личные данные</div>
          </div>
          <form
            className={s.section_form}
            onSubmit={(event) => {
              event.preventDefault()
              const data = {
                email,
                name,
                text,
                phone,
              }

              let valid = true

              if (!validateEmail(data.email)) {
                setEmailValid(true)
                valid = false
              }
              if (!validatePhone(data.phone)) {
                setPhoneValid(true)
                valid = false
              }

              if (data.name === '') {
                setNameValid(true)
                valid = false
              }
              if (valid) {
                console.log(data)
              }
            }}
          >
            <div className={s.personal_data}>
              <div className={s.first_name}>
                <label>Имя</label>
                <input
                  type='text'
                  value={name}
                  onChange={(event) => {
                    setNameValid(false)
                    setName(event.target.value)
                  }}
                  style={{ borderBottom: namelValid ? '1.5px solid red' : '1px solid cadetblue' }}
                />
                <div className={s.buttons}></div>
              </div>
              <div className={cn(s.contacts_data, s.form_block)}>
                <div className={s.phone}>
                  <label>Телефон</label>
                  <input
                    type='text'
                    value={phone}
                    onChange={(event) => {
                      setPhoneValid(false)
                      setPhone(event.target.value)
                    }}
                    style={{ borderBottom: phoneValid ? '1.5px solid red' : '1px solid cadetblue' }}
                  />
                </div>
                <div className={s.email}>
                  <label>Email</label>
                  <input
                    type='text'
                    value={email}
                    onChange={(event) => {
                      setEmailValid(false)
                      setEmail(event.target.value)
                    }}
                    style={{ borderBottom: emailValid ? '1.5px solid red' : '1px solid cadetblue' }}
                  />
                  <textarea
                    className={s.textarea}
                    value={text}
                    placeholder='Напишите о чем желаете сообщить нам'
                    onChange={(event) => {
                      setText(event.target.value)
                    }}
                  ></textarea>
                  <button className={cn(s.button, s.to_first_stage)}>Отправить</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  )
}

export default Feedback
