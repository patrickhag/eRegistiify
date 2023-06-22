import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { useState } from "react";

export default function RegisterPhone() {
  const { id } = JSON.parse(localStorage.getItem("token"));
  // const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    dateOfPurchase: "",
    priceOfPhone: "",
    imeiNumber: "",
    description: "",
    reportedStatus: "",
  });

  const handleChange = e => {
    e.preventDefault();
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  async function RegisterPhone(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9001/phone`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: id,
          imeiNumber: formData.imeiNumber,
          brand: formData.brand,
          model: formData.model,
          dateOfPurchase: formData.dateOfPurchase,
          description: formData.description,
          priceOfPhone: formData.priceOfPhone,
          reportedStatus: formData.reportedStatus,
        }),
      });
      const data = await response.json();
      if (data.status === "ok") {
        alert(`Registered successfully`);
        // navigateTo("/item:id");
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <Header />;
      <div style={{ margin: "5%" }} className='w3-border w3-round w3-padding'>
        <h1>New Item</h1>
        <form onSubmit={RegisterPhone}>
          <div className='w3-row-padding'>
            <p className='w3-half'>
              <label>Brand</label>
              <input
                className='w3-input w3-border w3-round'
                type='text'
                value={formData.brand}
                name='brand'
                onChange={handleChange}
                placeholder='Brand'
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
              <label>Purchased Date</label>
              <input
                className='w3-input w3-border w3-round'
                type='date'
                value={formData.dateOfPurchase}
                name='dateOfPurchase'
                onChange={handleChange}
                placeholder='Address'
              />
            </p>

            <p className='w3-half'>
              <label>Purchased Cost</label>
              <input
                className='w3-input w3-border w3-round'
                type='text'
                value={formData.priceOfPhone}
                onChange={handleChange}
                name='priceOfPhone'
                placeholder='Purchased cost'
              />
            </p>
          </div>
          <p style={{ marginLeft: "15px", marginRight: "15px" }}>
            <label>IMEI NUMBER</label>
            <input
              className='w3-input w3-border w3-round'
              type='text'
              value={formData.imeiNumber}
              name='imeiNumber'
              onChange={handleChange}
              placeholder='Dial *#06# in Phone to check IMEI Number'
            />
          </p>
          <p style={{ marginLeft: "15px", marginRight: "15px" }}>
            <label>Phone Status</label>
            <input
              className='w3-input w3-border w3-round'
              type='text'
              value={formData.reportedStatus}
              name='reportedStatus'
              onChange={handleChange}
              placeholder="Provide the status of your Phone whether it's Active/Lost/Stolen"
            />
          </p>
          <p style={{ marginLeft: "15px", marginRight: "15px" }}>
            <label>Description/Markings</label>
            <textarea
              cols='30'
              rows='5'
              value={formData.description}
              name='description'
              onChange={handleChange}
              className='w3-border w3-round w3-block'
              placeholder='Explain how your device looks like.'
            ></textarea>
          </p>
          <button type='submit' className='w3-margin w3-btn w3-blue w3-round'>
            Register this Item
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
