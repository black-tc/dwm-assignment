import { Component, OnInit } from "@angular/core";

import { DataService } from "./data.service";
import * as d3 from "d3";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {


  constructor(private dataServise: DataService) {}

  ngOnInit() {}
}
