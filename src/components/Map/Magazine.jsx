import React from 'react'
import s from './Magazine.module.scss'
import f from '../../img/onaaaaaaaassss.jpg'
const Magazine = () => {

  return (
    <div className={s.block}>
      <div className={s.ss}>
        <div className={s.nash}>
          <h1>Наш ассортимент</h1>
          <p>
            Широкий ассортимент, большая цветовая гамма, отличное качество, приемлимые цены - визитная карточка бренда. Палантины от 200 с, тюрбаны от 350 с, платки от 300 с. Образы с платками стали модной тенденцией.
          </p>
          <p>
            Неудивительно, что эти элементы мусульманской одежды заинтересовали и всемирно известные модные бренды - Dolce & Gabbana, Burberry, DKNY, Nike и др.
          </p>
        </div>
        <div>
          <img src={f} alt="" />
        </div>
      </div>
   
      <div className={s.form}>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="a2f79ce1-ca32-4c79-817c-ca1e0438bbe1" />
        <h2>Ваше имя</h2>

        <input class={s.input} type="text" name="name" placeholder="Имя" required />
        <h2>Ваш номер телефона</h2>

        <input class={s.input} type="number" name="number" placeholder="Телефон" required />
        <div class="chek">
          <input className={s.chek} type="checkbox" name="" id="" />
          <p>Я согласен(а) с политикой конфиденциальности</p>
        </div>
        <button>
          <span> Отправить заявку</span>
        </button>
      </form>
    
      <div class={s.footer}>
        <h1> 
      Начать с нами работать
      </h1>
        <p>
         Для заказа напишите 
         нам свое имя и
         номер <br />телефона,
         наши менеджера
         свяжуться с вами.<br />
         Наша почта: muslima@gmail.com<br />
         Телефон: +996 551 80 65 15</p>
      </div>
     
      
      </div>
    </div>
  )
}

export default Magazine