import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import { search, update } from '../../api/BooksAPI'
import { BooksList, SearchBar, PageHandler } from '../../components'
import debounce from 'debounce'
import './style.css'

const MAX_RESULTS = 10

class Search extends Component {

    constructor() {
        super()
        this.state = {
            searchText: '',
            books: [],
            loading: false,
            error: false,
            errorMessage: ''
        }
    }

    /**
     * 
     * 
     * @param {any} event 
     * @memberof Search
     */
    onSearch(event) {

        /**
         * 
         */
        this.setState({ searchText: event.target.value }, () => {
            const { searchText } = this.state

            /**
             * 
             */
            if (searchText.length > 3) {
                debounce(this.searchBook(this.state.searchText), 5)
            }
        })
    }

    /**
     * 
     * 
     * @param {string} termToSearch 
     * @memberof Search
     */
    searchBook(termToSearch) {

        this.setState({ loading: true }, () => {

            /**
             * 
             */
            search(termToSearch, MAX_RESULTS)
                .then(books => {
                    this.setState({
                        books,
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
     * @param {any} currentBook 
     * @param {any} shelf 
     * @memberof Search
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

    render() {
        const { books, loading, error } = this.state

        return (
            <PageHandler
                loading={loading}
                error={error}>
                <div className="container">
                    <SearchBar onSearch={this.onSearch.bind(this)} />

                    <Row>
                        <Col s={12}>
                            <BooksList 
                                books={books} 
                                changeBookOfShelf={this.changeBookOfShelf.bind(this)} />
                        </Col>
                    </Row>
                </div>
            </PageHandler>
        )
    }
}

export default Search