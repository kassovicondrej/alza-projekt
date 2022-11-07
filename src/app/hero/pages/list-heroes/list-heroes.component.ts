import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css'],
})
export class ListHeroesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('somt u?')
  }
}
