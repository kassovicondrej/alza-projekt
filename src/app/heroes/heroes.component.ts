import { Component, OnInit } from '@angular/core'
import { Hero } from '../core/interfaces/hero'
import { HeroService } from '../core/services/hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []
  heroName: string = ''

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => (this.heroes = heroes))
  }

  deleteHero(hero: Hero): void {
    this.heroService.deleteHero(hero.id)
  }

  addHero() {
    this.heroService.addHero(this.heroName)
  }
}