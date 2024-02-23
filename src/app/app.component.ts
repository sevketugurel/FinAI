import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from "./navbar/navbar.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FontAwesomeModule, SidebarComponent, NavbarComponent]
})
export class AppComponent {
  title = 'App';

  
}
