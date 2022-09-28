import React, { useState,useEffect } from 'react'
import Axios from 'axios'
import { TableSimple } from 'react-pagination-table';


const DashBody = () => {
    const [userDetails, setUserDetails] = useState([]);
        useEffect(() => {
            Axios.get('http://localhost:8080/checkLogin').then((response) => {
        
                setUserDetails(response.data);
            });
          }, []);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-9'>
            <h2>USERS</h2>
        </div>
        <div className='col-md-3'>
            Sub
        </div>
      </div>
    </div>
  )
}

export default DashBody
