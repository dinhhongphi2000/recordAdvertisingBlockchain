import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Log } from '../models/log'

@Injectable()
export class LoggingService {

  urllog : string = "api/loggings";
  constructor(
    public http : HttpClient,
  ) { }
  log(log : Log){

     return this.http.post<Log>(this.urllog,log);
  }


}
