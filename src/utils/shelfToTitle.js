import { READ, WANT_TO_READ, CURRENTLY_READING, NONE } from '../constants/shelfs'

/**
 * Método que recebe uma constante informando uma prateleira
 * e retorna seu nome formatado corretamente
 * @param {string} shelf 
 */
const shelfToTitle = (shelf) => {
    switch (shelf) {
        case READ:
            return 'Read'

        case WANT_TO_READ:
            return 'Want to read'

        case CURRENTLY_READING:
            return 'Currently reading'

        case NONE:
            return 'None'

        default:
            return ''
    }
}

export default shelfToTitle