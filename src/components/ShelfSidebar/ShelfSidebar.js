import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { READ, WANT_TO_READ, CURRENTLY_READING } from '../../constants/shelfs'
import './style.css'

class ShelfSidebar extends Component {

    /**
     * 
     * 
     * @param {any} shelf 
     * @memberof ShelfSidebar
     */
    showBooksFromShelf(shelf) {
        const { changeShelf } = this.props
        changeShelf(shelf)
    }

    render() {
        const { currentShelf } = this.props

        return (
            <ul className="shelfSidebar">
                <li className="shelfSidebar__item">
                    <a onClick={this.showBooksFromShelf.bind(this, READ)}
                        className={`shelfSidebar__item__link 
                        ${currentShelf === READ ? 'shelfSidebar__item__link--active' : ''}`}>
                        Lido
                    </a>
                </li>

                <li className="shelfSidebar__item">
                    <a onClick={this.showBooksFromShelf.bind(this, WANT_TO_READ)}
                        className={`shelfSidebar__item__link
                        ${currentShelf === WANT_TO_READ ? 'shelfSidebar__item__link--active' : ''}`}>
                        Quero ler
                    </a>
                </li>

                <li className="shelfSidebar__item">
                    <a onClick={this.showBooksFromShelf.bind(this, CURRENTLY_READING)}
                        className={`shelfSidebar__item__link
                        ${currentShelf === CURRENTLY_READING ? 'shelfSidebar__item__link--active' : ''}`}>
                        Lendo
                    </a>
                </li>
            </ul>
        )
    }
}

ShelfSidebar.propTypes = {
    currentShelf: PropTypes.string.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default ShelfSidebar