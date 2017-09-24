import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Main, Search, BookDetail, NoMatch } from './containers'
import { Header } from './components'
import { getAll, update, search } from './api/BooksAPI'
import debounce from 'debounce'

/**
 * Fixa uma constante com o valor da quantidade de itens a serem trazidos na busca
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
     * Sempre que o componente for atualizado, executa a rolagem da página
     * para o topo
     * @param {object} prevProps 
     * @memberof BooksApp
     */
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    /**
     * Quando o componente é montado, executa a chamada para o método
     * que realiza a recuperação dos livros
     * @memberof BooksApp
     */
    componentDidMount() {
        this.fetchBooks()
    }

    /**
     * Método que executa a recuperação de todos os livros
     * 
     * @memberof BooksApp
     */
    fetchBooks() {

        /**
         * Quando a requisição começa, inicializa
         * a variável que controla o 'loader' para 'true'
         */
        this.setState({ loading: true }, () => {

            /**
             * Chama o método que recupera os livros do serviço
             */
            getAll()
                .then(books => {

                    /**
                     * Quando a requisição dá certo, inicializa o 'array' de livros
                     * e a variável que controla o 'loader' para 'falso'
                     */
                    this.setState({
                        books,
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

    /**
     * Executa o método que troca o livro de prateleira
     * 
     * @param {object} currentBook 
     * @param {string} shelf 
     * @memberof BooksApp
     */
    changeBookOfShelf(currentBook, shelf) {

        this.setState({ loading: true }, () => {
            /**
             * Realiza requisição ao serviço que irá alterar o livro de prateleira
             */
            update(currentBook, shelf)
                .then(response => {

                    /**
                     * Se a requisição for nem sucedida, troca o valor da prateleira do livro
                     */
                    currentBook.shelf = shelf

                    /**
                     * Atualiza o estado do componente com as novas informações.
                     * Colocando o livro na nova prateleira 
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
                    this.setState({
                        loading: false,
                        error: true
                    })
                })
        })
    }

    /**
     * Método que trata o termo de busca digitado e executa a pesquisa
     * 
     * @param {string} searchText 
     * @memberof BooksApp
     */
    onSearch(searchText) {

        /**
         * Atualiza no estado os valores da variável do termo a ser buscado
         */
        const { loading } = this.state
        
        if (!loading) {
            this.setState({ searchText }, () => {
                const { searchText } = this.state

                /**
                 * Quando o termo digitado ultrapassa 3 caracteres, então a
                 * busca é realizada
                 */
                if (searchText.length > 3) {
                    debounce(this.searchBooks(searchText), 5)
                }

                /**
                 * Do contrário, o 'array' é esvaziado
                 */
                else {
                    this.setState({ booksFound: [] })
                }
            })
        }
    }

    /**
     * Método que busca pelos livros que casam com os termos sendo pesquisados
     * 
     * @param {string} termToSearch 
     * @memberof BooksApp
     */
    searchBooks(termToSearch) {

        this.setState({ loading: true }, () => {

            /**
             * Realiza requisição que busca pelos livros na base de dados
             */
            search(termToSearch, MAX_RESULTS)
                .then(response => {

                    /**
                     * Verifica se a busca não encontrou nada, lançando uma exceção
                     * caso seja o caso
                     */
                    if (response.hasOwnProperty('error')) {
                        throw response
                    }
                    /**
                     * Do contrário adiciona os objetos de livros no estado
                     */
                    else {
                        this.setState({
                            booksFound: response,
                            loading: false
                        })
                    }
                })
                .catch(error => {

                    /**
                     * Adiciona um erro à tela
                     */
                    this.setState({
                        booksFound: [],
                        loading: false,
                        error: true,
                        errorMessage: (error.hasOwnProperty('error')) ? error.error : ''
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
            error,
            errorMessage
        } = this.state

        return (
            <Router>
                <div className="app">
                    <Header />

                    <div className="app__container">
                        <Switch>
                            <Route exact path="/" render={() => (
                                <Main
                                    books={books}
                                    onChangeBookOfShelf={this.changeBookOfShelf.bind(this)} />
                            )} />

                            <Route exact path="/search" render={() => (
                                <Search
                                    books={books}
                                    booksFound={booksFound}
                                    onChangeBookOfShelf={this.changeBookOfShelf.bind(this)}
                                    onSearch={this.onSearch.bind(this)}
                                    loading={loading}
                                    searchText={searchText}
                                    error={error}
                                    errorMessage={errorMessage} />
                            )} />

                            <Route exact path="/:bookId" render={({ match }) => (
                                <BookDetail
                                    match={match}
                                    loading={loading}
                                    error={error}
                                    errorMessage={errorMessage}
                                    onChangeBookOfShelf={this.changeBookOfShelf.bind(this)} />
                            )} />

                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default BooksApp