
import './App.css'
import Banner from './components/Banner'
import Category from './components/Category'
import Footer from './components/Footer'
import GlobalBrands from './components/GlobalBrands'

import Header from './components/Header'
import MedalBrands from './components/MedalBrands'

function App() {

  return (
    <>
      <Header className='' style={{}}/>
     <br />
     <br />
      <Banner className=''/>
      <br />
      <br />
      <h1 className=' medal m-5 fs-3'>MEDAL WORTHY BRANDS TO BAG</h1>
      <br />
      <br />
      <MedalBrands/>
      <br />
      <br />
      <h1 className=' medal m-5 fs-3'>GRAND GLOBAL BRANDS</h1>
      <br />
      <br />
      <GlobalBrands/>
      <br />
      <br />
      <h1 className=' medal m-5 fs-3'>SHOP BY CATEGORY</h1>
      <br />
      <br />
      <Category/>
      <br />
      <br />
      <Footer/>
    </>
  )
}

export default App
