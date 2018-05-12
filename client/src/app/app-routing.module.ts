import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component'
import { SingleComponent } from './components/single/single.component'

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'single/:id', component: SingleComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
