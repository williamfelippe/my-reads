/**
 * 
 */
import React, { Component } from 'react'

/**
 * 
 */
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

/**
 * 
 */
import {
    Main,
    Search,
    BookDetail,
    NoMatch
} from './containers'

/**
 * 
 */
import {
    Header,
    Footer
} from './components'

/**
 * 
 */
import {
    getAll,
    update,
    search
} from './api/BooksAPI'

/**
 * 
 */
import debounce from 'debounce'

/**
 * 
 */
import './assets/styles/App.css'

/**
 * 
 */
const MAX_RESULTS = 10

class BooksApp extends Component {

    constructor() {
        super()
        this.state = {
            books: [],
            booksFound: [],
            searchText: '',
            loading: false,
            error: false,
            errorMessage: ''
        }
    }

    /**
     * 
     * 
     * @param {any} prevProps 
     * @memberof BooksApp
     */
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    /**
     * 
     * 
     * @memberof BooksApp
     */
    componentDidMount() {
        this.fetchBooks()
    }

    /**
     * 
     * 
     * @memberof Main
     */
    fetchBooks() {

        console.log('BOOKS')

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
     * @param {any} currentBook 
     * @param {any} shelf 
     * @memberof BooksApp
     */
    changeBookOfShelf(currentBook, shelf) {

        console.log('CHANGE BOOK OF SHELF')


        this.setState({ loading: true }, () => {
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
                        ],
                        loading: false
                    }))
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
     * @param {any} event 
     * @memberof Search
     */
    onSearch(searchText) {

        /**
         * 
         */
        this.setState({ searchText }, () => {
            const { searchText, loading } = this.state

            if (searchText.length > 3 && !loading) {
                debounce(this.searchBook(searchText), 5)
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
                .then(booksFound => {
                    this.setState({
                        booksFound,
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

    render() {

        const {
            books,
            booksFound,
            searchText,
            loading,
            error
        } = this.state

        return (
            <Router>
                <div className="app">
                    <Header />

                    <Switch>
                        <Route exact path="/" render={() => (
                            <Main
                                books={books}
                                changeBookOfShelf={this.changeBookOfShelf.bind(this)} />
                        )} />

                        <Route exact path="/search" render={() => (
                            <Search
                                books={books}
                                booksFound={booksFound}
                                changeBookOfShelf={this.changeBookOfShelf.bind(this)}
                                onSearch={this.onSearch.bind(this)}
                                loading={loading}
                                searchText={searchText}
                                error={error} />
                        )} />

                        <Route exact path="/:bookId" render={({match}) => (
                            <BookDetail
                                match={match}
                                loading={loading}
                                error={error}
                                changeBookOfShelf={this.changeBookOfShelf.bind(this)} />
                        )} />

                        <Route component={NoMatch} />
                    </Switch>

                    <Footer />
                </div>
            </Router>
        )
    }
}

export default BooksApp