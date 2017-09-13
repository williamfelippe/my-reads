import React from 'react'
import { Row, Col } from 'react-materialize'
import './style.css'

const Header = () => {
    return (
        <header className="header">
            <Row className="mb-0">
                <Col s={3} className="header__title">
                    <p>My Reads</p>
                </Col>
            </Row>
        </header>
    )
}

export default Header