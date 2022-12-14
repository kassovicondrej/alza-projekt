import { Component, OnInit } from '@angular/core'
import { Hero } from '../core/interfaces/hero'
import { HeroService } from '../core/services/hero.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes.slice(0, 4)))
  }
}
