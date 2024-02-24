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
import { routes } from '../app.routes';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatMenuModule, CommonModule, MatIconModule, MatButtonModule, MatInputModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  constructor(private _routes: Router, private _dialog: MatDialog, private _loginService: LoginService) { }

  goToFollows() {
    if (this._loginService.isLogin) {
      this._routes.navigateByUrl("followed");
    } else {
      this.showLoginAlert();
    }
  }

  goToMarktes() {
    console.log(this._loginService.isLogin);

    if (this._loginService.isLogin) {
      this._routes.navigateByUrl("markets");
    } else {
      this.showLoginAlert();
    }
  }

  goToDashboard() {
    if (this._loginService.isLogin) {
      this._routes.navigateByUrl("dashboard");
    } else {
      this.showLoginAlert();
    }
  }

  openDialog() {
    if (this._loginService.isLogin) {
      this._dialog.open(AlertDialogComponent);
    } else {
      this.showLoginAlert();
    }
  }

  openDialogStock() {
    if (this._loginService.isLogin) {
      this._dialog.open(AlertDialogComponent);
    } else {
      this.showLoginAlert();
    }
  }

  openDialogUser() {
    if (this._loginService.isLogin) {
      this._routes.navigateByUrl("login")
      this._loginService.isLogin = false
    } else {
      this.showLoginAlert();
    }
  }

  private showLoginAlert() {
    alert("Lütfen önce giriş yapınız!");
  }
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger | undefined;



}
