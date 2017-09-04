import React, { Component } from 'react'
import { getAll, update } from '../../api/BooksAPI'
import { Book } from '../../components'

class Main extends Component {

    constructor() {
        super()
        this.state = {
            books: []
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

    render() {

        const { books } = this.state

        const booksList = books.map(book => {
            return (
                <li key={book.id}>
                    <Book book={book} />
                </li>
            )
        })

        return (
            <div className="container">
                <ul>
                    {booksList}
                </ul>
            </div>
        )
    }
}

export default Main