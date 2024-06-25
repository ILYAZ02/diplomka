import React, { useState } from 'react'
import sun from '../img/nnn111-removebg-preview-removebg-preview (1).png'
import moon from '../img/n2222-removebg-preview-removebg-preview-removebg-preview.png'
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import logo from '../img/Снимок экрана 2024-04-26 160648.png'
import { FaShoppingCart } from "react-icons/fa";
import { useTranslation } from 'react-i18next'
import Cart from './Cart.jsx'
// import Carta from './Tovar/Carta.jsx'

const Header = ({ handleclick, check }) => {
  const [modalActives, setModalActives] = useState(true)

  // let [cartOpen, setCartOpen] = useState(false)
  // const [modalActive, setModalActive] = useState(true)

  const { t, i18n } = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }
  return (
    <div>
      <div className={s.menu}>
        {/* <button className={s.open_btn} onClick={() => setModalActive(true)}>open</button> */}

        <div className={s.comp}>
          <NavLink to='/'>
            <img src={logo} alt="" />
          </NavLink>
          <NavLink to='/' className='link'>
            {t("header.link")}
          </NavLink>
          <NavLink to='/palantiny' className='link1'>
            {t("header.link1")}
          </NavLink>
          
          <NavLink to='/tyurbany' className='link3'>
            {t("header.link3")}
          </NavLink>   
          <NavLink to='/akses' className='link4'>
            {t("header.link4")}
          </NavLink>
          <NavLink to='/magaz' className='link2'>
            {t("header.link2")}
          </NavLink>
         
     
        </div>
        <div className={s.korz}>
          <div className={s.img}>

            <span onClick={() => changeLanguage('ru')}>RU</span>
            <span onClick={() => changeLanguage('en')}>KG</span>
            <img onClick={handleclick}
              src={check ? sun : moon} alt="" />
          </div>
          <FaShoppingCart onClick={() => setModalActives(true)} className={s.korzina} />
          <Cart active={modalActives} setActive={setModalActives} className={s.kk}>
            <h1>КОРЗИНА ПУСТА</h1>
          </Cart>


        </div>


      </div>



      {/* <div className={s.hr}>

      </div> */}

      {/* <Carta active={modalActive} setActive={setModalActive}>
      <div className={s.inp}>
          <input type="text" placeholder='имя'/><br />
          <input type="text" placeholder='фамилия'/><br />
          <input type="text" placeholder='отчество'/><br />
        </div>
        <div className={s.but}>
        <button><p>text</p></button>

        </div>

      </Carta> */}
    </div>
  )
}

export default Header