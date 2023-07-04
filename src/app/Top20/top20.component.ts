import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RiskScoreDetailsComponent } from '../Dialogs/RiskScore/risk-score-details.component';


@Component({
  selector: 'app-top20',
  templateUrl: './top20.component.html',
  styleUrls: ['./top20.component.css']
})
export class Top20Component{
  constructor(private dialog: MatDialog) {}
  openDialog(){
    this.dialog.open(RiskScoreDetailsComponent, {
      width: '75%',
      height: '75%',
    });
  }
}