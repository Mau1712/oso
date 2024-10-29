import { Container } from 'react-bootstrap'

import videoPlanet from "../../assets/planet.mp4"

import arg from "../../assets/banderas/arg.png"
import ven from "../../assets/banderas/ven.png"
import ecua from "../../assets/banderas/ecua.png"
import mex from "../../assets/banderas/mex.png"
import peru from "../../assets/banderas/peru.png"
import usa from "../../assets/banderas/usa.png"

import "./CountriesSection.css"

const CountriesSection = () => {
    return (
        <Container fluid className='countriesSectionContainer'>
            <Container className='boxVideo'>
                <video autoPlay muted loop src={videoPlanet}></video>
            </Container>

            <Container fluid className='countriesSectionContent'>
                <Container className='countriesSectionText'>
                    <h2>Conexión Global</h2>
                    <p>
                        Nos enorgullece ofrecer una plataforma que conecta a usuarios en Venezuela, Argentina, México, Perú, Ecuador, y todos los rincones del mundo. Desde cualquier país, puedes acceder a nuestro contenido sin límites, disfrutando de una experiencia de entretenimiento global sin fronteras. Con tecnología avanzada, llegamos a cada continente, brindando acceso a la mejor programación, series, películas y eventos en vivo. ¡El mundo está a tu alcance, estés donde estés!
                    </p>
                </Container>

                <Container className='countriesSectionText'>
                    <h2>Paga con tu moneda local o incluso con criptomonedas.</h2>
                    <p>
                        ¿Quieres comunicarte direcatmente con un asesor en alguno de estos paises y pagar con tu moneda local?
                    </p>
                </Container>


                <Container className='flagsBox'>
                    <a className='flagsBoxItem' href="">
                        <div >
                            <img src={arg} alt="" />
                        </div>
                    </a>
                    <a className='flagsBoxItem' href="">
                        <div>
                            <img src={ven} alt="" />
                        </div>
                    </a>
                    <a className='flagsBoxItem' href="">
                        <div>
                            <img src={mex} alt="" />
                        </div>
                    </a>
                    <a className='flagsBoxItem' href="">
                        <div>
                            <img src={peru} alt="" />
                        </div>
                    </a>
                    <a className='flagsBoxItem' href="">
                        <div>
                            <img src={usa} alt="" />
                        </div>
                    </a>
                    <a className='flagsBoxItem' href="">
                        <div>
                            <img src={ecua} alt="" />
                        </div>
                    </a>

                </Container>

                <Container className='instructionCountries'>
                    <p>Haga click en alguna de las banderas y podra hablar con un asesor del pais elegido.</p>
                </Container>
            </Container>
        </Container>

    )
}

export default CountriesSection;