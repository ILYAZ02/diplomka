import React from 'react'
import s from './Mans.module.scss'
import { useState } from 'react'
import likeImg from '../../img/new2.png'
import likedImg from '../../img/new.png'
import plusI from '../../img/tplus.svg'
import plused from '../../img/plus.svg'
const Mans = ({item}) => {
    const [counter, setCounter] = useState(0)
    const [plus, setPlus] = useState(false)

    function amClick() {
        setPlus(!plus)
    }
    return (
        <div className={s.content}>
            {/* <img src={item.image} alt="" />
            <h2>{item.price}</h2>
            <h5> {item.name}</h5> */}
            <div className={s.like}>
                    {/* <img
                        style={{ width: '35px' }}
                        onClick={() => setCounter(counter + 1)}
                        src={counter ? likedImg : likeImg}
                        alt="like" />
                    {counter} */}
                </div>
                <div className={s.plus}>
                    {/* <img
                        style={{ width: '35px' }}
                        onClick={amClick}
                        src={plus ? plused : plusI}
                        alt="plus" /> */}
                </div>
        </div>
    )
}

export default Mans