import { Component } from '@angular/core';
import { OpeningHour, OpeningInformations } from '../../../task09';
import { DateTimeChangedEmit } from './molecules/m-datetime-picker/m-datetime-picker.component';
import { OpeningService } from './services/opening.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'task09-angular';
  public openingInformation: OpeningInformations | null = null;
  public openingHours: OpeningHour[] | null = null;

  constructor(
    private openingService: OpeningService
  ) {
  }

  public datetimePickerChanged($event: DateTimeChangedEmit) {
    this.openingHours = this.openingService.getOpeningHoursForDate($event.value);
    this.openingInformation = this.openingService.getOpeningInformation($event.value);
  }

  public getClosingTime(): string | null {
    const datetime = this.openingInformation?.openUntil;
    if (datetime === undefined) return "";
    return this.formatTime(datetime);
  }

  public getOpeningTime(): string {
    const datetime = this.openingInformation?.nextOpening;
    if (datetime === undefined) return "";
    return this.formatTime(datetime);
  }

  private formatTime(datetime: Date | null): string {
    if (datetime === null) return "";
    const hours = AppComponent.addLeadingZeros(datetime.getHours());
    const minutes = AppComponent.addLeadingZeros(datetime.getMinutes());
    return `${hours}:${minutes}`;
  }

  private static addLeadingZeros(num: number): string {
    return ('0' + num).slice(-2);
  }
}
