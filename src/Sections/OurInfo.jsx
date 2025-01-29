import { SchoolInfo } from "../constants/constants"
import InfoCard from "../Components/AboutCard"

const OurInfo = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {SchoolInfo.map((info) => (
        <InfoCard 
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