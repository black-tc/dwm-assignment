import { Students,  Employed } from "./../datas";
import { FormControl } from "@angular/forms";
import { DataService } from "./../data.service";
import { Component, OnInit } from "@angular/core";

import * as d3 from "d3";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.scss"],
})
export class LineChartComponent implements OnInit {


  // arrays for Students, Indicators, Years
  employed$: Employed[];


  yearSelect: String = "None";

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getCountries();
  }

  // Get all countries and call it in ngOnInit
  getCountries() {
    this.dataService.getAllStudents().subscribe((data) => {
      this.employed$ = data;
    });
  }

}
