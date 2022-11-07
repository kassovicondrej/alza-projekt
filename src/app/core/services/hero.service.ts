import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable, of } from 'rxjs'
import { Hero } from '../interfaces/hero'
import { HEROES } from '../mock/mock-heroes'

@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroes$: Observable<Hero[]>
  private _heroes$ = new BehaviorSubject<Array<Hero>>([])

  constructor() {
    this.heroes$ = of(HEROES)
    this._heroes$.next(HEROES)
  }

  getHeroes(): Observable<Array<Hero>> {
    return this._heroes$.asObservable()
  }

  get user(): Hero {
    return this._heroes$.getValue()[0]
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!
    return of(hero)
  }

  addHero(newHeroName: string): void {
    const currentHeroes = this._heroes$.getValue()
    currentHeroes.push(<Hero>{
      id: Math.max(...currentHeroes.map((o) => o.id)) + 1,
      name: newHeroName,
    })
    this._heroes$.next(currentHeroes)
  }

  deleteHero(heroId: number): void {
    const currentHeroes = this._heroes$.getValue()
    const itemsWithoutDeleted = currentHeroes.filter(({ id }) => id !== heroId)
    this._heroes$.next(itemsWithoutDeleted)
  }
}
