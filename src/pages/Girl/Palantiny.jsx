import * as React from 'react';
import { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import s from './Palantiny.module.scss'
import p11 from '../../img/p11.webp';
import p3 from '../../img/p12.webp';
import p2 from '../../img/p16.webp';
import p4 from '../../img/p17.jpg';
import p5 from '../../img/з6.jpg';
import p6 from '../../img/p7.jpg';
import p7 from '../../img/p8.jpg';
import p8 from '../../img/p9.webp';
import p10 from '../../img/p10.jpg';
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
          <NavLink to="/p1">
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
          <h2>1190 c</h2>
          <h5>ПАЛАНТИН ЛЕОПАРД</h5>
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
          <h2>1000 c</h2>
          <h5>ПАЛАНТИН ШЕЛК АРМАНИ</h5>
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
          <h2>1700 c</h2>
          <h5>ПАЛАНТИН С ПЕРЬЯМИ</h5>
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
          <h2>1200 c</h2>
          <h5>Теплый палантин с принтами</h5>
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
          <h2>900 c</h2>
          <h5>ПАЛАНТИН «BOUTIQUE»</h5>
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
          <h2>900 c</h2>
          <h5>ПАЛАНТИН СТРЕЙЧ »ЛАПША»</h5>
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
          <h2>700 c</h2>
          <h5>ПАЛАНТИН ШАРЭЛЬ</h5>
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
          <h5>ПАЛАНТИН МИКРОАТЛАС</h5>
        </div>

       



      </div>
      
    <Accordion  className={s.ss}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h3>Женские палантины</h3> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className={s.text}>
              <span>
                Популярность мусульманского палантина снова становится очевидной. Может, он и вовсе не выходил из моды? Исламский шарф сочетается практически со всеми вещами. Главное, уметь его сочетать. С платьем, пальто, брюками, юбкой. В интернет-магазине «Муслима» вы найдёте мусульманские женские шарфы, которые помогут воплотить любую идею и обеспечат настоящий комфорт. Для женщин это чрезвычайно важно.
              </span>
            </div>

          </Typography>
        </AccordionDetails>
      </Accordion>
    

    </div>
  );
}





