import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Input } from 'react-materialize'

class SearchBar extends Component {
    render() {
        return (
            <Row>
                <Input s={6} placeholder="Busque por livros">
                    <Icon>search</Icon>
                </Input>
            </Row>
        )
    }
}

SearchBar.defaultProps = {
    searchText: ''
}

SearchBar.propTypes = {
    searchBook: PropTypes.func.isRequired,
    searchText: PropTypes.string
}

export default SearchBar