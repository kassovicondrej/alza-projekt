import { Component, OnInit } from '@angular/core'
import { Hero } from '../core/interfaces/hero'
import { HeroService } from '../core/services/hero.service'
import { MatDialog } from '@angular/material/dialog'
import { CreateUserModalComponent } from '../core/components/create-user-modal/create-user-modal.component'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ConfirmDialogComponent } from '../core/components/confirm-dialog/confirm-dialog.component'
import { ConfirmDialog } from '../core/interfaces/confirm-dialog'

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[] = []

  constructor(
    private heroService: HeroService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserModalComponent, {
      width: '250px',
    })

    dialogRef.afterClosed().subscribe((newName) => {
      if (newName) {
        this.heroService.addHero(newName)
        this.snackBar.open('Hero created!', 'Undo', { duration: 3000 })
      }
    })
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => (this.heroes = heroes))
  }

  deleteHero(event: Event, hero: Hero): void {
    const message = `Are you sure you want delete hero?`

    const dialogData = new ConfirmDialog('Delete hero', message)

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      data: dialogData,
    })

    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult) {
        this.heroService.deleteHero(hero.id)
        this.snackBar.open('Hero with id ' + hero.id + ' was deleted', '', { duration: 3000 })
      }
    })
  }
}
