import React from 'react'
import { Row, Col } from 'react-materialize'
import { BooksList, SearchBar, PageHandler } from '../../components'

const Search = (props) => {

    const {
        books,
        booksFound,
        onChangeBookOfShelf,
        onSearch,
        loading,
        error,
        errorMessage
    } = props

    return (
        <PageHandler
            loading={loading}
            error={error}
            errorMessage={errorMessage}>
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
                            onChangeBookOfShelf={onChangeBookOfShelf} />
                    </Col>
                </Row>
            </div>
        </PageHandler>
    )
}

export default Search