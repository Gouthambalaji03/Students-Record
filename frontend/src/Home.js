import React, {  useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import API_BASE_URL from './config';


function Home() {

    const [data , setData] = useState([]);

    useEffect(() => {
        axios.get(`${API_BASE_URL}/`)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, []);

    const navigate = useNavigate();
    
    const handleDelete = (id) => {
        axios.delete(`${API_BASE_URL}/delete/${id}`)
        .then(res => navigate('/'))
        .catch(err => console.log(err));
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
        <div className='bg-white rounded w-50 p-3'>
            <h2>STUDENT RECORD</h2>
            <Link to='/create' className='btn btn-success'>Add Student + </Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                 <tbody>
                    {Array.isArray(data) && data.length > 0 ? (
                        data.map((d , i) => (
                         <tr key={d.id || i}>
                             <td>{d.name}</td>
                             <td>{d.phone}</td>
                             <td>{d.email}</td>
                             <td>
                                 <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Update</Link>
                                 <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                             </td>
                         </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className='text-center'>No students found</td>
                        </tr>
                    )}
                 </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home