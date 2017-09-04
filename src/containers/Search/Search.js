import React, { Component } from 'react'
import { search } from '../../api/BooksAPI'
//import { Book } from '../../components'

const MAX_RESULTS = 10

class Search extends Component {

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
        return (
            <div className="container">

            </div>
        )
    }
}

export default Search