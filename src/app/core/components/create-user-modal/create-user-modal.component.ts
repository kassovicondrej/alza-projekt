import { Component, OnInit } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html',
})
export class CreateUserModalComponent implements OnInit {
  heroName = ''

  constructor(private dialogRef: MatDialogRef<CreateUserModalComponent>) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close()
  }
}
