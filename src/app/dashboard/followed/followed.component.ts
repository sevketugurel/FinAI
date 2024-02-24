import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from "../../navbar/navbar.component";
import { MatDialog } from '@angular/material/dialog';
import { AlertSetupDialogComponent } from '../../dialogs/alert-setup-dialog/alert-setup-dialog.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { followedStockData } from './data-series';
import { SidebarComponent } from "../../sidebar/sidebar.component";

@Component({
    selector: 'app-followed',
    standalone: true,
    templateUrl: './followed.component.html',
    styleUrl: './followed.component.scss',
    imports: [FormsModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatButtonModule, NavbarComponent, SidebarComponent]
})


export class FollowedComponent {
  displayedColumns: string[] = [ 'Hisse', 'Son Fiyat', 'Günlük Değişim'];
  stocks = followedStockData
  dataSource = new MatTableDataSource<Stocks>(this.stocks);

  @ViewChild(MatPaginator) paginator: MatPaginator|any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  animal: string="";
  name: string="";

  constructor(public dialog: MatDialog) {console.log(this.stocks);
  }

  openDialogAlert(): void {
    const dialogRef = this.dialog.open(AlertSetupDialogComponent, {
      data: {name: this.name, animal: this.animal},
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  
}
export interface Stocks {
  name: string;
  price: number;
  changing: number;

}
