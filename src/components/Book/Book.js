import React from 'react'
import './style.css'

const Book = (props) => {
    const { book } = props
    const { imageLinks, title, subtitle } = book

    return (
        <div className="book">
            <img src={imageLinks.thumbnail} alt="" className="book__image" />

            <p className="book__title">
                {title}
            </p>

            <p className="book__subtitle">
                {subtitle}
            </p>
        </div>
    )
}

export default Book 