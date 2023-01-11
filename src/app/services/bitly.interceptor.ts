import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable()
export class BitlyInterceptor implements HttpInterceptor {
  token = '1bbd3bd20a9e5869fb615a4ee7989dcbbad26770'
  headers = { 'Authorization': `Bearer ${this.token}` }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({ setHeaders: this.headers })
    return next.handle(request)
  }
}
