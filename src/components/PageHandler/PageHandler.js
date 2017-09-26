import React from 'react'
import PropTypes from 'prop-types'
import { Loader, Error } from '../'

const PageHandler = (props) => {

    const { loading, error, errorMessage, history, children } = props

    if (error) {
        return (
            <Error errorMessage={errorMessage} history={history} />
        )
    }

    return (
        <div>
            {loading && <Loader />}
            {children}
        </div>
    )
}

PageHandler.defaultProps = {
    loading: false,
    error: false
}

PageHandler.propTypes = {
    children: PropTypes.element.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    errorMessage: PropTypes.string
}

export default PageHandler