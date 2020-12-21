import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela-campeonato',
  templateUrl: './tabela-campeonato.component.html',
  styleUrls: ['./tabela-campeonato.component.css']
})
export class TabelaCampeonatoComponent {
  
  tabela: any [];

  constructor(){ 
    
    this.tabela = new Array();
    let linhaTabelaTeste = {
      posicao : 1,
      nome: 'Palmeiras',
      pontos: '12',
      quantJogos: 5,
      quantVitorias: 4,
      quantEmpates: 0,
      quantDerrotas: 1,
      golsPro: 5,
      golsContra: 1,
      aproveitamento: 90
    };
    
    let linhaTabelaTeste2 = {
      posicao : 2,
      nome: 'Flamengo',
      pontos: '9',
      quantJogos: 5,
      quantVitorias: 3,
      quantEmpates: 0,
      quantDerrotas: 2,
      golsPro: 5,
      golsContra: 3,
      aproveitamento: 80
    };

    this.tabela.push(linhaTabelaTeste);
    this.tabela.push(linhaTabelaTeste2);
  }

  ngOnInit(){ }

    
}
