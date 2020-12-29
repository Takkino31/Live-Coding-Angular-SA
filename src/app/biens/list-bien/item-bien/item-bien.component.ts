import {Component, Input, OnInit} from '@angular/core';
import {BienModel} from '../../bien.model';

@Component({
  selector: 'app-item-bien',
  templateUrl: './item-bien.component.html',
  styleUrls: ['./item-bien.component.css']
})
export class ItemBienComponent implements OnInit {
  @Input() fisProperty!: BienModel ;
  constructor(
  ) { }
  ngOnInit(): void {
  }
}
