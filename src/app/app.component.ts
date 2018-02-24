import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chart = [];
  ctx   = null;

  constructor() {
  }

  ngAfterViewInit() {
    this.ctx = document.getElementById("canvas");
    this.chart = new Chart(this.ctx , {
      type: 'line',
      data: {
        labels: ['a', 'b'],
        datasets: [
          {
            data: [12, 15],
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: [0, 3],
            borderColor: '#ffcc00',
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
   })
  }
}
