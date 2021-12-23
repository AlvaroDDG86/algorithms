const pageCount = require('./drawingBook')
/**
 * A teacher asks the class to open their books to a page number.
 * A student can either start turning pages from the front of the book or from the back of the book.
 */
describe('pageCount', () => {
    it('Should try', () => {
        expect(pageCount(6, 2)).toBe(1)
    })
});