import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

 httpClient=inject(HttpClient);

  getUniversity(){
    return this.httpClient.get<any[]>('http://universities.hipolabs.com/search?country=United+States');
  }
}
