import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../services/login.service';
import { routes } from '../app.routes';
import { AlertDialogComponent } from '../dialogs/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatCheckboxModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  goToAlert() {
    this._dialog.open(AlertDialogComponent);
  }
  goTomarkets() {
    this._routes.navigateByUrl("markets")
  }
  goToLogin() {
    this._routes.navigateByUrl("login")
    this._loginService.isLogin = false
  }
  constructor(private _routes: Router, private _loginService: LoginService,private _dialog:MatDialog) { }
  openDashboard() {
    this._routes.navigateByUrl("dashboard")
  }
  goToFollowed() {
    this._routes.navigateByUrl("followed")
  }

}
