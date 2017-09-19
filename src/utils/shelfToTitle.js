import { READ, WANT_TO_READ, CURRENTLY_READING } from '../constants/shelfs'

/**
 * 
 */
const shelfToTitle = (shelf) => {
    switch (shelf) {
        case READ:
            return 'Lido'

        case WANT_TO_READ:
            return 'Quero ler'

        case CURRENTLY_READING:
            return 'Lendo'

        default:
            return ''
    }
}

export default shelfToTitle