import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-m-datetime-picker',
  templateUrl: './m-datetime-picker.component.html',
  styleUrls: ['./m-datetime-picker.component.scss']
})
export class MDatetimePickerComponent implements OnInit {
  public selectedDateTime: Date;

  @Output() changed = new EventEmitter<DateTimeChangedEmit>();

  constructor() {
    this.selectedDateTime = new Date(Date.now());
    this.emitChanged();
  }

  ngOnInit(): void {
  }


  public onTimepickerClosed(): void {
    console.log(this.selectedDateTime);
    this.emitChanged();
  }

  public onNowClicked(): void {
    // fix: `Date.prototype.setTime()` was not triggering the angular change detection
    this.selectedDateTime = new Date(Date.now());
    this.emitChanged();
  }

  private emitChanged(): void {
    this.changed.emit({ value: this.selectedDateTime });
  }

}

export type DateTimeChangedEmit = {
  value: Date;
}
