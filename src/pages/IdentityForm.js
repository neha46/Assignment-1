import React from "react";

const IdentityForm = ({ setGuestDetails, guestDetails }) => {
  const handleIdentityDetailsChange = (e) => {
    setGuestDetails({
      ...guestDetails,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div className="row g-3 p-3">
        <div className="col-md-6">
          <label htmlFor="IdType" className="form-label">
            ID Type:
          </label>
          <input
            type="text"
            className="form-control"
            id="IdType"
            name="IdType"
            onChange={handleIdentityDetailsChange}
            value={guestDetails.IdType}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="IdNumber" className="form-label">
            Id Number:
          </label>
          <input
            type="text"
            className="form-control"
            id="IdNumber"
            name="IdNumber"
            onChange={handleIdentityDetailsChange}
            value={guestDetails.IdNumber}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="IssungCity" className="form-label">
            IssungCity
          </label>
          <input
            type="text"
            className="form-control"
            id="IssungCity"
            name="IssungCity"
            onChange={handleIdentityDetailsChange}
            value={guestDetails.IssungCity}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="IssuingCountry" className="form-label">
            IssuingCountry
          </label>
          <input
            type="text"
            className="form-control"
            id="IssuingCountry"
            name="IssuingCountry"
            onChange={handleIdentityDetailsChange}
            value={guestDetails.IssuingCountry}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="ExpiryDate" className="form-label">
            ExpiryDate
          </label>
          <input
            type="date"
            className="form-control"
            id="ExpiryDate"
            name="ExpiryDate"
            onChange={handleIdentityDetailsChange}
            value={guestDetails.ExpiryDate}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default IdentityForm;
