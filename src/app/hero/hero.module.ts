import { NgModule } from '@angular/core'
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HeroRoutingModule } from './hero-routing.module'
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component'

@NgModule({
  declarations: [ListHeroesComponent, HeroDetailComponent],
  imports: [CommonModule, FormsModule, HeroRoutingModule],
})
export class HeroModule {}
