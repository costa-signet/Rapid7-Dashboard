import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from '../app.service';
import { HighCountSeverKeyComponent } from '../Dialogs/HighCountKeyDetials/count-key.component';
import { RiskScoreDetailsComponent } from '../Dialogs/RiskScore/risk-score-details.component';


@Component({
  selector: 'app-top20',
  templateUrl: './top20.component.html',
  styleUrls: ['./top20.component.css']
})
export class Top20Component{
  constructor(private dialog: MatDialog, private appService: AppService) {}

  openDialog(countKeyName: string){
    this.appService.selectedCountKeyChange(countKeyName);
    this.dialog.open(HighCountSeverKeyComponent, {
      width: '75%',
      height: '75%',
    });
  }
  open(riskScoreName: string){
    this.appService.selectedRiskScoreChange(riskScoreName);
    this.dialog.open(RiskScoreDetailsComponent, {
      width: '75%',
      height: '75%',
    });
  }
}