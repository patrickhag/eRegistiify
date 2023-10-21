import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Sidebar } from "../components/SideBar"
import "../styles.css"

export default function RegisterPhone() {
  const { id } = JSON.parse(localStorage.getItem("token") as string)
  const navigateTo = useNavigate()
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    dateOfPurchase: "",
    priceOfPhone: "",
    imeiNumber: "",
    description: "",
    reportedStatus: "",
    selectedValue: "",
  })

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    e.preventDefault()
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      }
    })
  }

  async function RegisterPhone(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:3001/phone`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: id,
          brand: formData.brand,
          model: formData.model,
          dateOfPurchase: formData.dateOfPurchase,
          priceOfPhone: formData.priceOfPhone,
          imeiNumber: formData.imeiNumber,
          description: formData.description,
          reportedStatus: formData.reportedStatus,
          category: formData.selectedValue,
        }),
      })
      const data = await response.json()
      if (data.status === "ok") {
        alert("Access granted")
        navigateTo("/items")
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <Sidebar />
      <div
        className='w3-border w3-round w3-padding sideBar'
        style={{
          marginTop: "3rem",
          marginLeft: "25rem",
          marginRight: "7rem",
        }}
      >
        <form onSubmit={RegisterPhone}>
          <h1 className='w3-center'>Add item</h1>
          <p>
            <span className='w3-badge'>Tip</span> Field with *(asterisk) are
            required.
          </p>
          <div className='w3-row-padding w3-margin-top'>
            <label>Category</label> <span className='w3-text-red'>*</span>
            <select
              className='w3-select w3-white'
              value={formData.selectedValue}
              onChange={handleChange}
              name='selectedValue'
            >
              <option value=''>-- Select device category --</option>
              <option value='phone'>Phone</option>
              <option value='laptop'>Laptop</option>
              <option value='camera'>Camera</option>
              <option value='tv'>TV</option>
              <option value='table'>Tablet</option>
            </select>
            <p className='w3-half'>
              <label>Brand </label>
              <span className='w3-text-red'>*</span>
              <input
                className='w3-input w3-border w3-round'
                type='text'
                value={formData.brand}
                name='brand'
                onChange={handleChange}
                placeholder='Brand'
                required
              />
            </p>
            <p className='w3-half'>
              <label>Model</label>
              <input
                className='w3-input w3-border w3-round'
                type='text'
                value={formData.model}
                name='model'
                onChange={handleChange}
                placeholder='model'
              />
            </p>
            <p className='w3-half'>
              <label>Purchased Date </label>
              <input
                className='w3-input w3-border w3-round'
                type='date'
                value={formData.dateOfPurchase}
                name='dateOfPurchase'
                onChange={handleChange}
                placeholder='Address'
                required
              />
            </p>
            <p className='w3-half'>
              <label>Purchased Cost </label>
              <span className='w3-text-red'>*</span>
              <input
                className='w3-input w3-border w3-round'
                type='text'
                value={formData.priceOfPhone}
                onChange={handleChange}
                name='priceOfPhone'
                placeholder='Purchased cost'
                required
              />
            </p>
          </div>
          <p style={{ marginLeft: "15px", marginRight: "15px" }}>
            <label>IMEI NUMBER / Serial Number </label>{" "}
            <span className='w3-text-red'>*</span>
            <input
              className='w3-input w3-border w3-round'
              type='text'
              value={formData.imeiNumber}
              name='imeiNumber'
              onChange={handleChange}
              placeholder='Dial *#06# in Phone to check IMEI Number'
              required
            />
          </p>
          <p style={{ marginLeft: "15px", marginRight: "15px" }}>
            <label>Device Status </label>
            <span className='w3-text-red'>*</span>
            <input
              className='w3-input w3-border w3-round'
              type='text'
              value={formData.reportedStatus}
              name='reportedStatus'
              onChange={handleChange}
              placeholder="Provide the status of your device whether it's Active/Lost/Stolen"
              required
            />
          </p>

          <p style={{ marginLeft: "15px", marginRight: "15px" }}>
            <label>Description/Markings </label>
            <span className='w3-text-red'>*</span>

            <textarea
              cols={30}
              rows={5}
              value={formData.description}
              name='description'
              onChange={handleChange}
              className='w3-border w3-round w3-block'
              placeholder=' Explain how your device looks like.'
              required
            ></textarea>
          </p>
          <button type='submit' className='w3-margin w3-btn w3-blue w3-round'>
            Register this Item
          </button>
        </form>
      </div>
    </>
  )
}
