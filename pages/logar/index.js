import React, { useState } from 'react'

import {
    ContentData
} from '../../src/components/styles'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import Alert, { alert } from '../../src/components/Alerts'

function index() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [message, setMessage] = useState({type:'',message:''})
    const logar = () => { 
        console.log(user, password)   
        const query = `
            {
                user(user: "${user}", password: "${password}") {                
                    user
                    password
                }
            }
        `
        axios({
            url: '/api/graphql',
            method: 'post',
            data: {
                query: query
            }
        })
        .then(res => {
            console.log(res.data.user)           
            if(res.data.user >= 1){
                alert('success', 'Logged!', setShowAlert, setMessage);
            }else{
                alert('danger', 'Wrong password or user!', setShowAlert, setMessage);
            }    
        })
        .catch(err => {
			console.log('Erro no post ->'+`${err}`)
			alert('danger', 'Erro ao postar', setShowAlert, setMessage)
		})
    }
    return (
        <ContentData style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {showAlert ? <Alert data={message}/>:null}
            <div style={{
                width:'50%',                            
            }}>
            <Form style={{
                display:'flex',
                flexDirection: 'column',
                justifyContent:'flex-end',
                color: 'white',
            }}>
                <Form.Label>User</Form.Label>
                <Form.Control type={'text'}
                    value={user}
                    onChange={(t)=>setUser(t.target.value)}
                    />
                <Form.Label>Password</Form.Label>
                <Form.Control type={'password'}
                    value={password}
                    onChange={(t)=>setPassword(t.target.value)}/>
                <Button variant={'success'} style={{
                    marginTop: 10,
                }} onClick={logar}>
                    Login
                </Button>
            </Form>
            </div>
        </ContentData>
    )
}

export default index
