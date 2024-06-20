import React from 'react'
import s from './O_nas.module.scss'
import lok from '../../img/adres.png'
import chasy from '../../img/308937.svg'
import tel from '../../img/atel.png'
import jip from '../../img/aaaaa.jpg'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()

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
<h2>{t("o-nas.nas")}</h2>
<NavLink to='/magaz'>
  <button className={s.b}><span>{t("o-nas.nas1")}</span> </button>
</NavLink>
</div>


</div>



    </div>
  )
}

export default Contact

