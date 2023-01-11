import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { ShortURLResponse } from '../models/ShortURLResponse'

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {
  baseURL = 'https://api-ssl.bitly.com/v4/shorten'

  checkURL(url: string) {
    const givenURL = new URL(url)
    return givenURL != null
  }

  requestShortURL(longURL: string) {
    if (!this.checkURL(longURL)) throw new Error('Invalid URL')
    return this.httpClient.post<ShortURLResponse>(this.baseURL, { long_url: longURL })
  }

  constructor(private httpClient: HttpClient) {}
}
