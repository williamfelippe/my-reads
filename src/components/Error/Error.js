import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Icon, Button } from 'react-materialize'
import './style.css'

const Error = ({ errorMessage }) => {
    
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
                        {errorMessage}
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

Error.defaultProps = {
    errorMessage: 'Unexpected error'
}

Error.propTypes = {
    errorMessage: PropTypes.string
}

export default Error