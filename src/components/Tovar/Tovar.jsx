import React from 'react'
import { NavLink } from "react-router-dom";

import { useState } from 'react'
import s from '../Tovar/Tovar.module.scss'
import likeImg from '../../img/new2.png'
import likedImg from '../../img/new.png'
import plusI from '../../img/tplus.svg'
import plused from '../../img/plus.svg'

const Tovar = ({ item }) => {
  const [plus, setPlus] = useState(false)
  const [counter, setCounter] = useState(0)

  function amClick() {
    setPlus(!plus)
  }

  return (
    <div>
      <div className={s.content}>
        <NavLink to={`/params/${item.id}`}>
          <div> <img src={item.image} alt="" /></div>
          </NavLink>
        <div> <h2>{item.price}</h2></div>
        <div> <h2>{item.name}</h2></div>
        <div className={s.like} >
        
          <img
            style={{ width: '35px' }}
            onClick={() => setCounter(counter + 1)}
            src={counter ? likedImg : likeImg}
            alt="like" />
          {counter}

        </div>
        <div className={s.plus}>
          <img
            style={{ width: '35px' }}
            onClick={amClick}
            src={plus ? plused : plusI}
            alt="plus" />
        </div>
      </div>

    </div>
  )
}

export default Tovar
