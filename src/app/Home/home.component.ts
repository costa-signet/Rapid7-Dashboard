import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExploreDataComponent } from '../Dialogs/DataExplore/explore-data.component';

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
  }

  onSubmitKeyPathLookup() {
    console.log('Key Path Lookup Text:', this.keyPathLookupText);
  }

  exploreData(){
    this.dialog.open(ExploreDataComponent, {
      width: '50%',
      height: '75%',
    });
  }
}