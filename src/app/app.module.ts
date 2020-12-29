import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BiensComponent } from './biens/biens.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { ListBienComponent } from './biens/list-bien/list-bien.component';
import { ItemBienComponent } from './biens/list-bien/item-bien/item-bien.component';
import { JumbotronBienComponent } from './biens/jumbotron-bien/jumbotron-bien.component';
import { SeparatorPipe } from './pipes/separator.pipe';
import { TimeleftPipe } from './pipes/timeleft.pipe';
import { SummarizePipe } from './pipes/summarize.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReservationBienComponent } from './biens/reservation-bien/reservation-bien.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BiensComponent,
    AddBienComponent,
    DetailBienComponent,
    ListBienComponent,
    ItemBienComponent,
    JumbotronBienComponent,
    SeparatorPipe,
    TimeleftPipe,
    SummarizePipe,
    FilterPipe,
    ReservationBienComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
