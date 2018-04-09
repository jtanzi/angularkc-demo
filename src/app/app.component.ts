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

  constructor( ) {
    this.widgets.forEach((widget) => {
      this.widgetCount += widget.count;
    });
  }


}
