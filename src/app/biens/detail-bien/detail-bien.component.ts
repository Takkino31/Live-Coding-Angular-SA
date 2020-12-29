import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BiensService} from '../biens.service';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.css']
})
export class DetailBienComponent implements OnInit {
  bien: any;
  constructor(
    private route: ActivatedRoute,
    private bienService: BiensService
  ) { }

  ngOnInit(): void {
    const idBien: number = +this.route.snapshot.params.id;
    const bien = this.bienService.getBienById(idBien);
    this.route.params
      .subscribe(
        (params) => {
          const idBien = +params.id;
          const bien = this.bienService.getBienById(idBien);
        }
      );
  }
}
