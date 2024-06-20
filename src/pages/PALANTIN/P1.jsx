import React, { useState } from 'react'
import s from './P1.module.scss'
import w from '../../img/leopard.jpg'
import q from '../../img/leopard2.jpg'
import g from '../../img/leopard3.jpg'
import f from '../../img/leopard4.jpg'
import Modal from '../Modal'
import { useTranslation } from 'react-i18next'

const P1 = () => {
  const [modalActive, setModalActive] = useState(true)
  const { t } = useTranslation()

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
          <h5>Палантин леопард</h5>

          <div className={s.blockk}>
            <p>{t("p.p1")}</p>
            <div className={s.btn}>
              <img width={80} onClick={() => setImg(q)} src={q} alt="" />
              <img width={80} onClick={() => setImg(w)} src={w} alt="" />
              <img width={80} onClick={() => setImg(g)} src={g} alt="" />
              <img width={80} onClick={() => setImg(f)} src={f} alt="" />


            </div>
          </div>
          <div className="App">



          </div>
          <div className={s.razmer}>
            <p>{t("p.p2")}</p>
            <div className={s.razmery}>
              <button onClick={() => setText(a)}>L</button>
              <button onClick={() => setText(d)}>XL</button>
              <button onClick={() => setText(v)}>2XL</button>
              <button onClick={() => setText(c)}>4XL</button>

            </div>
            <div className={s.price}>
              <p>{t("p.p3")}</p>
              <p>{text}</p>
            </div>
            <div className={s.dos}>
              <div className={s.cambion}>
                <div>
                  <p>
                    {t("p.p4")}
                  </p>
                </div>
                <div>
                  <p>
                    {t("p.p5")}</p>
                </div>
              </div>
              <div className={s.rescera}>
                <div>
                  <p>{t("p.p6")}</p>
                </div>
                <div>
                  <p>
                  {t("p.p7")}

                  </p>
                </div>

              </div>
            </div>
            <div className={s.btn_k}>
              <button className={s.a1}>   {t("p.p8")}</button>
              <button onClick={() => setModalActive(true)}> {t("p.p9")}</button>
            </div>
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
        </div>
      </div>


    </div>
  )
}

export default P1