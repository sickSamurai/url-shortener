import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'

import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { SpinnerComponent } from './components/spinner/spinner.component'
import { UrlShortenerComponent } from './components/url-shortener/url-shortener.component'
import { BitlyInterceptor } from './services/bitly.interceptor'

@NgModule({
  declarations: [AppComponent, NavbarComponent, SpinnerComponent, UrlShortenerComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule, ToastrModule.forRoot()],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BitlyInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
