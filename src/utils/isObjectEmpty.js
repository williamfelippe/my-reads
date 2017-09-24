
/**
 * Método que verifica se um objeto está vazio
 * @param {object} obj 
 */
const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object
}

export default isObjectEmpty