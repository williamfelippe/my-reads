import React from 'react'
import PropTypes from 'prop-types'
import { Button, Dropdown } from 'react-materialize'
import { READ, WANT_TO_READ, CURRENTLY_READING } from '../../constants/shelfs'
import shelfToTitle from '../../utils/shelfToTitle'
import './style.css'

const ChangeShelfButton = (props) => {

    const { book, changeBookOfShelf, className } = props

    return (
        <div className="changeofshelf">
            <Dropdown trigger={
                <Button
                    floating
                    className={`changeofshelf__button ${className}`}
                    waves='light'
                    icon='arrow_drop_down' />}>
                <li>
                    <a onClick={() => changeBookOfShelf(book, READ)} 
                        className="changeofshelf__link">
                        {shelfToTitle(READ)}
                    </a>
                </li>
                <li>
                    <a onClick={() => changeBookOfShelf(book, WANT_TO_READ)} 
                        className="changeofshelf__link">
                        {shelfToTitle(WANT_TO_READ)}
                    </a>
                </li>
                <li>
                    <a onClick={() => changeBookOfShelf(book, CURRENTLY_READING)} 
                        className="changeofshelf__link">
                        {shelfToTitle(CURRENTLY_READING)}
                    </a>
                </li>
            </Dropdown>
        </div>
    )
}

ChangeShelfButton.defaultProps = {
    className: ''
}

ChangeShelfButton.propTypes = {
    book: PropTypes.object.isRequired,
    changeBookOfShelf: PropTypes.func.isRequired,
    className: PropTypes.string
}

export default ChangeShelfButton