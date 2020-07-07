import { FormControl } from "@angular/forms";
import { DataService } from "./../data.service";
import { Component, OnInit } from "@angular/core";
import { Students } from "../datas";

// Import D3!
import * as d3 from "d3";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"],
})
export class BarChartComponent implements OnInit {
  indicatorsForm = new FormControl();
  countriesForm = new FormControl();

  // my years to select
  years: String[] = ["single", "5yearperiod", "10yearperiod", "20yearperiod"];

  // flags for steps.
  step0: boolean = false;
  step1: boolean = false;
  step2: boolean = false;
  f1: boolean = false;
  createGraph: boolean = false;

  // arrays for Students, Indicators, Years
  students$: Students[];


  // Year selection
  yearSelect: String = "None";

  // Constructor
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getCountries();
  }

  // Get all students and call it in ngOnInit
  getCountries() {
    this.dataService.getAllStudents().subscribe((data) => {
      this.students$ = data;
      // this.total = data.length;
      // console.log(this.total);
    });
  }



}
