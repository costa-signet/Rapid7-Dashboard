import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from '../app.service';
import { HighCountComponent } from '../Dialogs/HighCount/count-key.component';
import { RiskScoreDetailsComponent } from '../Dialogs/RiskScore/risk-score-details.component';
import { SeverKeyDetailsComponent } from '../Dialogs/ServerKeyDetails/skd.component';


@Component({
  selector: 'app-top20',
  templateUrl: './top20.component.html',
  styleUrls: ['./top20.component.css']
})
export class Top20Component{
  constructor(private dialog: MatDialog, private appService: AppService) {}

  openHighestCount(countKeyName: string){
    this.appService.selectedHighCountChange(countKeyName);
    this.dialog.open(HighCountComponent, {
      width: '50%',
      height: '75%',
    });
  }
  openRiskScore(riskScoreName: string){
    this.appService.selectedRiskScoreChange(riskScoreName);
    this.dialog.open(RiskScoreDetailsComponent, {
      width: '50%',
      height: '75%',
    });
  }
  openSKD(skdName: string){
    this.appService.selectedSKDChange(skdName);
    this.dialog.open(SeverKeyDetailsComponent, {
      width: '50%',
      height: '75%',
    });
  }
}