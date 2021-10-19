import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OpeningHour, OpeningHoursConfig, OpeningInformations, StoreOpeningHours } from "./../../../../task09/dist";


@Injectable({
  providedIn: 'root'
})
export class OpeningService {
  private storeOpening: StoreOpeningHours;

  constructor(
    private httpClient: HttpClient
  ) {
    this.storeOpening = new StoreOpeningHours(null, null);
    
    this.httpClient.get('assets/data.json').subscribe(data => {
      this.storeOpening = new StoreOpeningHours(null, data as OpeningHoursConfig);
    });
  }

  public isOpen(datetime: Date) {
    return this.storeOpening.isOpen(datetime);
  }

  public getOpeningInformation(datetime: Date): OpeningInformations {
    return this.storeOpening.getInformation(datetime);
  }

  public getOpeningHoursForDate(date: Date): OpeningHour[] {
    return this.storeOpening.getOpeningHoursForDate(date);
  }
}
