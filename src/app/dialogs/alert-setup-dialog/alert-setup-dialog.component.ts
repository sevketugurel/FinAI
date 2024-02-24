import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-alert-setup-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './alert-setup-dialog.component.html',
  styleUrls: ['./alert-setup-dialog.component.scss']
})
export class AlertSetupDialogComponent {
  alertData: AlertData[] = [];

  constructor(
    public dialogRef: MatDialogRef<AlertSetupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    const jsonData = JSON.stringify({ name: data.name, price: data.price });
    this.alertData.push(JSON.parse(jsonData));
  }

  alarmKur() {
    const obj = JSON.stringify(this.editedStockList());
    localStorage.setItem("alertData", obj);
    alert("Tebrikler, alarm başarıyla kuruldu.");
  }

  editedStockList() {
    const stocks = this.getStock() || [];
    stocks.push(...this.alertData);
    return stocks;
  }

  getStock() {
    return JSON.parse(localStorage.getItem("alertData")!) || [];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  name: string;
  price: number;
}

export interface AlertData {
  name: string;
  price: number;
}
