import { PascalTriangle } from './task07';

describe('Test pascal', () => {
    it('test row triangle', () => {
        const pascalTriangle = new PascalTriangle();
        const result = pascalTriangle.getTriangle(5);
        const expected = [
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1]
        ];
        expect(result).toEqual(expected);
    });
});
