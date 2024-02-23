import { Component, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { FollowedComponent } from "./followed/followed.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { AreaChartComponent } from './charts/area-chart/area-chart.component';
import { ColumnChartComponent } from './charts/column-chart/column-chart.component';
import { DateTimeAreaChartComponent } from './charts/date-time-area-chart/date-time-area-chart.component';
import { StocksDialogComponent } from '../dialogs/stocks-dialog/stocks-dialog.component';
import { stockData } from './data-series';





@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [AreaChartComponent, ColumnChartComponent, DateTimeAreaChartComponent, MatIconModule, MatInputModule, MatButtonModule, RouterOutlet, CommonModule,SidebarComponent, FollowedComponent, NavbarComponent, MatDialogModule,]
})
export class DashboardComponent {
  constructor(private _dialog: MatDialog) {console.log(this.data); }
  
  data = stockData;
  
  

  openDialogStock() {
    this._dialog.open(StocksDialogComponent)
  }
}

