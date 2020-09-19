import { Component, OnInit } from '@angular/core';
import { StockFilterService } from '../../service/data/stock-filter.service';
import { Stock } from '../../model/Stock';
import { StockService } from 'src/app/service/data/stock.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare function myStockFunction(): any;

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {


  stocks: Stock[];
  invalidDate = false;

  constructor(private stockService: StockService, private stockFilterService: StockFilterService) { }

  ngOnInit() {
    this.refreshStock();
  }

  buyStock(stock) {
    console.log(`Buy Stock Selected Row ${stock.id}`);
  }

  sellStock(stock) {
    console.log(`Sell Stock Selected Row ${stock.id}`);
  }

  holdStock(stock) {
    console.log(`Hold Stock Selected Row ${stock.id}`);
  }

  filterForm = new FormGroup({
    startDate: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    endDate: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ])
  });

  get startDate() {
    return this.filterForm.get('startDate');
  }

  get endDate() {
    return this.filterForm.get('endDate');
  }

  refreshStock() {
    this.stockService.getStock().subscribe(
      response => {
        console.log(response);
        this.stocks = response;
        myStockFunction();
      });
  }

  filterStartDate: string;
  filterEndDate: string;
  errorMessage = 'Invalid Dates Entered. \n Please Check date format should be dd/mm/yyyy \n startDate < endDate \n dates should be between 01-01-1000 and 01-01-3000';
  nullData = false;
  nullDataMessage = 'No Data available between selected time period ';

  filterStock() {
    this.filterStartDate = this.startDate.value.split("/").reverse().join("-");
    this.filterEndDate = this.endDate.value.split("/").reverse().join("-");
    //  this.filterStartDate = this.startDate.value;
    //  this.filterEndDate = this.endDate.value;
    console.log(this.filterStartDate);
    console.log(this.filterEndDate);
    this.stockFilterService.getFilteredStock(this.filterStartDate, this.filterEndDate).subscribe(
      response => {
        console.log(response);
        if (response !== null) {
          this.stocks = response;
          myStockFunction();
          this.invalidDate = false;
        } else {
          this.nullData = true;
          this.stocks = null;
          this.invalidDate = true;
        }
      },
      error => {
        console.log(error);
        this.invalidDate = true;
      });
  }

  clearFormData(){
    this.invalidDate = false;
    this.nullData = false;
  }

}

// Test Data
// Start : 01/01/2011 End : 01/01/2019  Expected : No Data avaiable
// Start : 24/07/2019 End : 24/07/2019  Expected : Error as startDate < endDate
// Start : 24/07/2019 End : 25/07/2019  Expected : Data
// Start : 24/07/2019 End : 26/07/2019  Expected : Data
// Start : 24/07/2019 End : 31/07/2019
// Start : 25/07/2019 End : 31/07/2019
// Start : 26/07/2019 End : 31/07/2019