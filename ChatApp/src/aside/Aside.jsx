import './Aside.css'
import Header from './header/Header'
import Body from './body/Body'
import Footer from './Footer'

function Aside() {

  console.log("Aside")

  return (
    <div className="Aside">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  )
}

export default Aside
