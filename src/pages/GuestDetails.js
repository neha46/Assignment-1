import React from "react";

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
        <div className="col-md-6">
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
        <div className="col-md-6">
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
        <div className="col-md-6">
          <label htmlFor="mobile" className="form-label">
            Mobile:
          </label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            name="mobile"
            onChange={handleGuestDetailsChange}
            value={guestDetails.mobile}
            required
          />
        </div>
        <div className="col-md-6">
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
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            onChange={handleGuestDetailsChange}
            value={guestDetails.city}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="state" className="form-label">
            State:
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            onChange={handleGuestDetailsChange}
            value={guestDetails.state}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="country" className="form-label">
            Country:
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            onChange={handleGuestDetailsChange}
            value={guestDetails.country}
            required
          />
        </div>
        {showModal && (
          <div className="col-md-6">
            <label htmlFor="genderType" className="form-label mt-3">
              gender :
            </label>
            <select
              id="genderType"
              className="form-select"
              name="genderType"
              onChange={handleChange}
              required
            >
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
