import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroesComponent } from './heroes/heroes.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent, DashboardComponent, HeroesComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
