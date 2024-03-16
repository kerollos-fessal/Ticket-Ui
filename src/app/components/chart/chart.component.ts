// chart.component.ts

import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
this.generateChart()
}


generateChart(){
  const seriesData = [200, 100, 230, 300, 400, 200, 150, 300, 100, 200, 400, 150];
  const categories = ['ديسمبر', 'نوفمبر', 'أكتوبر', 'سبتمبر','أغسطس', 'يوليو', 'يونيو', 'مايو', 'أبريل', 'مارس', 'فبراير','يناير'];

  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
        type: 'area',
        height: 264,
        foreColor:"#9291A5",
        toolbar: {
          show: false,

        }
    },
    series: [{
        name: `استخدام`,
        data: seriesData,
        
    }],
    xaxis: {
        categories: categories
    },
    yaxis: {
      // Specify the number of tick marks and grid lines
      tickAmount: 4,
      show: false,
      labels: {
        formatter: (value: number) => `${value}%`
      }
    },
    grid :{
      // strokeDashArray: 4,
      
    },
    legend: {
      // Add your legend configuration here
      position: 'top',
    },
    colors: ['#8A74F9'],
    forecastDataPoints:{
      // count: 4

    },
    markers:{
      height: 500,
      
    },
    tooltip: {
      // Add your tooltip configuration here
      enabled: true,
      shared: false,
      followCursor: false,
      hideEmptySeries: true,
      style: {
        fontSize: '12px',
        fontFamily: 'Inter',
      },
    },
    title: {
      // Add your title configuration here
      text: 'إحصائيات استخدام القسيمة',
      align: 'right',
      offsetX: -150,
      offsetY: 0, 
      floating:false,
      margin:  0,
      style: {
        fontSize: '14px',
        fontWeight: 400,
        color: '#1C1C28',
        fontFamily: 'Neo Sans Arabic',
      },
    },
    subtitle: {
    align: 'right',
    text:'05 يوليو , 2023 - 05 أغسطس , 2023',
    offsetX: -190,
    offsetY: 18,
    style: {
      fontFamily: 'Neo Sans Arabic',
      color: '#99A1B7',
      fontWeight: 400,
    }
    },
    plotOptions: {
      bar: {
        dataLabels: {

          total: {
            enabled: false
          }
        }
      },
    },
  
  };

  const chartElement = document.querySelector('#chart');
  const chart = new ApexCharts(chartElement, chartOptions);
  chart.render();
}
}

