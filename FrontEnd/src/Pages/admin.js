import React from 'react'
import AdminNav from '../Components/NavBar/AdminNav'

const AdminDashboard = () => {
    let user = localStorage.getItem('theUserName');
  return (
    <div>
        <AdminNav/>
      Dashboard
    </div>
  )
}

export default AdminDashboard
