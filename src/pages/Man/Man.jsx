import React from 'react'
import s from './Man.module.scss'
import Mans from './Mans'
const Man = ({ mon }) => {
  return (
    <div className={s.com}>
      {mon.map(item => (
         <Mans item={item} key={item.id}/>
      ))

      }

    </div>
  )
}

export default Man