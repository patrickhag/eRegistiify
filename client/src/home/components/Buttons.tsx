type ButtonT = {
  text: string
  ClickHandeler?: () => void
}
const Button1 = ({ text, ClickHandeler }: ButtonT) => {
  return (
    <button
      className='btn bg-gradient-to-r from-sky-600 to-sky-800 text-sky-50 py-1 px-8 rounded-[2rem] shadow-md shadow-sky-900 mx-4'
      onClick={ClickHandeler}
    >
      {text}
    </button>
  )
}

export default Button1
