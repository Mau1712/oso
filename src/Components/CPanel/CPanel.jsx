import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import menuArrow from "../../assets/menuArrow.png"
import logo from "../../assets/logo.png"
import "./CPanel.css"

const CPanel = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container fluid className='cPanelContainerFater'>
            <Container fluid className='topCpanel'>
                <h4>CPanel</h4>
            </Container>

            <Button className='btnMenuCpanel' onClick={handleShow}>
                <img src={menuArrow} alt="" />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </Container>
    )
}

export default CPanel