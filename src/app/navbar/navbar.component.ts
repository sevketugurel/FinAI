import { Component, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../dialogs/alert-dialog/alert-dialog.component';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { UserMenuDialogComponent } from '../dialogs/user-menu-dialog/user-menu-dialog.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatMenuModule, CommonModule, MatIconModule, MatButtonModule, MatInputModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  openDialog() {
    this._dialog.open(AlertDialogComponent)
  }
  openDialogStock() {
    this._dialog.open(AlertDialogComponent);
  }
  constructor(private _routes: Router, private _dialog: MatDialog) { }
  goToFollows() {
    this._routes.navigateByUrl("followed")
  }
  goToMarktes() {
    this._routes.navigateByUrl("markets")
  }
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger | undefined;


  openDialogUser() {
    const dialogRef = this._dialog.open(UserMenuDialogComponent, { restoreFocus: false });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger?.focus());
  }
}
