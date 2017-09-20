import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Button, Dropdown } from 'react-materialize'
import { READ, WANT_TO_READ, CURRENTLY_READING } from '../../constants/shelfs'
import shelfToTitle from '../../utils/shelfToTitle'
import './style.css'

const Book = (props) => {

    const { book, changeBookOfShelf } = props
    const { imageLinks, title, subtitle } = book

    return (

        <div className="book">
            <Dropdown trigger={
                <Button
                    floating
                    className='book__button'
                    waves='light'
                    icon='arrow_drop_down' />}>
                <li>
                    <a onClick={() => changeBookOfShelf(book, READ)}>
                        {shelfToTitle(READ)}
                    </a>
                </li>
                <li>
                    <a onClick={() => changeBookOfShelf(book, WANT_TO_READ)}>
                        {shelfToTitle(WANT_TO_READ)}
                    </a>
                </li>
                <li>
                    <a onClick={() => changeBookOfShelf(book, CURRENTLY_READING)}>
                        {shelfToTitle(CURRENTLY_READING)}
                    </a>
                </li>
            </Dropdown>

            <NavLink exact to={`/${book.id}`}>
                <img src={imageLinks.thumbnail} alt="" className="responsive-img book__image" />

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