import { Component } from '@angular/core';
import { TopGainersTableComponent } from './top-gainers-table/top-gainers-table.component';
import { HighestVolumeTableComponent } from './highest-volume-table/highest-volume-table.component';
import { TopLosersTableComponent } from './top-losers-table/top-losers-table.component';
import { TrendingStocksTableComponent } from './trending-stocks-table/trending-stocks-table.component';
import { NavbarComponent } from "../../../../navbar/navbar.component";

@Component({
    selector: 'app-markets',
    standalone: true,
    templateUrl: './markets.component.html',
    styleUrl: './markets.component.scss',
    imports: [TopGainersTableComponent, HighestVolumeTableComponent, TopLosersTableComponent, TrendingStocksTableComponent, NavbarComponent]
})
export class MarketsComponent {
 
}