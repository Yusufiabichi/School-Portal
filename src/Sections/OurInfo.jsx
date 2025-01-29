import { aboutUs } from "../constants/constants"
import AboutCard from "../Components/AboutCard"

const OurInfo = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {aboutUs.map((info) => (
        <AboutCard 
          key={info.label} 
          imgURL={info.imgURL} 
          label={info.label} 
          subtext={info.subtext} 
        />
      ))}
    </section>
  )
}

export default OurInfo