import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private abc:HttpClient) {}
  getData(){
    return this.abc.get(`https://api.sampleapis.com/countries/countries`);
    
  }
}
