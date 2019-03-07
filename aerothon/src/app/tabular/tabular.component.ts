import { Component, OnInit,Input, OnChanges, SimpleChanges  } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'tabular',
  templateUrl: './tabular.component.html',
  styleUrls: ['./tabular.component.css']
})
export class TabularComponent implements OnInit {
  items: ColumnSet[]=[];
  // list properties you want to set per implementation here...
  ELEMENT_DATA: ColumnSet[] = [
    {MSN: 1, harnessLength: 120.45, grossWeight: 11131.0079, atmPressure:1241,roomTemp:23.45,airport:'MAA',fuelCapLeft:2000,fuelCapRight:2000,fuelQuantLeft:1000,fuelQuantRight:1000,maxAltitude:40000,flightNo:'AA1234'},
  ];

  dataSource:any;
  displayedColumns: string[] =[];
  constructor() { }

  ngOnInit() {
    this.displayedColumns= ['MSN', 'harnessLength', 'grossWeight', 'atmPressure','roomTemp','airport',
    'fuelCapLeft','fuelCapRight','fuelQuantLeft','fuelQuantRight','maxAltitude','flightNo'];
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export interface ColumnSet{
  MSN:number;
  harnessLength:number;
  grossWeight:number;
  atmPressure:number;
  roomTemp:number;
  airport:string;
  fuelCapLeft:number;
  fuelCapRight:number;
  fuelQuantLeft:number;
  fuelQuantRight:number;
  maxAltitude:number;
  flightNo:string;
}
