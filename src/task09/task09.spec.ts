import { OpeningInformations, StoreOpeningHours } from './task09';

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

    it('test store closed now', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.isOpen(new Date(2021, 9, 19, 9, 1));
        expect(result).toEqual(false);
    });

    it('test store open special hours', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.isOpen(new Date(2019, 11, 24, 10, 30));
        expect(result).toEqual(true);
    });

    it('test store closed special free-day', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.isOpen(new Date(2019, 11, 25, 10, 30));
        expect(result).toEqual(false);
    });

    it('test store informations - open', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.getInformation(new Date(2021, 9, 18, 18, 0));
        const expected = new OpeningInformations(true, new Date(2021, 9, 19, 8, 0), new Date(2021, 9, 18, 18, 30));
        expect(result).toEqual(expected);
    });

    it('test store informations - closed at weekend', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.getInformation(new Date(2021, 9, 17, 10, 30)); // is sunday
        const expected = new OpeningInformations(false, new Date(2021, 9, 18, 8, 0), null);
        expect(result).toEqual(expected);
    });

    it('test store informations - closed before special day', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.getInformation(new Date(2019, 11, 24, 20, 30)); // 2019-12-25 is special day & closed
        const expected = new OpeningInformations(false, new Date(2019, 11, 26, 8, 0), null);
        expect(result).toEqual(expected);
    });

    it('test store informations - closed at special day', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.getInformation(new Date(2019, 11, 25, 8, 30));
        const expected = new OpeningInformations(false, new Date(2019, 11, 26, 8, 0), null);
        expect(result).toEqual(expected);
    });

    it('test store informations - closed at the moment', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.getInformation(new Date(2021, 9, 19, 10, 30));
        const expected = new OpeningInformations(false, new Date(2021, 9, 19, 13, 30));
        expect(result).toEqual(expected);
    });
});
