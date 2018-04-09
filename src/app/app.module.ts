import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { DataViewModule } from 'primeng/dataview';
import { ChartModule } from 'primeng/chart';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PanelModule,
    TabViewModule,
    DataViewModule,
    ChartModule,
    DragDropModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
