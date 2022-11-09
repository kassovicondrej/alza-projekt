import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HeroDetailComponent } from './hero-detail.component'
import { HeroService } from '../../../core/services/hero.service'
import { ActivatedRoute } from '@angular/router'
import { of } from 'rxjs'
import { By } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent
  let fixture: ComponentFixture<HeroDetailComponent>
  beforeEach(() => {
    const activatedRouteStub = () => ({
      snapshot: { paramMap: { get: () => ({}) } },
    })
    const locationStub = () => ({ back: () => ({}) })
    const heroServiceStub = () => ({
      getHero: () => ({
        subscribe: (f: (arg0: {}) => any) => f({}),
      }),
    })
    TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Location, useFactory: locationStub },
        { provide: HeroService, useFactory: heroServiceStub },
      ],
      imports: [FormsModule],
    })
    fixture = TestBed.createComponent(HeroDetailComponent)
    component = fixture.componentInstance
  })
  it('can load instance', () => {
    expect(component).toBeTruthy()
  })
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getHero').and.callThrough()
      component.ngOnInit()
      expect(component.getHero).toHaveBeenCalled()
    })
  })
  describe('getHero', () => {
    it('makes expected calls', () => {
      const heroServiceStub: HeroService = fixture.debugElement.injector.get(HeroService)
      spyOn(heroServiceStub, 'getHero').and.callThrough()
      component.getHero()
      expect(heroServiceStub.getHero).toHaveBeenCalled()
    })
  })
  describe('There is no hero', () => {
    it('Display anything', () => {
      const heroServiceStub = TestBed.get(HeroService)
      spyOn(heroServiceStub, 'getHero').and.returnValue(of(undefined))
      fixture.detectChanges()
      const anyDiv = fixture.debugElement.query(By.css('div'))
      expect(anyDiv).toBeFalsy()
    })
  })
  describe('Hero exist', () => {
    beforeEach(async () => {
      const heroServiceStub = TestBed.inject(HeroService)
      spyOn(heroServiceStub, 'getHero').and.returnValue(
        of({
          id: 13,
          name: 'Bombasto',
        }),
      )
      fixture.detectChanges()

      await fixture.detectChanges()
    })

    it('Empty Hero', () => {
      const anyDiv = fixture.debugElement.query(By.css('div'))
      expect(anyDiv).toBeTruthy()
    })

    it('should check input label name', () => {
      let queryByLabel = fixture.debugElement.query(By.css('label[for=id]'))
      expect(queryByLabel).toBeTruthy()
      expect(queryByLabel.nativeElement).toBeTruthy()
      expect(queryByLabel.nativeElement.outerText).toContain('ID')
    })

    it('Set Input id', async () => {
      const username = fixture.debugElement.query(By.css('#id'))
      username.nativeElement.value = 13
      username.nativeElement.dispatchEvent(new Event('input'))
      fixture.detectChanges()
      expect(username.nativeElement.value).toContain(13)
    })

    it('Set Input name', async () => {
      const username = fixture.debugElement.query(By.css('#name'))
      username.nativeElement.value = 'Bombasto'
      username.nativeElement.dispatchEvent(new Event('input'))
      fixture.detectChanges()
      expect(username.nativeElement.value).toContain('Bombasto')
    })

    it('Initialized with a hero and show context', () => {
      const anyDiv = fixture.debugElement.query(By.css('div'))
      expect(anyDiv).toBeTruthy()
    })

    it('Contains hero id', () => {
      const input: HTMLInputElement = fixture.debugElement.query(By.css('#id')).nativeElement
      expect(input.value).toContain('13')
    })
  })
})
