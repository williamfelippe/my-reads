import React from 'react'
import PropTypes from 'prop-types'
import { Button, Dropdown } from 'react-materialize'
import { READ, WANT_TO_READ, CURRENTLY_READING, NONE } from '../../constants/shelfs'
import shelfToTitle from '../../utils/shelfToTitle'
import './style.css'

const ChangeShelfButton = (props) => {

    const { book, onChangeBookOfShelf, className } = props

    return (
        <div className="changeofshelf">
            <Dropdown trigger={
                <Button
                    floating
                    className={`changeofshelf__button ${className}`}
                    waves='light'
                    icon='arrow_drop_down' />}>
                <li>
                    <a onClick={() => onChangeBookOfShelf(book, READ)} 
                        className="changeofshelf__link">
                        {shelfToTitle(READ)}
                    </a>
                </li>
                <li>
                    <a onClick={() => onChangeBookOfShelf(book, WANT_TO_READ)} 
                        className="changeofshelf__link">
                        {shelfToTitle(WANT_TO_READ)}
                    </a>
                </li>
                <li>
                    <a onClick={() => onChangeBookOfShelf(book, CURRENTLY_READING)} 
                        className="changeofshelf__link">
                        {shelfToTitle(CURRENTLY_READING)}
                    </a>
                </li>
                <li>
                    <a onClick={() => onChangeBookOfShelf(book, NONE)} 
                        className="changeofshelf__link">
                        {shelfToTitle(NONE)}
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
    onChangeBookOfShelf: PropTypes.func.isRequired,
    className: PropTypes.string
}

export default ChangeShelfButton