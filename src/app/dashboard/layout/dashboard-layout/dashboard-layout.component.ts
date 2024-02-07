import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import {
  ChartConfiguration,
  ChartData,
  ChartOptions,
  ChartType,
} from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
interface Transaction {
  name: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Pending';
}
interface Product {
  name: string;
  price: number;
  unit: number;
}
@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [NgChartsModule, CommonModule],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export class DashboardLayoutComponent {
  title = 'ng2-charts-demo';
  isBrowser = true;
  transactions: Transaction[] = [
    { name: 'Jessica S.', date: '24.05.2020', amount: 124.97, status: 'Paid' },
    { name: 'Andrew S.', date: '23.05.2020', amount: 55.42, status: 'Pending' },
    { name: 'Kevin S.', date: '23.05.2020', amount: 89.9, status: 'Paid' },
    { name: 'Jack S.', date: '22.05.2020', amount: 144.94, status: 'Pending' },
    { name: 'Arthur S.', date: '22.05.2020', amount: 70.52, status: 'Paid' },
  ];

  unit_sold: Product[] = [
    { name: 'Men Gray Hoodie', price: 124.97, unit: 204 },
    { name: 'Woman Striped T-Shirt', price: 55.42, unit: 155 },
    { name: 'Woman White T-Shirt', price: 89.9, unit: 120 },
    { name: 'Man White T-Shirt', price: 144.94, unit: 204 },
    { name: 'Woman Red T-Shirt', price: 70.52, unit: 155 },
  ];
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '4am',
      '5am',
      '6am',
      '7am',
      '8am',
      '9am',
      '10am',
      '11am',
      '12pm',
      '1pm',
      '2pm',
      '3pm',
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 44, 11, 2, 144, 11],
        label: 'May 21',
        tension: 0.5,
        borderColor: 'blue',
      },
      {
        data: [44, 54, 44, 11, 22, 2, 44, 22, 2, 44, 33],
        label: 'May 22',
        tension: 0.5,
        borderColor: 'rgb(211,211,211)',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  public lineChartLegend = true;

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  public barChartLabels: string[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData123: ChartConfiguration<'bar'>['data'] = {
    labels: ['12', '13', '14', '15', '16', '17', '18'],
    datasets: [
      {
        data: [40000, 36666, 1231233, 455122, 41222, 414222, 55555],
        backgroundColor: 'green',
      },
    ],
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {}
}
