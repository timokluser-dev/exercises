import { Component, Input, OnInit } from '@angular/core';
import { OpeningHour } from '../../../../../task09/dist';

@Component({
  selector: 'app-o-opening-hours',
  templateUrl: './o-opening-hours.component.html',
  styleUrls: ['./o-opening-hours.component.scss']
})
export class OOpeningHoursComponent implements OnInit {

  @Input() public openingHours: OpeningHour[] | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
