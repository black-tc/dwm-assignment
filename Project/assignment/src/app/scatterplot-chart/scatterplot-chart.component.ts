import { Students } from "./../datas";
import { DataService } from "./../data.service";
import { Component, OnInit } from "@angular/core";

// Import D3!
import * as d3 from "d3";

@Component({
  selector: "app-scatterplot-chart",
  templateUrl: "./scatterplot-chart.component.html",
  styleUrls: ["./scatterplot-chart.component.scss"],
})
export class ScatterplotChartComponent implements OnInit {
  // flags for steps.
  step0: boolean = false;
  step1: boolean = false;
  step2: boolean = false;
  f1: boolean = false;
  createGraph: boolean = false;

  // arrays for Countries, Indicators, Years
  countries$: Students[];


  countrySelect: String = "None";

  indicatorSelect1: String = "None";
  indicatorSelect2: String = "None";

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getCountries();
  }

  // Get all countries and call it in ngOnInit
  getCountries() {
    this.dataService.getAllStudents().subscribe((data) => {
      this.countries$ = data;
    });
  }

  // get Indicators -> will triggered after Countries next Button
  // getIndicators() {
  //   this.dataService.getAllIndicators().subscribe((data) => {
  //     this.indicators$ = data;
  //     this.c_indicators$ = data;
  //   });
  // }




}
