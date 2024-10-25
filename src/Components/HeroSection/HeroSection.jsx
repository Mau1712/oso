import { Container } from 'react-bootstrap'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';

//Import Images
import sustance from "../../assets/sustance.webp"
import joker from "../../assets/joker.jpg"
import venom from "../../assets/venom.png"
import smileTwo from "../../assets/smileTwo.webp"
import nightmareBefore from "../../assets/nightmareBefore.webp"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import './HeroSection.css'

const HeroSection = () => {
  return (
    <Container fluid className='heroSectionContainer'>
      <Swiper
        // slidesPerView={4}
        spaceBetween={5}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={7000}
        breakpoints={{
          780: { // Cuando la pantalla es de 600px o menos
            slidesPerView: 4, // Mostrar solo 2 slides
          },

          620: { // Cuando la pantalla es de 600px o menos
            slidesPerView: 2, // Mostrar solo 2 slides
          },
        }}

        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={sustance} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={joker} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={venom} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={smileTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nightmareBefore} alt="" />
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default HeroSection