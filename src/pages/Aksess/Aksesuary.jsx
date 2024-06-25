import * as React from 'react';
import { useState } from 'react'

import s from './Aksesuary.module.scss'
import p11 from '../../img/ф4.webp';
import p3 from '../../img/ф2.webp';
import p2 from '../../img/ф1.webp';
import p4 from '../../img/ф5.webp';
import p5 from '../../img/ф6.webp';
import p6 from '../../img/10.webp';
import p7 from '../../img/ф3.webp';
import p10 from '../../img/ф8.webp';
import likeImg from '../../img/new2.png'
import likedImg from '../../img/new.png'
import { NavLink } from 'react-router-dom';

export default function SimpleAccordion({ gon }) {
  const [counter, setCounter] = useState(0)
  const [counters, setCounters] = useState(0)
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)
  const [counter4, setCounter4] = useState(0)
  const [counter5, setCounter5] = useState(0)
  const [counter6, setCounter6] = useState(0)


  return (
    <div className={s.pad}>
   
      <div className={s.com}>
     
        <div className={s.block}>
          <NavLink to="/a1">
            <img src={p4} alt="" />

          </NavLink>

          <div className={s.like} >
            <img
              style={{ width: '35px' }}
              onClick={() => setCounter2(counter2 + 1)}
              src={counter2 ? likedImg : likeImg}
              alt="like" />
            {counter2}
          </div>
          <h2>590 c</h2>
          <h5>ремень pinko</h5>
        </div>
        <div className={s.block}>
        <NavLink to="/a2">
          <img src={p10} alt="" />
          </NavLink>
          <div className={s.like} >
            <img
              style={{ width: '35px' }}
              onClick={() => setCounter5(counter5 + 1)}
              src={counter5 ? likedImg : likeImg}
              alt="like" />
            {counter5}
          </div>
          <h2>1700 c</h2>
          <h5>сумка HUGO</h5>
        </div>
        <div className={s.block}>
        <NavLink to="/a3">
          <img src={p11} alt="" />
          </NavLink>
          <div className={s.like} >
            <img
              style={{ width: '35px' }}
              onClick={() => setCounter(counter + 1)}
              src={counter ? likedImg : likeImg}
              alt="like" />
            {counter}
          </div>
          <h2>3500 c</h2>
          <h5>Кошолек blue square</h5>
        </div>
      

        <div className={s.block}>
        <NavLink to="/a4">
          <img src={p2} alt="" />
          </NavLink>
          <div className={s.like} >
            <img
              style={{ width: '35px' }}
              onClick={() => setCounters(counters + 1)}
              src={counters ? likedImg : likeImg}
              alt="like" />
            {counters}
          </div>
          <h2>4000 c</h2>
          <h5>Рюкзак Michael Kors</h5>
        </div>

        <div className={s.block}>
        <NavLink to="/a5">
          <img src={p3} alt="" />
          </NavLink>
          <div className={s.like} >
            <img
              style={{ width: '35px' }}
              onClick={() => setCounter1(counter1 + 1)}
              src={counter1 ? likedImg : likeImg}
              alt="like" />
            {counter1}
          </div>
          <h2>4500 c</h2>
          <h5>Сумка Guess</h5>
        </div>


        <div className={s.block}>
        <NavLink to="/a6">
          <img className={s.ppp} src={p5} alt="" />
          </NavLink>
          <div className={s.like} >
            <img
              style={{ width: '35px' }}
              onClick={() => setCounter3(counter3 + 1)}
              src={counter3 ? likedImg : likeImg}
              alt="like" />
            {counter3}
          </div>
          <h2>3000 c</h2>
          <h5>Часы George kini</h5>
        </div>

        <div className={s.block}>
        <NavLink to="/a7">
          <img src={p6} alt="" />
          </NavLink>
          <div className={s.like} >
            <img
              style={{ width: '35px' }}
              onClick={() => setCounter4(counter4 + 1)}
              src={counter4 ? likedImg : likeImg}
              alt="like" />
            {counter4}
          </div>
          <h2>700 c</h2>
          <h5>Очки bluemarine</h5>
        </div>
        <div className={s.block}>
        <NavLink to="/a8">
          <img src={p7} alt="" />
          </NavLink>
          <div className={s.like} >
            <img
              style={{ width: '35px' }}
              onClick={() => setCounter6(counter6 + 1)}
              src={counter6 ? likedImg : likeImg}
              alt="like" />
            {counter6}
          </div>
          <h2>2500 c</h2>
          <h5>Браслет Guess</h5>
        </div>

       



      </div>
 
    

    </div>
  );
}





