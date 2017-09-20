import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import { BooksList, SearchBar, PageHandler } from '../../components'
import './style.css'

class Search extends Component {

    render() {
        const {
            books,
            booksFound,
            changeBookOfShelf,
            onSearch,
            loading,
            error
        } = this.props

        return (
            <PageHandler
                loading={loading}
                error={error}>
                <div className="container">
                    <SearchBar onSearch={onSearch} />

                    <Row>
                        <Col s={12}>
                            <BooksList
                                books={
                                    booksFound.filter(
                                        (bookFound) => books.findIndex(
                                            book => book.id === bookFound.id
                                        ) === -1
                                    )
                                }
                                changeBookOfShelf={changeBookOfShelf} />
                        </Col>
                    </Row>
                </div>
            </PageHandler>
        )
    }
}

export default Search