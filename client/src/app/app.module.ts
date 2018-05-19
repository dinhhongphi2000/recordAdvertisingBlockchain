import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient,HTTP_INTERCEPTORS  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VideoComponent } from './components/video/video.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SingleComponent } from './components/single/single.component';
import { AdvertisementService } from './services/advertisement.service';
import { MoviesService } from './services/movies.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    MainPageComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OwlModule
  ],
  providers: [
    AdvertisementService,
    MoviesService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
