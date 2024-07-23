import { useState } from "react";
import API_BASE_URL from '../config';
import { useEffect } from "react";
// import '../styles/Farmer.css'


function Crops() {
const [crops,setcrop]=useState([]);
useEffect(()=>{
  const fecthCrop=async()=> {
    try{
      const respon= await fetch (`${API_BASE_URL}/crops`);
      const data = await respon.json();
      setcrop(data);

    }catch(error){
      console.error(error);
    }
  }
  fecthCrop();
  
},[]);
  return (
    <>
    <table>
      <thead>
          <tr>
            <th>No</th>
            <th>IDCard</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Source</th>
            <th>District</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {crops.map((crop, index) => (
            <tr key={crop.id}>
              <td>{index + 1}</td>
              <td>{crop.id}</td>
              <td>{crop.name}</td>
              <td>{crop.crop_type_id}</td>
              <td>{crop.crop_type}</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          ))}


        </tbody>
        </table>
    </>
  );
};

export default Crops;