import { Component } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'count-key-details',
  templateUrl: './count-key.component.html',

})
export class HighCountSeverKeyComponent{
    errorMessage: string = '';
    constructor(private appService: AppService) {}

    countKey$ = this.appService.selectedCountKey$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  
}