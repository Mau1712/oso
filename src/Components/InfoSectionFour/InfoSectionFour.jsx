
import { Container } from 'react-bootstrap'
import videoPlanet from "../../assets/planet.mp4"

import './InfoSectionFour.css'

const InfoSectionFour = () => {
    return (
        <Container className='infoSectionFourContainer'>
            <div>
                <video autoPlay muted loop src={videoPlanet}></video>
            </div>
        </Container>
    )
}

export default InfoSectionFour