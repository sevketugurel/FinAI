import {Component, ViewChild} from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatMenuTrigger, MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-alert-dialog',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule,MatDialogContent,MatDialogActions,MatDialogClose],
  templateUrl: './alert-dialog.component.html',
  styleUrl: './alert-dialog.component.scss'
})
export class AlertDialogComponent {
  
}
