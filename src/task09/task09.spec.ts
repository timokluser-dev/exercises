import { OpeningInformations, StoreOpeningHours, DateTimeHelpers } from './task09';

describe('Test opening hours', () => {
    it('test store open morning', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.isOpen(DateTimeHelpers.getDateTime(2021, 10, 18, 8, 30));
        expect(result).toEqual(true);
    });

    it('test store open afternoon', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.isOpen(DateTimeHelpers.getDateTime(2021, 10, 18, 18, 0));
        expect(result).toEqual(true);
    });

    it('test store closed weekend', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.isOpen(DateTimeHelpers.getDateTime(2021, 10, 17, 10, 30));
        expect(result).toEqual(false);
    });

    it('test store closed now', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.isOpen(DateTimeHelpers.getDateTime(2021, 10, 19, 9, 1));
        expect(result).toEqual(false);
    });

    it('test store open special hours', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.isOpen(DateTimeHelpers.getDateTime(2019, 12, 24, 10, 30));
        expect(result).toEqual(true);
    });

    it('test store closed special free-day', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.isOpen(DateTimeHelpers.getDateTime(2019, 12, 25, 10, 30));
        expect(result).toEqual(false);
    });

    it('test store informations - open', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.getInformation(DateTimeHelpers.getDateTime(2021, 10, 18, 18, 0));
        const expected = new OpeningInformations(true, DateTimeHelpers.getDateTime(2021, 10, 19, 8, 0), DateTimeHelpers.getDateTime(2021, 10, 18, 18, 30));
        expect(result).toEqual(expected);
    });

    it('test store informations - closed at weekend', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.getInformation(DateTimeHelpers.getDateTime(2021, 10, 17, 10, 30)); // is sunday
        const expected = new OpeningInformations(false, DateTimeHelpers.getDateTime(2021, 10, 18, 8, 0), null);
        expect(result).toEqual(expected);
    });

    it('test store informations - closed before special day', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.getInformation(DateTimeHelpers.getDateTime(2019, 12, 24, 20, 30)); // 2019-12-25 is special day & closed
        const expected = new OpeningInformations(false, DateTimeHelpers.getDateTime(2019, 12, 26, 8, 0), null);
        expect(result).toEqual(expected);
    });

    it('test store informations - closed at special day', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.getInformation(DateTimeHelpers.getDateTime(2019, 12, 25, 8, 30));
        const expected = new OpeningInformations(false, DateTimeHelpers.getDateTime(2019, 12, 26, 8, 0), null);
        expect(result).toEqual(expected);
    });

    it('test store informations - closed at the moment', () => {
        const openingHours = new StoreOpeningHours("./data.json");
        const result = openingHours.getInformation(DateTimeHelpers.getDateTime(2021, 10, 19, 10, 30));
        const expected = new OpeningInformations(false, DateTimeHelpers.getDateTime(2021, 10, 19, 13, 30));
        expect(result).toEqual(expected);
    });
});

/**
 * date considerations:
 * ---
 * day:     0 = sunday
 * month:   0 = january
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

describe('Test DateTime helpers', () => {
    it('test date', () => {
        const result = DateTimeHelpers.getDate(2021, 1, 1);
        expect(result).toEqual(new Date(2021, 0, 1));
    });

    it('test datetime', () => {
        const result = DateTimeHelpers.getDateTime(2021, 1, 1, 12, 0);
        expect(result).toEqual(new Date(2021, 0, 1, 12, 0));
    });
});
