import React from 'react'
import s from './O_nas.module.scss'
import lok from '../../img/adres.png'
import chasy from '../../img/308937.svg'
import tel from '../../img/atel.png'
import jip from '../../img/aaaaa.jpg'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
const Contact = () => {
  const texAnimation ={
    hidden: {
      x:- 100,
      opacity:0,
    },
    visible: custom => ({
      x:- 0,
      opacity:1,
      transition:{delay: custom * 0.2},
    })
  }
  // const textAnimation ={
  //   hidden: {
  //     x:- 100,
  //     opacity:0,
  //   },
  //   visible: custom => ({
  //     x:- 0,
  //     opacity:1,
  //     transition:{delay: custom * 0.1},
  //   })
  // }
  return (

    <div
 
      className={s.ontact}>
   
    
<div className={s.o_nas}>
<div className={s.o_nas_info}>
<p>МУСЛИМА – это качественные материалы, внимание к деталями и ответственность за каждый продукт.</p>
<NavLink to='/magaz'>
  <button className={s.b}><span>О магазине</span> </button>
</NavLink>
</div>


</div>



    </div>
  )
}

export default Contact

