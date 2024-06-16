import React from 'react'
import Carousel from '../Carusel/Carusel'
import s from './Block.module.scss'
import O_nas from '../Contact/O_nas'
import Tovar from '../Tovar/Tovar'
import Search from '../Search/Search'
import { useState } from 'react'
import Carta from '../Tovar/Carta'
const Block = ({ con }) => {
  const [value, setValue] = useState('')
  const allData = con.filter(item => item.name.toLowerCase().includes(value))
  return (
    <div >
      <Carousel />
      <Search setValue={setValue} value={value} />
      <div className={s.com}>
        {
          allData.map(item => (
            <Tovar item={item} key={item.id} />
          ))
        }
      </div>
      <O_nas/>
      <Carta/>
    </div>
  )
}

export default Block