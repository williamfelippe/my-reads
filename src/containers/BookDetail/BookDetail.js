import React, { Component } from 'react'
import { PageHandler } from '../../components'
import { get, update } from '../../api/BooksAPI'

class BookDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            error: false,
            errorMessage: '',
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

        this.setState({ loading: true }, () => {

            /**
             * 
             */
            get(bookId)
                .then(book => {
                    this.setState({
                        book,
                        loading: false
                    })
                })
                .catch(error => {
                    console.log(error)

                    this.setState({
                        loading: false,
                        error: true
                    })
                })
        })
    }

    /**
     * 
     * 
     * @param {String} shelf 
     * @memberof BookDetail
     */
    changeBookOfShelf(shelf) {

        const currentBook = this.state.book

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
                    books: [...prevState.books.filter(book => book.id !== currentBook.id), currentBook]
                }))
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { loading, error } = this.state

        return (
            <PageHandler
                loading={loading}
                error={error}>
                <div>
                    Livro
                </div>
            </PageHandler>
        )
    }
}

export default BookDetail