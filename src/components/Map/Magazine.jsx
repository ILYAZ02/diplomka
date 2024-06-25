import React from 'react'
import s from './Magazine.module.scss'
import f from '../../img/onaaaaaaaassss.jpg'
import { useTranslation } from 'react-i18next'

const Magazine = () => {
  const { t } = useTranslation()

  return (
    <div className={s.block}>
      <div className={s.ss}>
        <div className={s.nash}>
          <h1>{t("c.c4")}</h1>
          <p>
          {t("c.c5")}
          </p>
          <p>
          {t("c.c6")}
          </p>
        </div>
        <div>
          <img src={f} alt="" />
        </div>
      </div>
   
      <div className={s.form}>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="a2f79ce1-ca32-4c79-817c-ca1e0438bbe1" />
        <h2>   {t("c.c10")}</h2>

        <input class={s.input} type="text" name="name" placeholder={t("c.c14")}  required />
        <h2>{t("c.c11")}</h2>

        <input class={s.input} type="number" name="number" placeholder="Телефон" required />
        <div class="chek">
          <input className={s.chek} type="checkbox" name="" id="" />
          <p>{t("c.c13")} </p>
        </div>
        <button>
          <span>{t("c.c12")} </span>
        </button>
      </form>
    
      <div class={s.footer}>
        <h1> 
        {t("c.c7")}

      </h1>
        <p>
        {t("c.c8")} <br />
       
        {t("c.c9")}muslima@gmail.com<br />
         Телефон: +996 551 80 65 15</p>
      </div>
     
      
      </div>
    </div>
  )
}

export default Magazine