import { StoreOpeningHours } from './task09';

/**
 * date considerations:
 * ---
 * day:     0 = sunday
 * month:   0 = january
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

describe('Test opening hours', () => {
    it('test store open morning', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.isOpen(new Date(2021, 9, 18, 8, 30));
        expect(result).toEqual(true);
    });

    it('test store open afternoon', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.isOpen(new Date(2021, 9, 18, 18, 0));
        expect(result).toEqual(true);
    });

    it('test store closed weekend', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.isOpen(new Date(2021, 9, 17, 10, 30));
        expect(result).toEqual(false);
    });

    it('test store open special hours', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.isOpen(new Date(2019, 11, 24, 10, 30));
        expect(result).toEqual(true);
    });

    it('test store open special free-day', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.isOpen(new Date(2019, 11, 25, 10, 30));
        expect(result).toEqual(false);
    });
});
