import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'NO',
        selector: row => row.food_id,
        sortable: true,
    },
    {
        name: 'NAME',
        selector: row => row.food_name,
        sortable: true,
    },
    {
        name: 'CATEGORY',
        selector: row => row.food_category,
        sortable: true,
    },
    {
        name: 'DETAILS',
        selector: row => row.food_desc,
        sortable: true,
    },
];

const AdminFoodPage = () => {

    const [foods, setFoods] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:8080/getFoods').then((response) => {
            setFoods(response.data);
        });
    }, []);
    return (
        <div className='container'>
            <div className='row'>
                <h2>FOODS</h2>
            </div>
            <DataTable
                columns={columns}
                data={foods}
                selectableRows
                selectableRowsHighlight
                pagination
                fixedHeader
                fixedHeaderScrollHeight='70vh'
                highlightOnHover

            />
        </div>
    )
}

export default AdminFoodPage
