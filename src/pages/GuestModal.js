import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import GuestDetails from "./GuestDetails";
import IdentityForm from "./IdentityForm";

const GuestModal = ({
  setGuestDetails,
  guestDetails,
  showModal,
  setShowModal,
}) => {
  const handleCloseModal = () => {
    setShowModal(false);
    alert("chnages saved successfully");
  };

  return (
    <div>
      <div className="col-12 flex justify-center">
        {/* Bootstrap Modal */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Complete Guest Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="p-3 ">
              <h2 className="mt-4">Guest Information:</h2>

              {showModal && (
                <>
                  <GuestDetails
                    guestDetails={guestDetails}
                    setGuestDetails={setGuestDetails}
                    showModal={showModal}
                  />
                </>
              )}

              <h2 className="mt-4">Identity Information:</h2>
              <IdentityForm
                setGuestDetails={setGuestDetails}
                guestDetails={guestDetails}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              style={{ backgroundColor: "#6c757d", borderColor: "#6c757d" }}
              onClick={handleCloseModal}
            >
              Close
            </Button>
            <Button
              variant="primary"
              style={{ backgroundColor: "#007bff", borderColor: "#007bff" }}
              onClick={handleCloseModal}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default GuestModal;
