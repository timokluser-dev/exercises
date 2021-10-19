export interface OpeningHour {
    close: string;
    open: string;
}

export interface Special {
    date: string;
    openingHours: OpeningHour[];
}

export interface Weekly {
    dayNumber: number;
    openingHours: OpeningHour[];
}

export interface OpeningHoursConfig {
    special: Special[];
    weekly: Weekly[];
}
