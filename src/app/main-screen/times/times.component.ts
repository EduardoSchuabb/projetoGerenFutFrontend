import { Component } from '@angular/core';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent {
  
  times: any [];

  constructor(){ 
    this.times = new Array();
    let time = {
      imgSrc: 'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ccc90039.svg',
      nome: 'Palmeiras',
      estado: 'SP',
      quantJogadores: '20',
      sigla: 'PAL'
    }
    let time2 = {
      imgSrc: 'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c95084cb.svg',
      nome: 'Flamengo',
      estado: 'RJ',
      quantJogadores: '20',
      sigla: 'FLA'
    }

    this.times.push(time);
    this.times.push(time2);
  }

  ngOnInit(){ }


    
}
