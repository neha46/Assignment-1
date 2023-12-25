import React, { useState } from "react";
import RoomTable from "./RoomTable";
import GuestModal from "./GuestModal";
import GuestDetails from "./GuestDetails";

const Guest = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const [isGuestListChecked, setIsGuestListChecked] = useState(false);
  const [roomDetails, setRoomDetails] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    checkinDate: "",
    checkoutDate: "",
    roomNumber: "",
    roomType: "default",
    roomRate: 0,
    adults: 0,
    children: 0,
  });
  const [guestDetails, setGuestDetails] = useState({
    guestName: "",
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    state: "",
    country: "",
    IdType: "",
    IdNumber: "",
    IssungCity: "",
    IssuingCountry: "",
    ExpiryDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log("formData :", formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form submitted successfulyy");
    console.log("guest info", formData);
    console.log("room details", roomDetails);
    console.log("guest details", guestDetails);
  };

  const OnhandleAddRow = (event) => {
    event.preventDefault();
    setRoomDetails([...roomDetails, formData]);
    setRowCount((prevCount) => prevCount + 1);
  };
  const [rowCount, setRowCount] = useState(1);
  const handleGuestListChange = (e) => {
    setIsGuestListChecked(e.target.checked);
    console.log(rowCount);
  };
  return (
    <div className="container p-3 d-flex justify-content-center align-items-center">
      <form action="#" className="p-4" method="post" onSubmit={handleSubmit}>
        <h2>Guest Information:</h2>
        <hr />
        <div className="row g-3 p-3">
          <div className="col-md-6">
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
          <div className="col-md-6">
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
          <div className="col-md-6">
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
          <div className="col-md-6">
            <label htmlFor="roomNumber" className="form-label">
              Room Number:
            </label>
            <input
              type="text"
              className="form-control"
              id="roomNumber"
              name="roomNumber"
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
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
              required
            >
              <option value="default">default</option>
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe</option>
              <option value="suite">Suite</option>
            </select>
          </div>
          <div className="col-md-6">
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
          <div className="col-md-6">
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
          <div className="col-md-6">
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
        <div>
          <button className=" text-amber-500 text-lg" onClick={OnhandleAddRow}>
            <i className="ri-add-line"></i>add room
          </button>
        </div>
        <RoomTable roomDetails={roomDetails} setRoomDetails={setRoomDetails} />

        <div className="col-md-12">
          <h2>Guest Details:</h2>
          <hr />
          <GuestDetails
            setFormData={setFormData}
            formData={formData}
            guestDetails={guestDetails}
            setGuestDetails={setGuestDetails}
          />

          <div>
            <button
              className="text-blue-500 p-3 text-center rounded-md focus:outline-none"
              onClick={handleShowModal}
              type="button"
            >
              <i className="ri-add-line"></i>
              Add Complete Details
            </button>
          </div>

          <div className="row g-3 p-3">
            <div className="col-md-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="guestListCheckbox"
                  onChange={handleGuestListChange}
                  checked={isGuestListChecked}
                />
                <label className="form-check-label" htmlFor="guestListCheckbox">
                  Guest List
                </label>
              </div>
            </div>
          </div>

          <GuestModal
            setGuestDetails={setGuestDetails}
            guestDetails={guestDetails}
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <div className="col-12 flex justify-center">
            <button
              className="bg-blue-500 text-white p-3 text-center rounded-md focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Guest;
