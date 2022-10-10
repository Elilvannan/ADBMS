import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import DataTable from 'react-data-table-component';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import * as Icon from 'react-bootstrap-icons';

const columns = [
    {
        name: 'CUSTOMER',
        selector: row => row[0],
        sortable: true,
    },
    {
        name: 'ROOM STATUS',
        selector: row => row[1],
        sortable: true,
    },
    {
        name: 'ROOM DESCRIPTION',
        selector: row => row[2],
        sortable: true,
    }
];


const AdminRoom = () => {
    useEffect(() => {
        Axios.get('http://localhost:8080/getRooms').then((response) => {
            setRoomList(response.data);
        });
    }, []);

    const [roomList, setRoomList] = useState([]);

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h2>ROOMS</h2>
                </div>
                <DataTable
                    columns={columns}
                    data={roomList}
                    selectableRows
                    selectableRowsHighlight
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='70vh'
                    highlightOnHover

                />

               
            </div>
        </>
    )
}

export default AdminRoom