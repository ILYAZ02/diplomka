import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {} from 'react-app-context'
import s from './App.module.scss'
import Params from './pages/Params/Params';
import Palantiny from './pages/Girl/Palantiny';
import Tyurbany from './pages/Tyrbany/Tyrbany'
import Magazine from '../src//components/Map/Magazine'
import Block from './components/Block/Block';
import Footer from './components/Footer/Footer';
import Header from './components/Header'
import Theme from './components/Themee/Theme';
import P1 from '../src/pages/PALANTIN//P1'
import P2 from '../src/pages/PALANTIN/P2'
import P3 from '../src/pages/PALANTIN/P3'
import P4 from '../src/pages/PALANTIN/P4'
import P5 from '../src/pages/PALANTIN/P5'
import P6 from '../src/pages/PALANTIN/P6'
import P7 from '../src/pages/PALANTIN/P7'
import T1 from '../src/pages/TYURBAN/T1'
import T2 from '../src/pages/TYURBAN/T2'
import T3 from '../src/pages/TYURBAN/T3'
import T4 from '../src/pages/TYURBAN/T4'
import T5 from '../src/pages/TYURBAN/T5'
import T6 from '../src/pages/TYURBAN/T6'
import T7 from '../src/pages/TYURBAN/T7'
import T8 from '../src/pages/TYURBAN/T8'
import './i18n'

function App() {


  
  const [check, setchek] = useState(true)
  function handleclick() {
    setchek(!check)
  }
  // const [cart, setCart] =useState([])
  const [con, setCon] = useState([])
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('http://localhost:3000/db.json')
      const data = await resp.json()
      setCon(data)
    }
    fetchData()
  },[])





  console.log(con)
  return (
    <div className={s.App}>
      <div className={s.Apps}>

    
      <BrowserRouter>
      <div className={check ? s.sun : s.night}>
        <Header check={check} handleclick={handleclick} />
        {/* <Theme/> */}
        <Routes>
          <Route path='/' element={<Block con={con} />} />
          <Route path='/palantiny' element={<Palantiny />} />
          <Route path='/tyurbany' element={<Tyurbany/>} />
          <Route path='/magaz' element={<Magazine />} />
          <Route path='/params/:id' element={<Params/>} />


          <Route path='/p1' element={<P1 />} />
          <Route path='/p2' element={<P2 />} />
          <Route path='/p3' element={<P3/>} />
          <Route path='/p4' element={<P4/>} />
          <Route path='/p5' element={<P5/>} />
          <Route path='/p6' element={<P6/>} />
          <Route path='/p7' element={<P7/>} />

          <Route path='/t1' element={<T1 />} />
          <Route path='/t2' element={<T2 />} />
          <Route path='/t3' element={<T3 />} />
          <Route path='/t4' element={<T4 />} />
          <Route path='/t5' element={<T5 />} />
          <Route path='/t6' element={<T6 />} />
          <Route path='/t7' element={<T7 />} />
          <Route path='/t8' element={<T8 />} />

        </Routes>
        <Footer />
        </div>
      </BrowserRouter>  
      </div>
    </div>
  );
}

export default App;
