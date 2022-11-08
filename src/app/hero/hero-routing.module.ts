import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component'

const routes: Routes = [
  {
    path: '',
    children: [{ path: ':id', component: HeroDetailComponent }],
  },

  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', redirectTo: 'list', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroRoutingModule {}
