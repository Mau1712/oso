
import HeroSection from "../HeroSection/HeroSection"
import InfoSectionOne from "../InfoSectionOne/InfoSectionOne"
import InfoSectionTwo from "../InfoSectionTwo/InfoSectionTwo"
import CounterSkills from "../CounterSkills/CounterSkills"
import InfoSectionThree from "../InfoSectionThree/InfoSectionThree"
// import BrandGift from "../BrandGift/BrandGift"
// import InfoSectionFour from "../InfoSectionFour/InfoSectionFour"
import CountriesSection from "../CountriesSection/CountriesSection"


export const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSectionOne />
      <CounterSkills />
      <InfoSectionTwo />
      
      <CountriesSection />

      <InfoSectionThree />
      {/* <InfoSectionFour /> */}
      {/* <BrandGift /> */}
      
    </>

  )
}
