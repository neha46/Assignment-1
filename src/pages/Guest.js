import React, { useState } from "react";
import RoomTable from "./RoomTable";
import GuestModal from "./GuestModal";
import GuestDetails from "./GuestDetails";
import FormData from "./FormData";


const rules=[{
  required:true,
  message:"required"
}]

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
  const cloneGuestInfoPanel = () => {
    const clonedPanels = [];
    for (let i = 0; i < rowCount; i++) {
      const clonedPanel = (
        <GuestDetails
          key={`cloned-${i}`}
          setFormData={setFormData}
          formData={formData}
          guestDetails={guestDetails}
          setGuestDetails={setGuestDetails}
        />
      );
      clonedPanels.push(clonedPanel);
    }
    return clonedPanels;
  };

  const cloneGuestModal = () => {
    const clonedModals = [];
    for (let i = 0; i < rowCount; i++) {
      const clonedModal = (
        <GuestModal
          key={`cloned-${i}`}
          setGuestDetails={setGuestDetails}
          guestDetails={guestDetails}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      );
      clonedModals.push(clonedModal);
    }
    return clonedModals;
  };
  return (
    <div className="container p-3 d-flex justify-content-center align-items-center">
      <form action="#" className="p-4" method="post" onSubmit={handleSubmit}>
        <h2>Guest Information:</h2>
        <hr />
        <FormData setFormData={setFormData} formData={formData}/>
        <div>
          <button className=" text-amber-500 text-lg" onClick={OnhandleAddRow}>
            <i className="ri-add-line"></i>add room
          </button>
        </div>
        <RoomTable roomDetails={roomDetails} setRoomDetails={setRoomDetails} />

        <div className="col-md-12">
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

          {isGuestListChecked && cloneGuestInfoPanel()}
        {isGuestListChecked && cloneGuestModal()}

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
