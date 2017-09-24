import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-materialize'
import './style.css'

const Header = () => {
    return (
        <header className="header">
            <Row className="mb-0">
                <Col s={5} m={3} className="header__title">
                    <NavLink exact to="/" className="header__title__link">
                        My Reads
                    </NavLink>
                </Col>
            </Row>
        </header>
    )
}

export default Header