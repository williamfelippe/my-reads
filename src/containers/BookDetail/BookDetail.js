import React, { Component } from 'react'
import { get, update } from '../../api/BooksAPI'

class BookDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            book: {}
        }
    }

    componentDidMount() {
        const { match } = this.props
        const { bookId } = match.params

        /**
         * 
         */
        this.fetchBookById(bookId)
    }

    /**
     * 
     * 
     * @param {string} bookId 
     * @memberof BookDetail
     */
    fetchBookById(bookId) {

        /**
         * 
         */
        get(bookId)
            .then(book => {
                console.log(book)
            })
            .catch(error => {
                console.log(error)
            })
    }

    /**
     * 
     * 
     * @param {string} shelf 
     * @memberof BookDetail
     */
    changeBookOfShelf(shelf) {

        /**
         * 
         */
        const { book } = this.state

        /**
         * 
         */
        update(book, shelf)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default BookDetail