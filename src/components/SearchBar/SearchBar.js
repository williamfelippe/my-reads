import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Input, Icon } from 'react-materialize'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchText: ''
        }
    }

    /**
     * Método executado sempre que ocorre uma alteração
     * no campo de busca.
     * Quando uma alteração ocorre, este método irá pegar o valor
     * contido no evento e o colocará no estado do componente
     * @param {any} event 
     * @memberof SearchBar
     */
    onChange(event) {
        const { onSearch } = this.props

        const searchText = event.target.value

        this.setState({ searchText })
        onSearch(searchText)
    }

    render() {
        const { searchText } = this.state

        return (
            <Row>
                <Input
                    s={6}
                    placeholder="Busque por livros"
                    value={searchText}
                    onChange={this.onChange.bind(this)}>
                    <Icon>search</Icon>
                </Input>
            </Row>
        )
    }
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default SearchBar