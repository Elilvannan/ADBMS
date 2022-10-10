

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
    const addNewEmp = (e) => {
        (async () => {
            await fetch('http://localhost:8080/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "food_price": price,
                        "food_image": image,
                        "food_category": categ,
                        "food_desc": desc
                    }
                )
            });
            alert("Food added");
            window.location.reload();
        })();

    };


    const [empName, setEmpName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [categ, setCateg] = useState('');
    const [desc, setDesc] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    onClick={handleShow}
                    className="addButton d-flex content-align-end"
                    size={35}
                    color="green"
                />

                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>ADD EMPLOYEE</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form autoComplete='false'>
                            <Form.Group className="mb-3 mb-3 d-flex flex-column align-items-start" controlId="formBasicEmail">
                                <Form.Label>Employee Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Food name"
                                    name="food"
                                    onChange={(e) => {
                                        setEmpName(e.target.value)
                                    }}
                                />
                            </Form.Group>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <Form.Group className="mb-3 mb-3 d-flex flex-column align-items-start" controlId="formBasicEmail">
                                        <Form.Label>Food Price</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter Food name"
                                            name="food"
                                            onChange={(e) => {
                                                setPrice(e.target.value)
                                            }}
                                        />
                                    </Form.Group>
                                </div>
                                <div className='col-md-6'>
                                    <Form.Group className="mb-3 mb-3 d-flex flex-column align-items-start" controlId="formBasicEmail">
                                        <Form.Label>Food Image</Form.Label>
                                        <Form.Control
                                            type="file"
                                            onChange={(e) => {
                                                setImage(e.target.value)
                                            }}
                                        />
                                    </Form.Group>
                                </div>
                            </div>

                            <div className='row'>
                                <Form.Label>Food Type</Form.Label>
                                <div className='col-md-12'>
                                    <select className='form-control' name='categ'
                                        onChange={(e) => {
                                            setCateg(e.target.value)
                                        }}
                                    >
                                        <option value='Breakfast'>Breakfast</option>
                                        <option value='Lunch'>Lunch</option>
                                        <option value='Dinner'>Dinner</option>
                                    </select>
                                </div>
                            </div>

                            <div className='row my-1'>
                                <div className='col-md-12'>
                                    <Form.Label>Food Description</Form.Label>
                                    <textarea className='form-control' rows={4}
                                        onChange={(e) => {
                                            setDesc(e.target.value)
                                        }}>

                                    </textarea>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-12 mb-3 d-flex flex-row align-items-end'>
                                    <Button variant="danger" className='mx-2' type="reset">
                                        RESET
                                    </Button>
                                    <Button variant="primary" type="button" onClick={addNewEmp}>
                                        ADD
                                    </Button>
                                </div>
                            </div>

                        </Form>

                    </Modal.Body>

                </Modal>

            </div>

        </>
    )
}

export default AdminEmployeesList
