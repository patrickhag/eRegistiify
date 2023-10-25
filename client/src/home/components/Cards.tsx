import img from "/serv1.png"
import img2 from "/serv1.png"
type tip = {
  title: string
  content: string
  image?: string
  clickHandler: () => void
}
export const Card1 = ({ title, content, clickHandler, image = img }: tip) => {
  return (
    <div
      className='bg-white rounded-md text-center m-4 hover:border p-4 md:max-w-[30rem]'
      onClick={clickHandler}
    >
      <div>
        <picture>
          <img src={image} className='h-22 w-20 m-auto'></img>
        </picture>
        <div>
          <h3 className='text-2xl font-bold my-4'>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}
export const Card2 = () => {
  return (
    <div className='bg-white rounded-md md:m-4 m-0 hover:border p-4 md:max-w-[30rem] my-4'>
      <div className=' flex'>
        <picture className='w-3/12 md:pt-10'>
          <img src={img2} className='h-22 w-20 m-auto' />
        </picture>
        <div className='md:w-9/12 sm:10/12'>
          <h3 className='text-lg font-semibold md:my-4 '>Track your device</h3>
          <p className='text-sm font-lighter'>
            Lorem hanyuma turiya du card ukore du card dutatu nubundi ushiyreho
            below headings Extend
          </p>
        </div>
      </div>
    </div>
  )
}
