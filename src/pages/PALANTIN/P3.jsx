import React, { useState } from 'react'
import s from './P3.module.scss'
import q from '../../img/b11.webp'
import w from '../../img/b22.webp'
import g from '../../img/b33.webp'
import f from '../../img/b44.webp'
import Modal from '../Modal'
const P1 = () => {
  const [modalActive, setModalActive] = useState(true)

  const [img, setImg] = useState(q)
  const [text, setText] = useState(750 + ' сом')
  const a = 750 + ' сом';
  const d = 790 + ' сом';
  const v = 850 + ' сом';
  const c = 990 + ' сом';
  return (
    <div className={s.block}>
        <div className={s.block1}>
          <div>
            <img className={s.hover} src={img} width={250} alt="" />
          </div>
          <div>
            <img src={img} width={500} alt="" />
          </div>
          {/* <div>
          <img className={s.hover} src={img} width={200} alt="" />
        </div> */}

        </div>
        <div className={s.block2}>
          <div>
            <h5>Теплый палантин с принтами</h5>

            <div className={s.blockk}>
              <p>Выбрать цвет</p>
              <div className={s.btn}>
                <img width={80} onClick={() => setImg(q)} src={q} alt="" />
                <img width={80} onClick={() => setImg(w)} src={w} alt="" />
                <img width={80} onClick={() => setImg(g)} src={g} alt="" />
                <img width={80} onClick={() => setImg(f)} src={f} alt="" />


              </div>
            </div>
            <div className="App">
   

      <Modal active={modalActive} setActive={setModalActive}>
   <div className={s.form}>
   <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="a2f79ce1-ca32-4c79-817c-ca1e0438bbe1" />
        <h2>Ваше имя</h2>

        <input class={s.input} type="text" name="name" placeholder="Имя" required />
        <h2>Ваш номер телефона</h2>

        <input class={s.input} type="number" name="number" placeholder="+996" required />
        <div class={s.chek}>
          <input className={s.cheks} type="checkbox" name="" id="" />
          <p>Я согласен(а) с политикой конфиденциальности</p>
        </div>
        <button>
          <span> Отправить заявку</span>
        </button>
      </form>
   </div>

      </Modal>
    </div>
            <div className={s.razmer}>
              <p>Размеры</p>
              <div className={s.razmery}>
                <button onClick={() => setText(a)}>L</button>
                <button onClick={() => setText(d)}>XL</button>
                <button onClick={() => setText(v)}>2XL</button>
                <button onClick={() => setText(c)}>4XL</button>

              </div>
              <div className={s.price}>
                <p>Цены:</p>
                <p>{text}</p>
              </div>
              <div className={s.dos}>
          <div className={s.cambion}>
            <div>
              <p>Бесплатная <br />
                доставка от 3000 с.</p>
            </div>
            <div>
              <p>Доставка по всему<br />
                Кыргызстану.</p>
            </div>
          </div>
          <div className={s.rescera}>
            <div>
              <p>Гарантия качества<br />
                нашей продукции.</p>
            </div>
            <div>
              <p>Вы можете заказать наши<br />
                товары по оптовым ценам.<br />
               
              </p>
            </div>

          </div>
        </div>
              <div className={s.btn_k}>
                <button className={s.a1}>В корзину</button>
                <button className='open_btn' onClick={() => setModalActive(true)}>Заказать в один клик</button>
              </div>

            </div>
          </div>
        </div>
      
     
    </div>
  )
}

export default P1