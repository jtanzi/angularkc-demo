import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularKC PrimeNg Demo';
  myName = 'Joel Tanzi';
  modes = [
    { label: 'Data View', value: 'dataview' },
    { label: 'Drag & Drop', value: 'dragdrop' }
  ];
  selectedMode: 'dataview' | 'dragdrop' = 'dataview';

  // Dataview sorting
  sortOptions = [
    {label: 'Name (A-Z)', value: 'name'},
    {label: 'Name (Z-A)', value: '!name'},
    {label: 'Category', value: 'category'}
  ];
  sortKey: string;
  sortField: string;
  sortOrder: number;

  // Widget Data
  widgetCount = 0;
  widgets = [
    { name: 'Thingy', count: 6000, category: 'IoT' },
    { name: 'Pog', count: 500, category: 'Retro' },
    { name: 'UberThingy', count: 2500, category: 'IoT' },
    { name: 'Everlast', count: 1000, category: 'Misc' },
    { name: 'ProTik', count: 1200, category: 'Misc' },
    { name: 'Lighty', count: 300, category: 'Retro' },
    { name: 'El Kapitan', count: 500, category: 'IoT' },
    { name: 'MindBlast', count: 3500, category: 'Misc' },
    { name: 'ProTik Prime', count: 3100, category: 'Misc' }
  ];

  pieData = {
   labels: ['IoT', 'Retro', 'Misc'],
   datasets: [
    {
        data: [],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
  };

  barData = {
    labels: [],
    datasets: [
      {
        label: 'Widget Sales by Model',
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        data: []
      }
    ]
  };

  constructor( ) {
    const chartData = [0, 0, 0];
    this.widgets.forEach((widget) => {
      this.widgetCount += widget.count;
      if (widget.category === 'IoT') {
        chartData[0] += widget.count;
      }
      if (widget.category === 'Retro') {
        chartData[1] += widget.count;
      }
      if (widget.category === 'Misc') {
        chartData[2] +=  widget.count;
      }
      this.barData.labels.push(widget.name);
      this.barData.datasets[0].data.push(widget.count);
    });
    this.pieData.datasets[0].data = chartData;

  }


  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}


}
