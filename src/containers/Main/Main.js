import React, { Component } from 'react'
import { Row, Col, Button } from 'react-materialize'
import { getAll, update } from '../../api/BooksAPI'
import { Book, ShelfSidebar } from '../../components'
import { READ, WANT_TO_READ, CURRENTLY_READING } from '../../constants/shelfs'
import './style.css'

class Main extends Component {

    constructor() {
        super()
        this.state = {
            books: [],
            shelf: READ
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

        /**
         * 
         */
        getAll()
            .then(books => {
                /**
                 * 
                 */
                this.setState({ books })
            })
            .catch(error => {
                console.log(error)
            })
    }



    /**
     * 
     * 
     * @param {string} bookId 
     * @param {string} shelf 
     * @memberof Main
     */
    changeBookOfShelf(bookId, shelf) {

        /**
         * 
         */
        const { books } = this.state
        const currentBook = books.filter(book => bookId === book.id)

        /**
         * 
         */
        update(currentBook, shelf)
            .then(response => {
                console.log(response)
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
        this.setState({ shelf }, () => {
            console.log('SHELF', this.state.shelf)
        })
    }

    shelfToTitle() {
        const { shelf } = this.state

        switch (shelf) {
            case READ:
                return 'Lido'

            case WANT_TO_READ:
                return 'Quero ler'

            case CURRENTLY_READING:
                return 'Lendo'

            default:
                return ''
        }
    }

    render() {

        const { books, shelf } = this.state

        const booksList = books.filter(book => book.shelf === shelf).map(book => {
            return (
                <li key={book.id} className="bookList__item">
                    <Book book={book} />
                </li>
            )
        })

        return (
            <Row>
                <Col s={3} className="bookShelf">
                    <ShelfSidebar
                        currentShelf={shelf}
                        changeShelf={this.changeShelf.bind(this)} />
                </Col>
                <Col s={9} className="offset-s3 bookContainer">
                    <h1>
                        {this.shelfToTitle()}
                    </h1>

                    <ul className="bookList">
                        {booksList}
                    </ul>

                    <Button floating large className='addBook' waves='light' icon='search' />
                </Col>
            </Row>
        )
    }
}

export default Main