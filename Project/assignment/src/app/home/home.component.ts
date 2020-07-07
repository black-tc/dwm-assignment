import { Component, OnInit } from "@angular/core";
import { Students,   Employed } from "./../datas";
import { DataService } from "./../data.service";

import * as d3 from "d3";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  students$: Students[];
  employed$: Employed[];
  males$: Students[];
  females$: Students[];
  nust$: Students[];
  ium$: Students[];
  part$: Students[];
  full$: Students[];
  distance$: Students[];
  total: any;
  employed: any;
  males: any;
  females: any;
  nust: any;
  ium: any;
  part: any;
  full: any;
  distance: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getTotal();

  }

  getTotal() {
    this.dataService.getAllStudents().subscribe((data) => {
      this.students$ = data;
      this.total = data.length;
      // console.log(this.total);
    });
    this.dataService.getAllEmployed().subscribe((data) => {
      this.employed$ = data;
      this.employed = data.length;

    });
    this.dataService.getAllMales().subscribe((data) => {
      this.males$ = data;
      this.males = data.length;

    });
    this.dataService.getAllFemales().subscribe((data) => {
      this.females$ = data;
      this.females = data.length;

    });
    this.dataService.getAllIUM().subscribe((data) => {
      this.ium$ = data;
      this.ium = data.length;

    });
    this.dataService.getAllNust().subscribe((data) => {
      this.nust$ = data;
      this.nust = data.length;

    });
    this.dataService.getAllPart().subscribe((data) => {
      this.part$ = data;
      this.part = data.length;

    });
    this.dataService.getAllFull().subscribe((data) => {
      this.full$ = data;
      this.full = data.length;

    });
    this.dataService.getAllDistance().subscribe((data) => {
      this.distance$ = data;
      this.distance = data.length;

    });
  }

  download(){
 let link = document.createElement("a");
    link.download = "WIL.csv";
    link.href = "assets/WIL.csv";
    link.click();
  }

}
