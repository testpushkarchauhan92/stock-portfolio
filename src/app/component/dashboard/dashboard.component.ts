import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: string = sessionStorage.getItem('username');

  constructor() { }

  ngOnInit(): void {
  }

  // https://markets.businessinsider.com/index/realtime-chart/s&p_500
  globalMarkets = [
    {
      name : "S&P 500",
      price : 3426.96,
      change: -28.10,
      percentage : -0.81
    },
    {
      name : "Dow Jones(Top 30)",
      price : 28133.31,
      change: -159.42,
      percentage : -0.56
    },
    {
      name : "Nasdaq 100",
      price : 11622.13,
      change: -149.23,
      percentage : -1.27
    },
    {
      name : "Gold",
      price : 1933.83,
      change: +0.00,
      percentage : +0.00
    },
  ];

  // https://www.moneycontrol.com/stocksmarketsindia/
  localMarkets = [
    {
      name: "Nifty 50(NSE)",
      price: 11333.90,
      change: -193.60,
      percentage: -1.68
    },
    {
      name: "Sensex(BSE)",
      price: 38357.18,
      change: -633.76,
      percentage: -1.63
    },
    {
      name: "Nifty Bank",
      price: 23011.50,
      change: -519.30,
      percentage: -2.21
    },
    {
      name: "Nifty IT",
      price: 18073.95,
      change: -274.60,
      percentage: -1.50
    },
  ];

}
