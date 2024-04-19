import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  url = `http://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&utf8=1&srsearch=`;

  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http.get(this.url, {
      params: {
        action: 'query',
        list: 'search',
        format: 'json',
        origin: '*',
        utf8: '1',
        srsearch: term,
      },
    });
  }
}
