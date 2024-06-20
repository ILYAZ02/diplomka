import React from 'react'
import './Cart.css'
const Modal = ({ active, setActive, children }) => {
    return (
        <div className={active ? "modal actives" : "modals"} onClick={() => setActive(false)}>
            <div className={active ? "modal__contents" : "modals"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal