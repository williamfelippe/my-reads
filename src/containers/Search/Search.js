import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import { search } from '../../api/BooksAPI'
import { Book, SearchBar } from '../../components'
import './style.css'

const MAX_RESULTS = 10

class Search extends Component {

    constructor() {
        super()
        this.state = {
            searchText: '',
            books: []
        }
    }

    /**
     * 
     * 
     * @param {string} termToSearch 
     * @memberof Search
     */
    searchBook(termToSearch) {

        /**
         * 
         */
        search(termToSearch, MAX_RESULTS)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        const { books, searchText } = this.state

        const booksList = books.map(book => {
            return (
                <li key={book.id}>
                    <Book book={book} />
                </li>
            )
        })

        return (
            <div className="container">
                <SearchBar
                    searchText={searchText}
                    searchBook={this.searchBook.bind(this)} />

                <Row>
                    <Col s={12}>
                        <ul>
                            {booksList}
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Search