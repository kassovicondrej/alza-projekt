import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { DashboardComponent } from './dashboard/dashboard.component'
import { FormsModule } from '@angular/forms'
import { CustomTextDirective } from './core/directives/custom-text'
import { HeroesListComponent } from './heroes-list/heroes-list.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CreateUserModalComponent } from './core/components/create-user-modal/create-user-modal.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { ConfirmDialogComponent } from './core/components/confirm-dialog/confirm-dialog.component'

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule,
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesListComponent,
    CustomTextDirective,
    CreateUserModalComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    ...materialModules,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [...materialModules, ConfirmDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [CreateUserModalComponent],
})
export class AppModule {}
