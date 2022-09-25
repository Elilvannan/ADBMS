import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginBody = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState("")

    const loginHandler = (e) => {
        
    }
    return (
        <div className='row'>
            <div className='col-md-6'>
                <div className='row'>
                    <h3>LOGIN</h3>
                </div>
                <div className='row mx-5 my-3 d-flex d-flex flex-column justify-content-end align-items-end'>
                    <div className='container'>
                        <Form aut>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter username "
                                    name="uname"
                                    onChange={(e) => {
                                        setUserName(e.target.value)
                                    }}
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="pw"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                />
                            </Form.Group>
                            <div className='row'>
                                <div className='col-md-12 '>
                                    <Button variant="danger" className='mx-2' type="reset">
                                        RESET
                                    </Button>
                                    <Button variant="primary" type="button" onClick={loginHandler}>
                                        LOGIN
                                    </Button>
                                </div>
                            </div>

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginBody
