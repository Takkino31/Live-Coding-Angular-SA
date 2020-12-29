import {Component, Input, OnInit} from '@angular/core';
import {BienModel} from '../bien.model';
import {BiensService} from '../biens.service';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {
  @Input() search = '';
  biens: BienModel[] = [];
  constructor(
    private bienService: BiensService
  ) { }

  ngOnInit(): void {
    this.biens = this.bienService.getAllbiens();
  }

}
