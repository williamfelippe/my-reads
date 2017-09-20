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
        this.state = {
            shelf: READ
        }
    }

    /**
     * 
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

        console.log('MAIN')

        return (
            <PageHandler
                loading={loading}
                error={error}>
                <Row>
                    <Col s={3} className="bookShelf">
                        <ShelfSidebar
                            currentShelf={shelf}
                            changeShelf={this.changeShelf.bind(this)} />
                    </Col>
                    <Col s={9} className="offset-s3 bookContainer">
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

                    </Col>
                </Row>
            </PageHandler>
        )
    }
}

export default Main