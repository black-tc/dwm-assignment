import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Students,   Employed } from "./../datas";
import { DataService } from "./../data.service";
import { Chart } from 'chart.js';
// import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-mode-of-study',
  templateUrl: './mode-of-study.component.html',
  styleUrls: ['./mode-of-study.component.scss']
})
export class ModeOfStudyComponent implements OnInit {
  @ViewChild('dounutchart', { static: true }) canvas1: ElementRef;
  part$: Students[];
  full$: Students[];
  distance$: Students[];
  full: any;
  part: any;
  distance: any;
  chart = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAll();
    this.basicChart1(this.part$, this.full$, this.distance$);


    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: 'Part-Time',

        datasets: [
          {
            // data: this.Run,
            borderColor: '#3cba9f',
            backgroundColor: [
              "#3cb371",
              "#0000FF",
              "#9966FF",
              "#4C4CFF",
              "#00FFFF",
              "#f990a7",
              "#aad2ed",
              "#FF00FF",
              "Blue",
              "Red",
              "Blue"
            ],
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }



  basicChart1(nam: any, ful: any, other: any) {
    //data to be displayed
    const data = {
      labels: [
        'Part-Time',
        'Full-Time',
        'Distance'
      ],
      datasets: [{
        data: [this.part$, this.full$, this.distance$],
        backgroundColor: [
          'rgba(72, 120, 250, 1)',
          'rgba(72, 0, 255, 1)',
          'rgba(75, 120, 150, 1)',
        ],
        borderColor: [
          'rgba(255, 255, 250, 0.1)',
          'rgba(255, 255, 255, 0.3)',
          'rgba(255, 255, 255, 0.5)'
        ],
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs

    };
    // And for a doughnut chart
    var dunuts = new Chart(this.canvas1.nativeElement, {
      type: 'doughnut',
      data: data,
    });
  }

  getAll() {
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

}
