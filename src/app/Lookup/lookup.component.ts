import { Component } from '@angular/core';

@Component({
  selector: 'app-lookup-display',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent{
  assetLookupText: string = '';
  keyPathLookupText: string = '';
  bool: boolean = false;

  onSubmitAssetLookup() {
    console.log('Asset Lookup Text:', this.assetLookupText);
    this.bool = true
  }

  onSubmitKeyPathLookup() {
    console.log('Key Path Lookup Text:', this.keyPathLookupText);
    this.bool = true
  }
}