const {Bonds} = require('../Bonds');
const bonds = new Bonds;
const testArgs = {
    date: '20180124',
    isins: ['XS0971721963', 'UU000A0JU4L3', 'RU000A0JU4L3']
};


describe('cache bonds', () => {
    test('returns array', () => {
        expect(bonds.getBondsData() instanceof Array).toBe(true);
    });

    test('set/get cache working', () => {
        bonds.setCache(testArgs, 'it`s cache');
        expect(bonds.getCache(testArgs)).toBe('it`s cache');
    });
})