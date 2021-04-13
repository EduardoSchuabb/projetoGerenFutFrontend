import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { RespostaTimesDTO } from "../../models/times-dto"



//@Injectable()
@Injectable({
    providedIn: 'root', 
  })
export class TimesService {

    // no futuro, mudar essa baseURL para outro arquivo.
    private readonly baseURL: string = 'http://localhost:8080/gerenFut/api';
    private serviceURL: string = '/times';
    times = [];


    constructor(private http: HttpClient){

    }

    buscarTimes(){
        return this.http.get<RespostaTimesDTO>(this.baseURL + this.serviceURL + '/obtertimes');
    }
}