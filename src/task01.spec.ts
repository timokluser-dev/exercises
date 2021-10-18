import { Task01 } from './task01';

describe('Test leap years', () => {
    it('test year 1600', () => {
        const task01 = new Task01()
        const result = task01.isLeapYear(1600);
        expect(result).toEqual(true);
    });

    it('test year 2021', () => {
        const task01 = new Task01()
        const result = task01.isLeapYear(2021);
        expect(result).toEqual(false);
    });

    it('test year 2100', () => {
        const task01 = new Task01()
        const result = task01.isLeapYear(2021);
        expect(result).toEqual(false);
    });
});
