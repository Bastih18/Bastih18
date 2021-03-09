
/**
 * creates the default body for error response messages
 * @param {Object} message
 * @param {number} status
 */
export const body = (message: Object, status: number) => {
    return {
        response: message,
        code: status
    }
}