import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { catchError, EMPTY } from "rxjs";
import { AppService } from "src/app/app.service";

@Component({
    selector: 'app-chart-display',
    templateUrl: './chart-display.component.html'
  })
  
  export class ChartDisplayComponent{ 
    constructor(private appService: AppService ) {}
    errorMessage = '';

    selectedChart$ = this.appService.selectedChart$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
    
  }