import React, { useState, useEffect } from 'react'
import {FaFileCode} from 'react-icons/fa'
import {
    Menu, MenuItem, MenuItemDropdown
} from '../styles'
import Link from 'next/link'
import axios from 'axios'
const cores = require('../../colors/colors.json')
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown } from 'react-bootstrap'

const getCategorys = `
    {
        category{
            category
        }
    }
`;

function MenuComponent(props) {
    const [category, setCategory] = useState([])
    useEffect(()=>{
       const categorys = localStorage.getItem('categorys');
       if(!categorys){
           axios({
               url: '/api/graphql',
               method: 'post',
               data: {
                   query: getCategorys
               }
           })
           .then(res => {
               const { category } = res.data.data;
               console.log(res)
               localStorage.setItem('categorys', JSON.stringify(category))
               setCategory(category)
               return;
           })
       }else{
            const data = JSON.parse(categorys)
            setCategory(data)
       }
    },[])
    return (
        <Navbar bg={"dark"} variant={"light"} expand={"md"}>
            <Navbar.Brand href="#home" style={{color:'white'}}>
                <FaFileCode size={40} color={'white'}/> Algorithms
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">                
                <Nav.Link>
                    <Link href={'/'}>
                        <MenuItem>
                            <a>Home</a>
                        </MenuItem>
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link href={'/'}>
                        <MenuItem>
                            <a>Recentes</a>
                        </MenuItem>
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link href={'/'}>
                        <MenuItem>
                            <a>Contato</a>
                        </MenuItem>
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link href={'/about'}>
                        <MenuItem>
                            <a>Sobre</a>
                        </MenuItem>
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link href={'/logar'}>
                        <MenuItem>
                            <a>Logar</a>
                        </MenuItem>
                    </Link>
                </Nav.Link>
                <Dropdown >   
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Categorias
                    </Dropdown.Toggle>  
                    <Dropdown.Menu>
                    {category ? 
                        category.map((item, i)=>
                            <Dropdown.Item key={i}>
                                <Link href={`/categoria/${item.category}`}>
                                    <a  style={{
                                        textDecoration:'none',
                                        color:'black'
                                    }}>{item.category}</a>
                                </Link>
                            </Dropdown.Item>
                        ):null
                    }       
                    </Dropdown.Menu>                           
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </Dropdown>
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MenuComponent

