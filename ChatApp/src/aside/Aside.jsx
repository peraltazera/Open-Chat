// import './Aside.css'
import Header from './header/Header'
import Body from './body/Body'
import Footer from './Footer'
import AsideStl from './Aside.style';

function Aside() {

  console.log("Aside")

  return (
    <AsideStl className="Aside">
      <Header />
      <Body />
      {/* <Footer /> */}
    </AsideStl>
  )
}

export default Aside
