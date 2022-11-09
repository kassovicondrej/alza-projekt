import { Component, OnInit } from '@angular/core'
import { Hero } from '../core/interfaces/hero'
import { HeroService } from '../core/services/hero.service'

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[] = []
  heroName: string = ''

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => (this.heroes = heroes))
  }

  deleteHero(event: Event, hero: Hero): void {
    this.heroService.deleteHero(hero.id)
  }

  addHero() {
    this.heroService.addHero(this.heroName)
    this.heroName = ''
  }
}
