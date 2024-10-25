import { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CounterSkills.css";

const CounterSkills = () => {
  const [liveChannels, setLiveChannels] = useState(0);
  const [movies, setMovies] = useState(0);
  const [series, setSeries] = useState(0);
  const [adultContent, setAdultContent] = useState(0);
  const [startCount, setStartCount] = useState(false); // Estado para activar contadores

  const sectionRef = useRef(null);

  // Detectar cuando el componente entra en la ventana visible
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setStartCount(true); // Iniciar contadores cuando la sección sea visible
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Iniciar los contadores cuando startCount sea verdadero
  useEffect(() => {
    if (startCount) {
      const liveChannelsInterval = setInterval(() => {
        setLiveChannels((prev) => (prev < 3500 ? prev + 10 : 3500));
      }, 10);

      const moviesInterval = setInterval(() => {
        setMovies((prev) => (prev < 18000 ? prev + 50 : 18000));
      }, 10);

      const seriesInterval = setInterval(() => {
        setSeries((prev) => (prev < 9000 ? prev + 30 : 9000));
      }, 10);

      const adultContentInterval = setInterval(() => {
        setAdultContent((prev) => (prev < 500 ? prev + 5 : 500));
      }, 20);

      return () => {
        clearInterval(liveChannelsInterval);
        clearInterval(moviesInterval);
        clearInterval(seriesInterval);
        clearInterval(adultContentInterval);
      };
    }
  }, [startCount]);

  return (
    <Container ref={sectionRef} className="counterSkillsContainer">
      
          <div className="counter">
            <h3>+{liveChannels}</h3>
            <p>CANALES EN VIVO</p>
          </div>
       
          <div className="counter">
            <h3>+{movies}</h3>
            <p>PELÍCULAS</p>
          </div>
       
          <div className="counter">
            <h3>+{series}</h3>
            <p>SERIES</p>
          </div>
       
          <div className="counter">
            <h3>+{adultContent}</h3>
            <p>CONTENIDO ADULTO</p>
          </div>
       
    </Container>
  );
};

export default CounterSkills;
