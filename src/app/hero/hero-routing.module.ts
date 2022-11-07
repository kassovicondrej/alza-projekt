import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component'
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListHeroesComponent },
      { path: ':id', component: HeroDetailComponent },
    ],
  },

  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', redirectTo: 'list', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroRoutingModule {}
