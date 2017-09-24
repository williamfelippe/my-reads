import React, { Component } from 'react'
import { PageHandler, ChangeShelfButton } from '../../components'
import { get } from '../../api/BooksAPI'
import { Row, Col, Icon } from 'react-materialize'
import Rating from 'react-rating'
import isObjectEmpty from '../../utils/isObjectEmpty'
import shelfToTitle from '../../utils/shelfToTitle'
import './style.css'

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
         * Recupera as informações do livro que está sendo passado
         * por parâmetro na url
         */
        this.fetchBookById(bookId)
    }

    /**
     * Método que realiza a chamada que recupera as informações
     * detalhadas de um livro em específico
     * 
     * @param {string} bookId 
     * @memberof BookDetail
     */
    fetchBookById(bookId) {

        this.setState({ loading: true }, () => {

            get(bookId)
                .then(book => {
                    this.setState({
                        book,
                        loading: false
                    })
                })
                .catch(error => {
                    this.setState({
                        loading: false,
                        error: true
                    })
                })
        })
    }

    render() {
        const { loading, error, errorMessage, book } = this.state
        const { onChangeBookOfShelf } = this.props

        const industryIdentifiers = book.industryIdentifiers && book.industryIdentifiers.length > 0 ?
            book.industryIdentifiers.map(industryIdentifier => {
                return (
                    <li className="bookdetail__identifiers__item" key={industryIdentifier.identifier}>
                        <strong>Type:</strong> {industryIdentifier.type}<br />
                        <strong>Identifier:</strong> {industryIdentifier.identifier}
                    </li>
                )
            }) : null

        return (
            <PageHandler
                loading={loading}
                error={error}
                errorMessage={errorMessage}>

                {
                    !isObjectEmpty(book) ? <div className="container">
                        <Row className="bookdetail">
                            <Col s={12} m={3} className="p-r">
                                <ChangeShelfButton
                                    book={book}
                                    className="bookdetail__changeofshelfbutton"
                                    onChangeBookOfShelf={onChangeBookOfShelf} />

                                <div className="bookdetail__cover"
                                    style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }} />
                            </Col>

                            <Col s={12} m={9}>
                                <sub className="bookdetail__shelf">
                                    {shelfToTitle(book.shelf)}
                                </sub>
                                <h1 className="bookdetail__title">
                                    {book.title}
                                </h1>
                                <p className="bookdetail__subtitle">
                                    {book.subtitle}
                                </p>

                                <p>
                                    <strong>Authors:</strong> {book.authors.join(' ')}
                                </p>

                                <p>
                                    <strong>Publisher:</strong> {book.publisher} - {book.publishedDate}
                                </p>

                                <ul className="bookdetail__identifiers">
                                    {industryIdentifiers}
                                </ul>

                                <Rating
                                    initialRate={book.averageRating}
                                    empty={<Icon className="bookdetail__rate">star_border</Icon>}
                                    full={<Icon className="bookdetail__rate">star</Icon>}
                                    readonly />
                            </Col>
                        </Row>

                        <Row>
                            <Col s={12}>
                                <h4>Description:</h4>

                                <p>
                                    {book.description}
                                </p>
                            </Col>

                            <Col s={12}>
                                <h4>Category:</h4>

                                <p>
                                    {book.categories.length > 0 && book.categories.join(' ')}
                                </p>
                            </Col>



                            <Col s={12}>
                                <h4>Pages:</h4>

                                <p>
                                    {book.pageCount}
                                </p>
                            </Col>
                        </Row>
                    </div> : <div />
                }
            </PageHandler>
        )
    }
}

export default BookDetail