import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TopLosersService } from '../../service/data/top-losers.service';
import { TopLosers } from '../../model/TopLosers';
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-top-losers',
  templateUrl: './top-losers.component.html',
  styleUrls: ['./top-losers.component.css']
})
export class TopLosersComponent implements OnInit {

  topLoserStocks: TopLosers[];

  constructor(private topLosersService: TopLosersService) { }

  ngOnInit(): void {
    this.refreshGainers();
  }

  @ViewChild('epltable', { static: false }) epltable: ElementRef;

  /*
  topGainerStocks = [
    {
      number: 1,
      company: "NTPC",
      high: 107.85,
      low: 101.60,
      lastPrice: 105.95,
      previousClose: 101.10,
      change: 4.85,
      percentageGain: 4.80
    },
    {
      number: 2,
      company: "Asian Paints",
      high: 1973.25,
      low: 1880.75,
      lastPrice: 1958.00,
      previousClose: 1874.90,
      change: 83.10,
      percentageGain: 4.43
    },
    {
      number: 3,
      company: "Hero Motocorp",
      high: 3049.75,
      low: 2957.05,
      lastPrice: 3033.45,
      previousClose: 2956.05,
      change: 77.40,
      percentageGain: 2.62
    },
    {
      number: 4,
      company: "HDFC Bank",
      high: 1088.80,
      low: 1064.60,
      lastPrice: 1085.65,
      previousClose: 1059.00,
      change: 26.65,
      percentageGain: 2.52
    },
    {
      number: 5,
      company: "Nestle",
      high: 16690.00,
      low: 16250.00,
      lastPrice: 16561.95,
      previousClose: 16211.95,
      change: 350.00,
      percentageGain: 2.16
    }
  ];
  */

  exportToExcelLosers() {
    const ws: xlsx.WorkSheet =
      xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Top Losers Stock Sheet');
    xlsx.writeFile(wb, 'top_losers_stock.xlsx');
  }

  refreshGainers() {
    this.topLosersService.getLosers().subscribe(
      response => {
        console.log(response);
        this.topLoserStocks = response;
      });
  }

}
