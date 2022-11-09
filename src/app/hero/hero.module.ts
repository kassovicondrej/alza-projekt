import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HeroRoutingModule } from './hero-routing.module'
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [CommonModule, FormsModule, HeroRoutingModule, MatButtonModule],
})
export class HeroModule {}
