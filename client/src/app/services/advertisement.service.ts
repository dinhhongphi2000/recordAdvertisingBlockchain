import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advertisement } from '../models/Advertisement'

@Injectable()
export class AdvertisementService {

  urlad : string = "api/advertisements/random";
  constructor(
    public http : HttpClient,
  ) { }
  GetRandom(){
     return this.http.get<Advertisement>(this.urlad);
  }


}
