import { Component, OnInit, VERSION } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Alza Heroes'
  active!: string
  links: { address: string; title: string }[] = [
    { address: 'dashboard', title: 'Dashboard' },
    { address: 'heroes', title: 'Heroes' },
  ]

  ngOnInit(): void {
    if (!this.active) {
      this.active = this.links[0].address
    }
  }
}
