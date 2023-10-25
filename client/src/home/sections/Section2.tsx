import { useEffect, useState } from "react"
import { Card1 } from "../components/Cards"
import Model from "../components/Model"
type sectionT = {
  refarance: any
}
const Section2 = ({ refarance }: sectionT) => {
  const [tips, setTips] = useState([])
  const [selectedTip, setSelectedTip] = useState({ title: "", content: "" })
  const [isModelOpen, setModelOpen] = useState(false)
  const fetchTips = async () => {
    const httReq = await fetch("/tips.json")
    const data = await httReq.json()
    setTips(data.tips)
  }
  // console.log(tips);
  useEffect(() => {
    fetchTips()
  }, [])

  return (
    <div
      className='min-h-[90vh] flex flex-col justify-center items-center bg-sky-100 px-12'
      ref={refarance}
    >
      {isModelOpen && (
        <div className='absolute'>
          <Model
            title={selectedTip.title}
            content={selectedTip.content}
            closeHandler={() => {
              setModelOpen(false)
            }}
          />
        </div>
      )}
      <div className='text-center py-8 text-2xl font-bold md:text-[30px]'>
        E-waste Ends with Us - Be Part of the Solution
      </div>
      <div className='md:grid grid-cols-2 md:grid-cols-4 gap-4 my-4 justify-around h-4/6'>
        {tips.map((tip: { title: string; content: string }, i) => (
          <Card1
            key={i}
            title={tip.title}
            content={tip.content.slice(0, 30) + "..."}
            clickHandler={() => {
              setSelectedTip(tip)
              setModelOpen(true)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Section2
