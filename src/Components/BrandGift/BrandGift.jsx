
import { Container } from 'react-bootstrap'
import hbo from "../../assets/marcas/hbo.gif"
import amzn from "../../assets/marcas/amzn.webp"
import netf from "../../assets/marcas/netf.webp"
import starp from "../../assets/marcas/starp.webp"
import espn from "../../assets/marcas/espn.gif"
import spot from "../../assets/marcas/spot.webp"



import './BrandGift.css'


const BrandGift = () => {
  return (
    <Container className='brandGiftContainer'>
        <img src={hbo} alt="" />
        <img src={amzn} alt="" />
        <img src={netf} alt="" />
        <img src={starp} alt="" />
        <img src={espn} alt="" />
        <img src={spot} alt="" />
    </Container>
  )
}

export default BrandGift