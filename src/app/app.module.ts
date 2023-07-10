import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { VulAnalysisComponent } from './Analysis/vulnerability-analysis.component';
import { Top20Component } from './Top20/top20.component';
import { HomeComponent } from './Home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RiskScoreDetailsComponent } from './Dialogs/RiskScore/risk-score-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { ExploreDataComponent } from './Dialogs/DataExplore/explore-data.component';
import { ChartDisplayComponent } from './Dialogs/Charts/chart-display.component';
import { VendorComponent } from './Dialogs/Vendors/vendors.component';

import { AssetLookupComponent } from './Dialogs/Lookups/asset-lookup.component';
import { KeyLookupComponent } from './Dialogs/Lookups/key-lookup.component';
import { HighCountComponent } from './Dialogs/HighCount/count-key.component';
import { SeverKeyDetailsComponent } from './Dialogs/ServerKeyDetails/skd.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VulAnalysisComponent,
    Top20Component,
    RiskScoreDetailsComponent,
    ExploreDataComponent,
    ChartDisplayComponent,
    VendorComponent,
    HighCountComponent,
    AssetLookupComponent,
    KeyLookupComponent,
    SeverKeyDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
