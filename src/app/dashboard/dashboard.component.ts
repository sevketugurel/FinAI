import { Component,ViewChild } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  NgApexchartsModule
} from "ng-apexcharts";
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [ NgApexchartsModule,RouterOutlet,CommonModule,CanvasJSAngularChartsModule,MatInputModule,MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
	
  chartOptions = {
    title: {
      text: 'Monthly Sales Data',
    },
    theme: 'light2',
    animationEnabled: true,
    exportEnabled: true,
    axisY: {
      includeZero: true,
      valueFormatString: '$#,##0k',
    },
    data: [
      {
        type: 'column', //change type to bar, line, area, pie, etc
        yValueFormatString: '$#,##0k',
        color: '#01b8aa',
        dataPoints: [
          { label: 'Jan', y: 172 },
          { label: 'Feb', y: 189 },
          { label: 'Mar', y: 201 },
          { label: 'Apr', y: 240 },
          { label: 'May', y: 166 },
          { label: 'Jun', y: 196 },
          { label: 'Jul', y: 218 },
          { label: 'Aug', y: 167 },
          { label: 'Sep', y: 175 },
          { label: 'Oct', y: 152 },
          { label: 'Nov', y: 156 },
          { label: 'Dec', y: 164 },
        ],
      },
    ],
  };
  addSymbols = (e: any) => {
	  var suffixes = ["", "K", "M", "B"];
 
	  var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
	  if(order > suffixes.length - 1)
		order = suffixes.length - 1;
 
	  var suffix = suffixes[order];
	  return (e.value / Math.pow(1000, order) + suffix);
	}

  //multi char 
	
	multichartOptions = {
	  animationEnabled: true,
	  title:{
		text: "Oil Reserves and Production "    
	  },
	  axisY2: {
		title:"Production (bbl/day)",
		includeZero: true,
		labelFormatter: this.addSymbols
	  },
	  axisY: {
		title: "Reserves(MMbbl)",
		includeZero: true,
		labelFormatter: this.addSymbols
	  },
	  legend: {
		cursor: "pointer",
		itemclick: (e: any) => {
		  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		  } else {
			e.dataSeries.visible = true;
		  }
		  e.chart.render();
		}
	  },
	  data: [{        
		  type: "bar",  
		  showInLegend: true, 
		  legendText: "Reserves in MMbbl",
		  dataPoints: [      
			{ y: 267017, label: "Saudi Arabia" },
			{ y: 116000, label: "Russia" },
			{ y: 20682, label: "US" },
			{ y: 154580, label: "Iran" },
			{ y: 20350, label: "China" },
			{ y: 175200, label: "Canda" },
			{ y: 97800, label: "UAE" },
			{ y: 297571, label: "Venezuela" }
		  ]
		}, {        
		  type: "bar",  
		  axisYType: "secondary",
		  showInLegend: true,
		  legendText: "production in bbl/day",
		  dataPoints: [      
			{ y:11150000, label: "Saudi Arabia" },
			{ y:10210000, label: "Russia" },
			{ y:9023000 , label: "US" },
			{ y:4231000 , label: "Iran" },
			{ y:4073000 , label: "China" },
			{ y:3592000, label: "Canda" },
			{ y:3087000, label: "UAE" },
			{ y:2453000, label: "Venezuela" }
		  ]
		}]
	}	
}
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};
