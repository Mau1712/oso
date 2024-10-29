
import { Container } from 'react-bootstrap'
import "./InfoSectionOne.css"

const InfoSectionOne = () => {
    return (
        <Container fluid className='bgInfoSectionOne'>
            <Container className='infoSectionOneContainer'>
                <Container className='infoSectionOneTitleBox'>
                    <div className='infoSectionOneTitle'>
                        <h2>TODO EN UN SOLO LUGAR</h2>
                        <p>
                            ¡Descubre la app definitiva que lo tiene todo en un solo lugar! Con más de <strong>3.500 canales en vivo</strong>, disfruta de la mejor programación de todo el mundo. Además, accede a todas tus plataformas de streaming favoritas como Netflix, Amazon Prime, Disney Plus y muchas más, sin tener que cambiar de aplicación. Explora un catálogo increíble con más de <strong>9.000 series</strong> y <strong>18.000 películas</strong>, desde los últimos estrenos hasta los clásicos que amas. Todo el entretenimiento que necesitas, en un solo clic. ¡No te lo pierdas, descarga la app ahora y vive la mejor experiencia de entretenimiento!
                        </p>
                    </div>

                    <div className='infoSectionOneTxt'>
                        <h4>¿Tienes alguna duda o necesitas más información?</h4>
                        <p>¡No te preocupes! Nuestro equipo está aquí para ayudarte. Comunícate con uno de nuestros asesores y descubre todo lo que podemos ofrecerte. Estamos listos para brindarte la mejor atención personalizada y responder a todas tus preguntas. Escríbenos hoy mismo y comienza a disfrutar de nuestros servicios al máximo!</p>
                    </div>

                    <div className='infoSectionOneButton'>
                        <button>
                            CONTACTAR ASESOR
                        </button>
                    </div>
                </Container>
            </Container>
        </Container>
    )
}

export default InfoSectionOne