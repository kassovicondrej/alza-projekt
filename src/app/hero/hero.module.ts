import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HeroRoutingModule } from './hero-routing.module'
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component'

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [CommonModule, FormsModule, HeroRoutingModule],
})
export class HeroModule {}
