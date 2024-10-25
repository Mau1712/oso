
import { Container } from 'react-bootstrap'
import logo from "../../assets/logo.png"
import './Nav.css'

const Nav = () => {
  return (
    <Container fluid className='navContainer'>
      <div className='navContent'>
        <img src={logo} alt="oso tv" />
        <div>
          <h1>OSO TV</h1>
          <p>ENTERTAIMENT</p>
        </div>

      </div>
      <div className='btnRegister'>
        <button>
          REGISTRARME
        </button>
      </div>
    </Container>
  )
}

export default Nav