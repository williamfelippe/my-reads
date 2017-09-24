import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col, Button } from 'react-materialize'
import { BooksList, ShelfSidebar, PageHandler } from '../../components'
import { READ } from '../../constants/shelfs'
import shelfToTitle from '../../utils/shelfToTitle'
import './style.css'

class Main extends Component {

    constructor() {
        super()

        /**
         * Inicializa a primeira prateleira como a de livros lidos
         */
        this.state = {
            shelf: READ
        }
    }

    /**
     * Realiza a mudança de prateleira
     * 
     * @param {any} shelf 
     * @memberof Main
     */
    changeShelf(shelf) {
        this.setState({ shelf })
    }

    render() {

        const { books, changeBookOfShelf } = this.props
        const { shelf, loading, error } = this.state

        return (
            <PageHandler
                loading={loading}
                error={error}>
                <Row>
                    <Col s={2} m={3} className="bookShelf">
                        <ShelfSidebar
                            currentShelf={shelf}
                            changeShelf={this.changeShelf.bind(this)} />
                    </Col>
                    <Col s={10} m={9} className="offset-s2 offset-m3 bookContainer">
                        <h1>
                            {shelfToTitle(shelf)}
                        </h1>

                        <BooksList
                            changeBookOfShelf={changeBookOfShelf}
                            books={books.filter(book => book.shelf === shelf)} />

                        <NavLink exact to="/search">
                            <Button
                                floating
                                large
                                className='addBook'
                                waves='light'
                                icon='search' />
                        </NavLink>

                        <div className="bookContainer__credit">
                            Icons made by <a href="https://www.flaticon.com/authors/smashicons" 
                            title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"
                                    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"
                                title="Creative Commons BY 3.0" 
                                target="_blank">CC 3.0 BY</a>
                        </div>
                    </Col>
                </Row>
            </PageHandler>
        )
    }
}

export default Main