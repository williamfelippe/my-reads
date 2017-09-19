import React from 'react'
import PropTypes from 'prop-types'
import { Book } from '../'
import './style.css'

const BooksList = (props) => {

    const { books, changeBookOfShelf } = props

    const booksList = books.map(book => {
        return (
            <li key={book.id} className="bookList__item">
                <Book book={book} changeBookOfShelf={changeBookOfShelf} />
            </li>
        )
    })

    return (
        <ul className="bookList">
            {booksList}
        </ul>
    )
}

BooksList.propTypes = {
    books: PropTypes.array.isRequired,
    changeBookOfShelf: PropTypes.func.isRequired
}

export default BooksList