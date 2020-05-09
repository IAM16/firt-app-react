import React, { useState, useEffect } from 'react';
import logo from '../asset/image/logo.png'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Axios from 'axios'

const NavbarComponent = () => {
    const [navbarData, setNavbarData] = useState([])

    const _getDataNavbar = async () => {
        try {
            const response = await Axios.get('https://my-json-server.typicode.com/hlmifzi/sharing-react/menu')
            setNavbarData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        _getDataNavbar()
    }, [])

    return (
        <Navbar style={{ backgroundColor: '#EDEDF9' }} variant="light">
            <Navbar.Brand href="#home">
                <img
                    style={{ width: '40px' }}
                    src={logo}
                    alt="logo"
                />
            </Navbar.Brand>
            <Nav className="mr-auto">
                {
                    navbarData.map((v, i) => {
                        console.log(v)
                        return (
                            <Nav.Link href="#home">{v.namaMenu}</Nav.Link>

                        )
                    })
                }
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
    )
}

export default NavbarComponent