import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Alza Heroes'
  links: { address: string; title: string }[] = [
    { address: 'dashboard', title: 'Dashboard' },
    { address: 'heroes', title: 'Heroes' },
  ]
}
