import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import DataTable from 'react-data-table-component';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import * as Icon from 'react-bootstrap-icons';


const AdminProfits = () => {
    const [orderedFoods, setOrderedFoods] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:8080/getFoods').then((response) => {
            setOrderedFoods(response.data);
        });
    }, []);
  return (
    <div>
      
    </div>
  )
}

export default AdminProfits
