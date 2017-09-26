import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { READ, WANT_TO_READ, CURRENTLY_READING } from '../../constants/shelfs'
import shelfToTitle from '../../utils/shelfToTitle'
import './style.css'

class ShelfSidebar extends Component {

    /**
     * Método responsável por trocar de prateleira de acordo com
     * o link clicado
     * @param {string} shelf 
     * @memberof ShelfSidebar
     */
    showBooksFromShelf(shelf) {
        const { changeShelf } = this.props
        changeShelf(shelf)
    }

    render() {
        const { currentShelf } = this.props

        const shelfs = [READ, WANT_TO_READ, CURRENTLY_READING].map(shelf => (
            <li className="shelfSidebar__item" key={shelf}>
                <a onClick={this.showBooksFromShelf.bind(this, shelf)}
                    className={`shelfSidebar__item__link 
                    ${currentShelf === shelf ? 'shelfSidebar__item__link--active' : ''}`}>
                    <span className="hide-on-med-and-down">{shelfToTitle(shelf)}</span>
                    <span className="hide-on-large-only">{shelfToTitle(shelf).charAt(0)}</span>
                </a>
            </li>
        ))

        return (
            <ul className="shelfSidebar">
                {shelfs}
            </ul>
        )
    }
}

ShelfSidebar.propTypes = {
    currentShelf: PropTypes.string.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default ShelfSidebar