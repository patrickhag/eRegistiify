import { Card2 } from "../components/Cards.js"
import img1 from "/msm-banner-clip.png"
type sectionT = {
  refarance: any
}
const Section3 = ({ refarance }: sectionT) => {
  return (
    <div
      style={{ backgroundImage: "url('/bg..jpg')" }}
      className='min-h-screen bg-opacity-[0.6] py-3 background md:flex flex-1 items-center bg-gradient-tr  from-sky-100 md:px-12 px-4'
      ref={refarance}
    >
      <div className='md:w-2/6'>
        <picture>
          <img src={img1} className='w-full' />
        </picture>
      </div>
      <div className='md:w-4/2 text-2xl tracking-lg'>
        <h1 className='py-4 font-bold text-sky-50 text-2xl mt-5'>
          Some of our best features
        </h1>
        <div className='md:grid md:grid-cols-2 gap-4'>
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </div>
    </div>
  )
}

export default Section3
