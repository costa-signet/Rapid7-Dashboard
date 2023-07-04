import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'app-chart-display',
    templateUrl: './chart-display.component.html'
  })
  
  export class ChartDisplayComponent{ 
    constructor(@Inject(MAT_DIALOG_DATA) public data: number ) {}

    
  }