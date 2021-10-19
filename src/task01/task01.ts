export class Task01 {
    /**
     * 
     * @see https://en.wikipedia.org/wiki/Leap_year
     * @param year the year to eval
     * @returns if leap year
     */
    isLeapYear(year: number): boolean {
        if (year % 4 != 0) {
            return false;
        }
        if (year % 100 != 0) {
            return true;
        }
        return (year % 400 == 0);
    }
}
