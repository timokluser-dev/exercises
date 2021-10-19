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
        return this.isInRangeOfOpening(date, this.getOpeningHoursForDate(date));
    }

    /**
     * info: only date is used - time is being ignored
     * @param date
     * @returns list of opening rules for the day - or special rules
     */
    getOpeningHoursForDate(date: Date): OpeningHour[] {
        let openingHours: OpeningHour[];

        const currentSpecialDay = this.data.special.find(element => element.date === this.formatDate(date));
        if (currentSpecialDay !== undefined) {
            openingHours = currentSpecialDay.openingHours;
            return openingHours;
        }

        const currentWeekDay = this.data.weekly.find(element => element.dayNumber === date.getDay());
        if (currentWeekDay === undefined) return [];

        openingHours = currentWeekDay.openingHours;
        return openingHours;
    }

    /**
     * 
     * @param date the date to check when store opens next
     * @returns an `OpeningInformations` object containing the next opening date if closed at moment
     */
    getInformation(date: Date): OpeningInformations {
        const isOpen = this.isOpen(date);
        let openingInformations = new OpeningInformations(isOpen);

        if (!isOpen) {
            openingInformations.nextOpening = this.findNextOpening(date);
        }

        return openingInformations;
    }

    /**
     * 
     * @param datetime date to be evaluated
     * @param openingHours the opening hours for that day
     * @returns if the date is in range(s)
     */
    private isInRangeOfOpening(datetime: Date, openingHours: OpeningHour[]): boolean {
        for (const element of openingHours) {
            let openFrom = this.getDateTime(datetime, element.open);
            let closedFrom = this.getDateTime(datetime, element.close);

            if (datetime >= openFrom && datetime <= closedFrom) return true;
        }

        return false;
    }

    /**
     * 
     * @param datetime date from which has to be checked
     * @returns the next opening hour
     */
    private findNextOpening(datetime: Date): Date {
        let nextOpening: Date | null = null;
        let currentCheckDate = datetime;

        // hours for today
        const todayOpenings = this.getOpeningHoursForDate(datetime);
        if (todayOpenings !== []) {
            for (const opening of todayOpenings) {
                if (!this.isInRangeOfOpening(datetime, [opening]) && datetime < this.getDateTime(datetime, opening.close)) return this.getDateTime(datetime, opening.open);
            }
        }

        // hours for next days
        while (nextOpening == null) {
            currentCheckDate.setDate(currentCheckDate.getDate() + 1);
            let openingHoursCurrentDate = this.getOpeningHoursForDate(datetime);

            if (openingHoursCurrentDate.length > 0) {
                nextOpening = this.getDateTime(currentCheckDate, this.getOpeningHoursForDate(currentCheckDate)[0].open);
            }
        }

        return nextOpening;
    }

    /**
     * 
     * @param date date for the date part
     * @param hourMinute hours and minutes in string format: `hh:mm`
     * @returns the date combined with the hours & mintes
     */
    private getDateTime(date: Date, hourMinute: string) {
        const hoursAndMinutes = hourMinute.split(":");
        let dateTime = new Date(date.getTime());
        dateTime.setHours(Number(hoursAndMinutes[0]), Number(hoursAndMinutes[1]));

        return dateTime;
    }

    /**
     * format date using format: `YYYY-MM-DD`.
     * if time is present, will get overwritten
     * @param date date to be formatted
     * @returns formatted date
     */
    private formatDate(date: Date): string {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
}

/**
 * data class for opening informations
 */
export class OpeningInformations {
    public isOpen: boolean;
    public nextOpening: Date | null;

    /**
     * 
     * @param isOpen if the store is open at that time
     * @param nextOpening if not open - when next opening
     */
    constructor(isOpen: boolean, nextOpening: Date | null = null) {
        this.isOpen = isOpen;
        this.nextOpening = nextOpening;
    }
}
