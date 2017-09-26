import React from 'react'
import './style.css'

const NoMatch = () => {
    return (
        <div className="nomatch">
            <h1 className="nomatch__title">
                404
            </h1>

            <p className="nomatch__description">
                Ops... Essa página não existe
            </p>
        </div>
    )
}

export default NoMatch