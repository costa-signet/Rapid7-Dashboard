import { Component } from '@angular/core';

@Component({
  selector: 'app-home-display',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent{

  assetLookupText: string = '';
  keyPathLookupText: string = '';

  onSubmitAssetLookup() {
    console.log('Asset Lookup Text:', this.assetLookupText);
  }

  onSubmitKeyPathLookup() {
    console.log('Key Path Lookup Text:', this.keyPathLookupText);
  }
}