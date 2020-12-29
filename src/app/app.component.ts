import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SA';
  nom = 'Yaya';
  ok = false;
  searchWords = '';
  searchEverywhere: string | undefined;
  sendDataToList: any;

  onClick(): void{
    this.ok = !this.ok;
  }

  desactive(): string{
    if (this.ok){
      return 'bouton désactivé';
    }
    return 'bouton activé';
  }

  appGetSearchFromHeader(event: string): void{
    this.searchWords = event;
  }
}
