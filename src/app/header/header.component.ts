import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  @Output() sendDataToApp = new EventEmitter();
  public searchEverywhere = '';
  constructor() { }

  ngOnInit(): void {
  }

  sendData(): void{
    this.sendDataToApp.emit(this.searchEverywhere);
  }
}
