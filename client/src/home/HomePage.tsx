import { useRef } from "react"
import NavBar from "./components/NavBar"
import Section1 from "./sections/Section1"
import Section2 from "./sections/Section2"
import Section3 from "./sections/Section3"
import FooterSection from "./sections/FooterSection"
import "./tailwind.css"
const HomePage = () => {
  const s1 = useRef(null)
  const s2 = useRef(null)
  const s3 = useRef(null)
  const s4 = useRef(null)
  return (
    <div className='text-teal-950'>
      <NavBar refs={[s1, s2, s3, s4]} />
      <Section1 refarance={s1} />
      <Section2 refarance={s2} />
      <Section3 refarance={s3} />
      <FooterSection />
    </div>
  )
}

export default HomePage
