import React from 'react'
import { useTranslation } from 'react-i18next'

import s from './Search.module.scss'
const Search = ({setValue,value}) => {
  const { t } = useTranslation()

  return (
    <div className={s.tovar}>
      <h1> {t("search.rek")}</h1>
      <input  type="search"
      placeholder='поиск...'
      value={value}
      onChange={e=>setValue(e.target.value)}/>
    </div>
  )
}

export default Search