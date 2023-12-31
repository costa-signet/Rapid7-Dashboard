import { Component } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'risk-score-details',
  templateUrl: './risk-score-details.component.html',

})
export class RiskScoreDetailsComponent{
  errorMessage: string = '';
    constructor(private appService: AppService) {}

  riskScore$ = this.appService.selectedRiskScore$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
}