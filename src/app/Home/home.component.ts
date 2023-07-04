import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartDisplayComponent } from '../Dialogs/Charts/chart-display.component';
import { ExploreDataComponent } from '../Dialogs/DataExplore/explore-data.component';
import { AssetLookupComponent } from '../Dialogs/Lookups/asset-lookup.component';
import { KeyLookupComponent } from '../Dialogs/Lookups/key-lookup.component';

@Component({
  selector: 'app-home-display',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent{
  constructor(private dialog: MatDialog) {
  }  
  assetLookupText: string = '';
  keyPathLookupText: string = '';

  onSubmitAssetLookup() {
    console.log('Asset Lookup Text:', this.assetLookupText);
    this.dialog.open(AssetLookupComponent, {
      width: '97%',
      height: '80%',
      data: this.assetLookupText
    });
  }

  onSubmitKeyPathLookup() {
    console.log('Key Path Lookup Text:', this.keyPathLookupText);
    this.dialog.open(KeyLookupComponent, {
      width: '97%',
      height: '80%',
      data: this.keyPathLookupText
    });
  }

  exploreData(){
    this.dialog.open(ExploreDataComponent, {
      width: '50%',
      height: '75%',
    });
  }
  openChart(chartId: number){
    this.dialog.open(ChartDisplayComponent, {
      width: '50%',
      height: '75%',
      data: chartId
    });
  }
}