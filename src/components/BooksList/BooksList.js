import React from 'react'
import PropTypes from 'prop-types'
import { Book } from '../'
import './style.css'

const BooksList = (props) => {

    const { books, onChangeBookOfShelf } = props

    const booksList = books.map(book => {
        return (
            <li key={book.id} className="bookList__item">
                <Book book={book} onChangeBookOfShelf={onChangeBookOfShelf} />
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
    onChangeBookOfShelf: PropTypes.func.isRequired
}

export default BooksList