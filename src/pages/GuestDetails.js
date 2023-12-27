import React from "react";
import CCS from "./CCS";

const GuestDetails = ({
  formData,
  setFormData,
  showModal,
  guestDetails,
  setGuestDetails,
}) => {
  const handleGuestDetailsChange = (e) => {
    setGuestDetails({
      ...guestDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="row g-3 p-3">
          <h2>Guest Details:</h2>
        <div className="col-md-3">
         
          <label htmlFor="guestName" className="form-label">
            Guest Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="guestName"
            name="guestName"
            onChange={handleGuestDetailsChange}
            value={guestDetails.guestName}
            required
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="fullName" className="form-label">
            Full Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            onChange={handleGuestDetailsChange}
            value={guestDetails.fullName}
            required
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="mobile" className="form-label">
            Mobile:
          </label>
          <input
            type="number"
            className="form-control"
            id="mobile"
            name="mobile"
            onChange={handleGuestDetailsChange}
            value={guestDetails.mobile}
            required
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleGuestDetailsChange}
            value={guestDetails.email}
            required
          />
        </div>
        {/* component for country and state, city */}
         <CCS/>
        
        {showModal && (
          <div className="col-md-3">
            <label htmlFor="genderType" className="form-label">
              gender :
            </label>
            <select
              id="genderType"
              className="form-select"
              name="genderType"
              onChange={handleChange}
              required >
              <option value="default">default</option>
              <option value="female">female</option>
              <option value="male">male</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuestDetails;
