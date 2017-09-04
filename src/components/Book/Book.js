import React from 'react'
import './style.css'

const Book = (props) => {
    const { book } = props

    return (
        <span>
            Livro {book.id}
        </span>
    )
}

export default Book