import React from 'react'

const RoomTable = (
    { roomDetails, setRoomDetails }) => {
      const handleRemoveRoom = (index) => {
        const updatedRoomDetails = [...roomDetails];
        updatedRoomDetails.splice(index, 1);
        setRoomDetails(updatedRoomDetails);
      };
    
  
      const handleCancelRoom = () => {
        if (roomDetails.length > 0) {
          const updatedRoomDetails = [...roomDetails];
          updatedRoomDetails.pop();
          setRoomDetails(updatedRoomDetails);
        }
      };
 
  return (
    <div>
         <table className="table">
        <thead>
          <tr>
            <th>Room Type</th>
            <th>Room Rate</th>
            <th>Adults</th>
            <th>Children</th>
            
          </tr>
        </thead>
        <tbody>
          {roomDetails.map((room, index) => (
            <tr key={index}>
              <td>{room.roomType}</td>
              <td>{room.roomRate}</td>
              <td>{room.adults}</td>
              <td>{room.children}</td>
              <td>
                <button onClick={() => handleRemoveRoom(index)}><i className="ri-delete-bin-line"></i></button>
              </td>
              <td>
                <button onClick={handleCancelRoom}><i className="ri-close-fill"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RoomTable