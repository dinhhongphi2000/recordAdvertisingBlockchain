import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VideoComponent } from './components/video/video.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SingleComponent } from './components/single/single.component';
import { AdvertisementService } from './services/advertisement.service';


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
  ],
  providers: [AdvertisementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
