import { OpeningHour, OpeningHoursConfig } from "./OpeningHoursConfig";

export class StoreOpeningHours {
    private data: OpeningHoursConfig;

    /**
     * 
     * @param dataFilePath the relative path to the data.json file
     */
    constructor(dataFilePath: string) {
        this.data = require(dataFilePath);
    }

    /**
     * 
     * @param date the date to check if is open
     * @returns if store is open
     */
    isOpen(date: Date): boolean {
        const currentWeeklyDay = this.data.weekly.find(element => element.dayNumber === date.getDay());
        if (currentWeeklyDay == undefined) return false;

        let openingHours = currentWeeklyDay.openingHours;
        if (this.isInRangeOfOpeningHours(date, openingHours)) return true;

        // special opening
        const currentSpecialDay = this.data.special.find(element => element.date === this.formatDate(date));
        if (currentSpecialDay == undefined) return false;

        openingHours = currentSpecialDay.openingHours;
        return this.isInRangeOfOpeningHours(date, openingHours)
    }

    /**
     * 
     * @param date date to be evaluated
     * @param openingHours the opening hours for that day
     * @returns if the date is in range(s)
     */
    private isInRangeOfOpeningHours(date: Date, openingHours: OpeningHour[]): boolean {
        for (const element of openingHours) {
            const openTime = element.open.split(":");
            const closeTime = element.close.split(":");

            let openFrom = new Date(date.getTime());
            openFrom.setHours(Number(openTime[0]), Number(openTime[1]));
            let closedFrom = new Date(date.getTime());
            closedFrom.setHours(Number(closeTime[0]), Number(closeTime[1]));

            if (date >= openFrom && date <= closedFrom) return true;
        }

        return false;
    }

    /**
     * format date using format: `YYYY-MM-DD`
     * @param date date to be formatted
     * @returns formatted date
     */
    private formatDate(date: Date): string {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
}
