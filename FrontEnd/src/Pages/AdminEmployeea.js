

import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import DataTable from 'react-data-table-component';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import * as Icon from 'react-bootstrap-icons';

const columns = [
    {
        name: 'NO',
        selector: row => row.emp_id,
        sortable: true,
    },
    {
        name: 'NAME',
        selector: row => row.emp_name,
        sortable: true,
    },
    {
        name: 'AGE',
        selector: row => row.emp_age,
        sortable: true,
    },
    {
        name: 'GENDER',
        selector: row => row.emp_gender,
        sortable: true,
    },
    {
        name: 'DOJ',
        selector: row => row.emp_doj,
        sortable: true,
    },
    {
        name: 'POSITION',
        selector: row => row.emp_position,
        sortable: true,
    },
    {
        name: 'ADDRESS',
        selector: row => row.emp_address,
        sortable: true,
    }
];

const AdminEmployeesList = () => {
    const [show, setShow] = useState(false);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8080/getEmployees').then((response) => {
            setEmployees(response.data);
        });
    }, []);
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h2>EMPLOYEES</h2>
                </div>
                <DataTable
                    columns={columns}
                    data={employees}
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

export default AdminEmployeesList
