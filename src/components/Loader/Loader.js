import React from 'react'
import {Preloader} from 'react-materialize'
import './style.css'

const Loader = (props) => {
    return (
        <div className="loader">
            <Preloader size='small' className="loader__bar" />
        </div>
    )
}

export default Loader