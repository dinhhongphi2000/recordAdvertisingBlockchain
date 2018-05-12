import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Advertisement } from '../models/Advertisement';



@Injectable()
export class AdvertisementService {
  AdvertisementUrl : string = "/api/advertisements/random";
  constructor(private http : HttpClient) { }


  getRandom(){
    return this.http.get<Advertisement>(this.AdvertisementUrl);
  }

}
