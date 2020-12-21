import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { NavMenuComponent } from './main-screen/nav-menu/nav-menu.component'
import { TimesComponent } from './main-screen/times/times.component';
import { AnaliseDadosComponent } from './main-screen/analise-dados/analise-dados.component';
import { TabelaCampeonatoComponent } from './main-screen/tabela-campeonato/tabela-campeonato.component';


@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    NavMenuComponent,
    TimesComponent,
    AnaliseDadosComponent,
    TabelaCampeonatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
