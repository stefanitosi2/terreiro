import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TerreiroApiModel } from './terreiro-api-model';

@Injectable({
  providedIn: 'root'
})
export class TerreiroApiService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'terreiro_n.jpg';
​
   public get(): Observable<TerreiroApiModel[]> {
    return this.http.get<TerreiroApiModel[]>(this.apiUrl);
  }
}
