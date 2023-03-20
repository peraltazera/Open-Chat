import './Aside.css'
import Header from './header/Header'
import Body from './body/Body'
import Footer from './Footer'
import DivFlex from '../styles/DivFlex.style';

function Aside() {

  console.log("Aside")

  return (
    <DivFlex flexDirection="column" backgroundColor="#212329" width="400px" className="Aside">
      <Header />
      <Body />
      {/* <Footer /> */}
    </DivFlex>
  )
}

export default Aside
