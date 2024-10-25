import { Container } from "react-bootstrap"
import vivo from "../../assets/vivo.png"

import "./InfoSectionTwo.css"

const InfoSectionTwo = () => {
    return (
        <Container className="infoSectionTwoContainer">

            <div className="infoSectionTwoContent">
                <h2>Canales en vivo</h2>
                <p>
                    ¡Con nuestra plataforma, tienes acceso a más de <strong>3.500 canales en vivo</strong> de todos los países del mundo! Disfruta de una amplia variedad de contenido internacional, desde noticias, deportes, entretenimiento, y mucho más. Todo en tiempo real, sin importar dónde te encuentres.
                </p>
                <p style={{color: "burlywood"}}>
                Con nosotros, tienes el mundo al alcance de tu pantalla.
                </p>
                <button>
                    ¡Lo quiero!
                </button>
            </div>

            <div className="infoSectionTwoContent">
                <img src={vivo} alt="" />
            </div>

        </Container>
    )
}

export default InfoSectionTwo