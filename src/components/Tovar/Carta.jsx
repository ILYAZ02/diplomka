import React from 'react'
import s from './Carta.module.scss'
const Carta = ({ active, setActive, children }) => {
  return (
    <div>
          <div className={s.active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={s.active ? "modal__content" : "modal"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Carta