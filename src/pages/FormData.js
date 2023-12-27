import React from 'react'

const FormData = ({setFormData,formData}) => {
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
        console.log("formData :", formData);
      };
    
  return (
    <div>
        <div className="row g-3 p-3">
          <div className="col-md-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>

            <input
              placeholder="enter your name"
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="checkinDate" className="form-label">
              Check-in Date:
            </label>
            <input
              type="date"
              className="form-control"
              id="checkinDate"
              name="checkinDate"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="checkoutDate" className="form-label">
              Checkout Date:
            </label>
            <input
              type="date"
              className="form-control"
              id="checkoutDate"
              name="checkoutDate"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="roomNumber" className="form-label">
              Room Number:
            </label>
            <input
              type="number"
              className="form-control"
              id="roomNumber"
              name="roomNumber"
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-3">
            <h2>Room Details:</h2>
            <hr />
            <label htmlFor="roomType" className="form-label mt-3">
              Room Type:
            </label>
            <select
              id="roomType"
              className="form-select"
              name="roomType"
              onChange={handleChange}
              required >
              <option value="default">default</option>
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe</option>
              <option value="suite">Suite</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="roomRate" className="form-label">
              Room Rate:
            </label>
            <input
              type="number"
              className="form-control"
              id="roomRate"
              name="roomRate"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="adults" className="form-label">
              Adults:
            </label>
            <input
              type="number"
              className="form-control"
              id="adults"
              name="adults"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="children" className="form-label">
              Children:
            </label>
            <input
              type="number"
              className="form-control"
              id="children"
              name="children"
              onChange={handleChange}
              required
            />
          </div>
        </div>
    </div>
  )
}

export default FormData