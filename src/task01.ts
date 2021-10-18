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
        } else if (year % 100 != 0) {
            return true;
        } else if (year % 400 != 0) {
            return false;
        } else {
            return true;
        }
    }
}
