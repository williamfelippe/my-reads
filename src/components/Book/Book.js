import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { ChangeShelfButton } from '../'
import './style.css'

const Book = (props) => {

    const { book, changeBookOfShelf } = props
    const { imageLinks, title, subtitle } = book

    return (

        <div className="book">
            <ChangeShelfButton
                book={book}
                changeBookOfShelf={changeBookOfShelf} />

            <NavLink exact to={`/${book.id}`}>
                <img src={imageLinks.thumbnail} alt="" className="responsive-img" />

                <p className="book__title">
                    {title}
                </p>

                <p className="book__subtitle">
                    {subtitle}
                </p>
            </NavLink>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    changeBookOfShelf: PropTypes.func.isRequired
}

export default Book 