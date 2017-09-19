import React from 'react'
import PropTypes from 'prop-types'
import { Row, Input, Icon } from 'react-materialize'

const SearchBar = (props) => {
    const { onSearch } = props

    return (
        <Row>
            <Input s={6} placeholder="Busque por livros" onChange={onSearch}>
                <Icon>search</Icon>
            </Input>
        </Row>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default SearchBar