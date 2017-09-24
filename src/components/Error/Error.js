import React from 'react'
import { Row, Col, Icon, Button } from 'react-materialize'
import './style.css'

const Error = () => {
    return (
        <div className="error">
            <Row className="error__container">
                <Col s={12}>
                    <Icon className="error__icon">
                        mood_bad
                    </Icon>
                </Col>

                <Col s={12}>
                    <p className="error__message">
                        Unexpected error
                    </p>
                </Col>

                <Col s={12}>
                    <Button 
                        waves='light' 
                        className="error__button" 
                        onClick={() => window.location.reload()}>
                        Try again
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Error