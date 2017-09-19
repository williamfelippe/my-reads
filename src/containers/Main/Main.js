import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col, Button } from 'react-materialize'
import { getAll, update } from '../../api/BooksAPI'
import { BooksList, ShelfSidebar, PageHandler } from '../../components'
import { READ } from '../../constants/shelfs'
import shelfToTitle from '../../utils/shelfToTitle'
import './style.css'

class Main extends Component {

    constructor() {
        super()
        this.state = {
            books: [],
            shelf: READ,
            loading: false,
            error: false,
            errorMessage: ''
        }
    }

    componentDidMount() {
        this.fetchBooks()
    }

    /**
     * 
     * 
     * @memberof Main
     */
    fetchBooks() {

        this.setState({ loading: true }, () => {

            /**
             * 
             */
            getAll()
                .then(books => {

                    /**
                     * 
                     */
                    this.setState({
                        books,
                        loading: false
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }



    /**
     * 
     * 
     * @param {string} bookId 
     * @param {string} shelf 
     * @memberof Main
     */
    changeBookOfShelf(currentBook, shelf) {

        /**
         * 
         */
        update(currentBook, shelf)
            .then(response => {

                /**
                 * 
                 */
                currentBook.shelf = shelf

                /**
                 * 
                 */
                this.setState((prevState, props) => ({
                    books: [
                        ...prevState.books.filter(
                            book => book.id !== currentBook.id
                        ),
                        currentBook
                    ]
                }))
            })
            .catch(error => {
                console.log(error)
            })
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
        const {
            books,
            shelf,
            loading,
            error
        } = this.state

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
                            changeBookOfShelf={this.changeBookOfShelf.bind(this)}
                            books={books.filter(
                                book => book.shelf === shelf
                            )} />

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