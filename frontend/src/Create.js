import axios from 'axios';
import React , { useState }from 'react'
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from './config';

function Create() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

        const navigate = useNavigate();
        const handleSubmit = (event) => {
            event.preventDefault();
            axios.post(`${API_BASE_URL}/create`, {name, phone, email})
            .then(res => {
                navigate('/');
            }).catch(err => console.log(err));
        }
        
        
        return (
            <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                <div className='bg-white p-3 rounded w-50'>
                    <form onSubmit={handleSubmit}>
                         <h2>Add Student Information</h2>
                        <div className='mb-3'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' className='form-control' placeholder='Enter Your Name' 
                            onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='phone'>Phone</label>
                            <input type='text' className='form-control' placeholder='Enter Your Phone' 
                            onChange={e => setPhone(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' className='form-control' placeholder='Enter Your Email' 
                            onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </form>
                </div>
            </div>
        );
    }

export default Create;