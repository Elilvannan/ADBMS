import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import DataTable from 'react-data-table-component';

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const columns = [
  {
    name: 'USER NAME',
    selector: row => row[1],
    sortable: true,
  },
  {
    name: 'POST',
    selector: row => row[2],
    sortable: true,
  },
];

const DashBody = () => {
  
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:8080/getAllUsers').then((response) => {
      setUserDetails(response.data);
    });
  }, []);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-9'>

          <h2>USERS</h2>
          <DataTable
            columns={columns}
            data={userDetails}
            selectableRows
            selectableRowsHighlight
            pagination
            fixedHeader
            fixedHeaderScrollHeight='70vh'
            highlightOnHover
            
          />
        </div>
        <div className='col-md-3'>
          Sub
        </div>
      </div>
    </div>
  )
}

export default DashBody
