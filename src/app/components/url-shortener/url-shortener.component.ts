import { Component } from '@angular/core'
import { ToastrService } from 'ngx-toastr'

import { UrlShortenerService } from '../../services/url-shortener.service'

@Component({
  selector: 'url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent {
  url: string
  shortURL: string
  isLoading: boolean

  get wasURLShorted() {
    return this.shortURL != ''
  }

  processURL() {
    try {
      this.isLoading = true
      this.shortener.requestShortURL(this.url).subscribe(response => {
        this.shortURL = response.link
        this.isLoading = false
      })
    } catch (error) {
      this.isLoading = false
      if (error instanceof Error)
        this.toastr.error(error.message, 'Atención!', {
          positionClass: 'toast-bottom-center'
        })
    }
  }

  constructor(private shortener: UrlShortenerService, private toastr: ToastrService) {
    this.url = ''
    this.shortURL = ''
    this.isLoading = false
  }
}
