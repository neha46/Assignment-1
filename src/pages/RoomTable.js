import React, { useState } from 'react'

const RoomTable = (
    { roomDetails, setRoomDetails }) =>
     {
      const[guestTable,setGuestTable]=useState({
        roomType:"",
        roomRate:"",
        adults:"",
        childrens:""
      })
      const [addRoom, setAddRoom]=useState([])
      const handleRemoveRoom = (index) => {
        const updatedRoomDetails = [...roomDetails];
        updatedRoomDetails.splice(index, 1);
        setRoomDetails(updatedRoomDetails);
      };
    const AddhandleChange=(e)=>{
      setAddRoom({
        ...guestTable,[e.target.name]:e.target.value
      })
      console.log("add room data :", addRoom);
    }
 
  
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
              <td>
                <div>
                <select
              id="roomType"
              className="form-select"
              name="roomType"
              onChange={AddhandleChange}
              required >
              <option value="default">default</option>
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe</option>
              <option value="suite">Suite</option>
            </select>
                </div>
              </td>
              <td>
                {/* {room.roomRate} */}
              <div>
            <input
              type="number"
              className="form-control"
              id="roomRate"
              name="roomRate"
              onChange={AddhandleChange}
              required
            />
                </div>


              </td>
              <td>
                
                
            <input
              type="number"
              className="form-control"
              id="adults"
              name="adults"
              placeholder='adults'
              onChange={AddhandleChange}
              required
            />
                </td>
              <td>
                
            <input
              type="number"
              className="form-control"
              id="childrens"
              name="childrens"
              onChange={AddhandleChange}
              required
              placeholder='children'
            />
                </td>
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