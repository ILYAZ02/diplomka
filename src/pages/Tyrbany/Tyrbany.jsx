import * as React from 'react';
import { useState } from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import s from './Tyurbany.module.scss'
import p11 from '../../img/t22.jpg';
import p3 from '../../img/t55.webp';
import p2 from '../../img/t44.webp';
import t11 from '../../img/t11.jpg';
import p5 from '../../img/t66.webp';
import p6 from '../../img/t77.webp';
import p7 from '../../img/t88.jpg';
import p10 from '../../img/t33.webp';
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h3>Женские тюрбаны</h3> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className={s.text}>
              <p>
              Женский тюрбан — очень выразительная вещь, подчёркивающая женственность и яркость образа. В интернет-магазине «Муслима», где можно купить летний женский головной убор тюрбан, представлены самые разные модели.
              </p>
            </div>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <div className={s.com}>
        <div className={s.block}>
          <NavLink to="/p1">
            <img src={t11} alt="" />

          </NavLink>

          <div className={s.like} >
            <img
              style={{ width: '35px' }}
              onClick={() => setCounter2(counter2 + 1)}
              src={counter2 ? likedImg : likeImg}
              alt="like" />
            {counter2}
          </div>
          <h2>750 c</h2>
          <h5>Тюрбан трансформер</h5>
        </div>
        <div className={s.block}>
        <NavLink to="/p2">
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
          <h2>890 c</h2>
          <h5>Тюрбан (итальянский шифон)</h5>
        </div>
        <div className={s.block}>
        <NavLink to="/p7">
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
          <h2>670 c</h2>
          <h5>Тюрбан-косынка</h5>
        </div>

        <div className={s.block}>
        <NavLink to="/p3">
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
          <h2>900 c</h2>
          <h5>Тюрбан со складками</h5>
        </div>

        <div className={s.block}>
        <NavLink to="/p4">
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
          <h2>830 c</h2>
          <h5>Тюрбан с ободком</h5>
        </div>
        <div className={s.block}>
        <NavLink to="/p1">
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
          <h2>890 c</h2>
          <h5>Шапка с узлом</h5>
        </div>

        <div className={s.block}>
        <NavLink to="/p5">
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
          <h2>830 c</h2>
          <h5> Тюрбан с гипюром</h5>
        </div>

        <div className={s.block}>
        <NavLink to="/p6">
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
          <h2>490 c</h2>
          <h5>Бони восьмерка</h5>
        </div>
   

       



      </div>
    </div>
  );
}





