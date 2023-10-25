import img1 from "/sect.webp"
import Button1 from "../components/Buttons"
type sectionT = {
  refarance: any
}
const Section1 = ({ refarance }: sectionT) => {
  return (
    <div
      className='min-h-screen flex-1 items-center bg-gradient-to-r  from-sky-100 to-sky-200 md:flex px-12'
      ref={refarance}
    >
      <div className='md:w-1/2 text-2xl tracking-lg'>
        <p>HOME OF YOUR GADGETS</p>
        <div className=' my-4 font-bold text-2xl'>
          With DeviceGUARD, Protect your devices from your fingertips
        </div>
        <div className='my-10'>
          DeviceGUARD is an online platform that helps you securely protect your
          devices.
        </div>
        <Button1 text='Get started' />
      </div>
      <div className='md:w-1/2'>
        <picture>
          <img src={img1} className='w-full' />
        </picture>
      </div>
    </div>
  )
}

export default Section1
