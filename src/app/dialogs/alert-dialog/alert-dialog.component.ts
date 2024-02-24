import { Component, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alert-dialog',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './alert-dialog.component.html',
  styleUrl: './alert-dialog.component.scss'
})
export class AlertDialogComponent {
  displayedColumns: string[] = ['Hisse Adı', 'Alarm Fiyatı', 'Alarıma Uzaklık', 'Al/Sat'];

  dataSource = new MatTableDataSource<StockData>(this.getStock());

  @ViewChild(MatPaginator) paginator: MatPaginator|any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getStock(){
    return JSON.parse(localStorage.getItem("alertData")!)
  }
}

export interface StockData {
  name: string;
  alarmFiyat: number;
}