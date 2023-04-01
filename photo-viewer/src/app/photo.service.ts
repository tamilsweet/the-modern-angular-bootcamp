import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';


const API_KEY = 'ADD API KEY HERE';
const API_URL = 'https://api.unsplash.com/photos/random'

export interface PhotoResponse {
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<PhotoResponse>(API_URL, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`
      }
    }).pipe(
      delay(1000),
      map(response => response?.urls?.regular)
    );
  }

}
