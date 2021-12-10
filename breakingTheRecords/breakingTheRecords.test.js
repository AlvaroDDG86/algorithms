const breakingTheRecords = require('./breakingTheRecords.js')
/**
 * Maria plays college basketball and wants to go pro. 
 * Each season she maintains a record of her play. 
 * She tabulates the number of times she breaks her season record 
 * for most points and least points in a game. Points scored in the 
 * first game establish her record for the season, and she begins counting from there.
 * 
 * Input: Array of int
 * Return: string
 */
describe('breakingTheRecords', () => {
    it('should return 2 length array ', () => {
        expect(breakingTheRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).toHaveLength(2)
    });
    it('should return best and worst scores', () => {
        expect(breakingTheRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).toEqual([2, 4])
    });
});