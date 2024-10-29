import { Container } from 'react-bootstrap'

import serie from "../../assets/serie.png"

import './InfoSectionThree.css'

const InfoSectionThree = () => {
    return (
        <Container className="infoSectionThreeContainer">
             <Container className="infoSectionTwoContent">
                <img src={serie} alt="" />
            </Container>

            <Container className="infoSectionThreeContent">
                <h2>Series</h2>
                <p>
                    ¡Descubre un universo de entretenimiento con nuestra plataforma! Accede a más de <strong>9.000 series</strong> de todos los géneros y países. Desde éxitos internacionales hasta joyas ocultas, podrás disfrutar de temporadas completas, nuevas temporadas y episodios en calidad HD. Encuentra tus series favoritas y explora nuevas historias en cualquier momento y lugar. ¡Conéctate y disfruta de las mejores series del mundo en un solo lugar!
                </p>
                <p style={{ color: "burlywood" }}>
                    Con nosotros, tienes el mundo al alcance de tu pantalla.
                </p>
                <button>
                    ¡Lo quiero!
                </button>
            </Container>

        </Container>
    )
}

export default InfoSectionThree