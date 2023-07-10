import { Component } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'skd-details',
  templateUrl: './skd.component.html',

})
export class SeverKeyDetailsComponent{
    errorMessage: string = '';
    constructor(private appService: AppService) {}

    countKey$ = this.appService.selectedSKD$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  
}