import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  httpClient=inject(HttpClient);

 getCountries() {
  return this.httpClient.get<{ countries: any[] }>(
    '/assets/countries.json'
  );
  }
}
