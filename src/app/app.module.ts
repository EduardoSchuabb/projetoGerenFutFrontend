import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { NavMenuComponent } from './main-screen/nav-menu/nav-menu.component'
import { TimesComponent } from './main-screen/times/times.component';
import { AnaliseDadosComponent } from './main-screen/analise-dados/analise-dados.component';
import { TabelaCampeonatoComponent } from './main-screen/tabela-campeonato/tabela-campeonato.component';
import { TimesService } from './main-screen/times/times.service';


const appRoutes: Routes = [
  {path: 'times', component: TimesComponent},
  {path: 'tabela', component: TabelaCampeonatoComponent}

];


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
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TimesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
