import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor( private http: HttpClient) { }

  getNoticias(): Observable<any>{

    const URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fe00-elmundo.uecdn.es%2Felmundo%2Frss%2Fportada.xml&api_key=aungsgq46cgrl2ehkh3bzktitfko9ppermhondhc';

    return this.http.get(URL);
    
  }
}
