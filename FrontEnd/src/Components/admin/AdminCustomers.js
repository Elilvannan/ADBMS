import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import DataTable from 'react-data-table-component';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import * as Icon from 'react-bootstrap-icons';

const columns = [
  {
    name: 'NAME',
    selector: row => row[0],
    sortable: true,
  },
  {
    name: 'PHONE',
    selector: row => row[1],
    sortable: true,
  },
  {
    name: 'ADDRESS',
    selector: row => row[2],
    sortable: true,
  },
  {
    name: 'EMAIL',
    selector: row => row[3],
    sortable: true,
  },
  {
    name: 'NIC',
    selector: row => row[4],
    sortable: true,
  },
  {
    name: 'GENDER',
    selector: row => row[5],
    sortable: true,
  },
  {
    name: 'AGE',
    selector: row => row[6],
    sortable: true,
  },
];

const AdminCustomers = () => {
  const [show, setShow] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8080/getCustomers').then((response) => {
      setCustomers(response.data);
    });
  }, []);
  return (
    <>
      <div className='container'>
        <div className='row'>
          <h2>CUSTOMERS</h2>
        </div>
        <DataTable
          columns={columns}
          data={customers}
          selectableRows
          selectableRowsHighlight
          pagination
          fixedHeader
          fixedHeaderScrollHeight='70vh'
          highlightOnHover

        />

        <Icon.PlusCircle

          className="addButton d-flex content-align-end"
          size={35}
          color="green"
        />

      </div>

    </>
  )
}

export default AdminCustomers