const print = require('./staircase')
describe('Print suite', () => {
    it('draw 3 of 6 ', () => {
        expect(print(3, 6)).toEqual('   ###')
    });
    it('draw 2 of 7 ', () => {
        expect(print(2, 7)).toEqual('     ##')
    });
    it('draw 4 of 4', () => {
        expect(print(4, 4)).toEqual('####')
    });
});