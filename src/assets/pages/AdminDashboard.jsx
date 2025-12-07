import React, {useEffect, useState} from 'react'
import {} from '../api/api'

function AdminDashboard () {

    const [product, setProducts] = iseState([])
    const [form, setForm] = useState({ name: "", description: "", price: "", category: "", stock: "",})
    useEffect (() => {
        if(localStorage.getItem('role') != 'admin'){
            window.location.href = "/home"
        }
    }, [])

    return (
        <div>AdminDashboard</div>
    )
}

export default AdminDashboard