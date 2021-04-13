import { Component, OnInit } from '@angular/core';
import { TimesDTO, RespostaTimesDTO } from 'src/app/models/times-dto';

import { TimesService } from './times.service';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit {
  
  times: TimesDTO[];

  constructor(private timesService: TimesService){ 

  }

  ngOnInit(){ 

    this.onBuscarTimes();

  }

  onBuscarTimes(){

    this.timesService.buscarTimes()
    .subscribe( times => {
      this.times = times.timesDTO;
    });

  }



}
