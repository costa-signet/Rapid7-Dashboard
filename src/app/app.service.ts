import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, combineLatest, map, tap, throwError } from "rxjs";
import { Charts } from "./Dialogs/Charts/Charts";
import { HighCount } from "./Dialogs/HighCount/HighCount";
import { Lookups } from "./Dialogs/Lookups/Lookups";
import { RiskScore } from "./Dialogs/RiskScore/RiskScore";
import { SDK } from "./Dialogs/ServerKeyDetails/SKD";
import { Vendor } from "./Dialogs/Vendors/Vendor";
import { OSProduct } from "./Types/OSProduct";



@Injectable({
    providedIn: 'root'
})
//Service to load app component
export class AppService{
    constructor (private http: HttpClient) { }
    //LookUp api call
    private API = 'https://vgw90ravgg.execute-api.us-east-2.amazonaws.com/test';
    private partition = '?partition=2023-05-02'  //find out if we want a select report feature or if we just want the most recent data. if most recent do the s3 bucket list filering to get partition

    //Vendor Observable 
    private VENDOR = 'https://vgw90ravgg.execute-api.us-east-2.amazonaws.com/test/os-vendors';
    private vendorSelectionSubject = new BehaviorSubject<string>('');
    vendors$ = this.http.get<Vendor[]>(this.VENDOR + this.partition).pipe(
        tap(data => console.log('All: ', JSON.stringify(data))), 
        catchError(this.handleError)
    );
    vendorSelectionAction$ = this.vendorSelectionSubject.asObservable();
    selectedVendor$ = combineLatest([this.vendors$, this.vendorSelectionAction$])
        .pipe(
            map(([vendors, selectedVendorName]) => 
                vendors.find(vendor => vendor.search === selectedVendorName)),
            tap(name => console.log('selected venodr ', name))
    );
    selectedVendorChange(selectedVendorName: string): void{ 
        this.vendorSelectionSubject.next(selectedVendorName);
        console.log('selected vendor name function ', this.vendorSelectionSubject.value);
    }

    //High Count Observalble
    private HIGH_COUNT = 'https://vgw90ravgg.execute-api.us-east-2.amazonaws.com/test/high-count';
    private highCountSelectionSubject = new BehaviorSubject<string>('');
    highCounts$ = this.http.get<HighCount[]>(this.HIGH_COUNT + this.partition).pipe(
        tap(data => console.log('All: ', JSON.stringify(data))), 
        catchError(this.handleError)
    );
    highCountSelectionAction$ = this.highCountSelectionSubject.asObservable();
    selectedHighCount$ = combineLatest([this.highCounts$, this.highCountSelectionAction$])
        .pipe(
            map(([highCounts, highCountSelectionName]) => 
            highCounts.find(countKey => countKey.name === highCountSelectionName)),
            tap(name => console.log('selected top20 count ', name))
    );
    selectedHighCountChange(highCountSelectionName: string): void{ 
        this.highCountSelectionSubject.next(highCountSelectionName);
        console.log('selected top 20 high count name ', this.highCountSelectionSubject.value);
    }

    //Risk Score Observable
    private RISKSCORE = 'https://vgw90ravgg.execute-api.us-east-2.amazonaws.com/test/risk-score';
    private riskScoreSelectionSubject = new BehaviorSubject<string>('');
    riskScores$ = this.http.get<RiskScore[]>(this.RISKSCORE + this.partition).pipe(
        tap(data => console.log('All: ', JSON.stringify(data))), 
        catchError(this.handleError)
    );
    riskScoreSelectionAction$ = this.riskScoreSelectionSubject.asObservable();
    selectedRiskScore$ = combineLatest([this.riskScores$, this.riskScoreSelectionAction$])
        .pipe(
            map(([riskScores, selectedRiskScoreName]) => 
            riskScores.find(riskScore => riskScore.name === selectedRiskScoreName)),
            tap(name => console.log('selected top20  risk score ', name))
    );
    selectedRiskScoreChange(selectedRiskScoreName: string): void{ 
        this.riskScoreSelectionSubject.next(selectedRiskScoreName);
        console.log('selected top 20 risk score name function ', this.riskScoreSelectionSubject.value);
    }

    //Server Key Details Observable 
    private SKD = ' https://vgw90ravgg.execute-api.us-east-2.amazonaws.com/test/server-key-details';
    private SKDSelectionSubject = new BehaviorSubject<string>('');
    SKDs$ = this.http.get<SDK[]>(this.SKD + this.partition).pipe(
        tap(data => console.log('All: ', JSON.stringify(data))), 
        catchError(this.handleError)
    );
    SKDselectionAction$ = this.SKDSelectionSubject.asObservable();
    selectedSKD$ = combineLatest([this.SKDs$, this.SKDselectionAction$])
        .pipe(
            map(([SKDs, selectedSDKName]) => 
                SKDs.find(SKD => SKD.name === selectedSDKName)),
            tap(name => console.log('selected SKD ', name))
    );
    selectedSKDChange(selectedSDKName: string): void{ 
        this.SKDSelectionSubject.next(selectedSDKName);
        console.log('selected SKD name function ', this.SKDSelectionSubject.value);
    }






    //Chart Observable 
    private CHARTS = ' https://vgw90ravgg.execute-api.us-east-2.amazonaws.com/test/charts';
    private chartSelectionSubject = new BehaviorSubject<string>('');
    charts$ = this.http.get<Charts[]>(this.CHARTS + this.partition).pipe(
        tap(data => console.log('All: ', JSON.stringify(data))), 
        catchError(this.handleError)
    );
    chartSelectionAction$ = this.chartSelectionSubject.asObservable();
    selectedChart$ = combineLatest([this.charts$, this.chartSelectionAction$])
        .pipe(
            map(([charts, selectedChartName]) => 
                charts.find(chart => chart.chart === selectedChartName)),
            tap(name => console.log('selected chart ', name))
    );
    selectedChartChange(selectedChartName: string): void{ 
        this.chartSelectionSubject.next(selectedChartName);
        console.log('selected chart name function ', this.chartSelectionSubject.value);
    }




    /*private OS = 'https://vgw90ravgg.execute-api.us-east-2.amazonaws.com/test/os-product-group';
    osProduct$ = this.http.get<OSProduct[]>(this.OS + this.partition).pipe(
        tap(data => console.log('All: ', JSON.stringify(data))), 
        catchError(this.handleError)
    );*/

    


    



    

    assetLookup(name: string){
        return this.http.get<Lookups[]>(this.API + '/asset-lookup?asset-name=' + name).pipe(
            tap(data => console.log('asset lookup return: ', JSON.stringify(data))), 
            catchError(this.handleError)
        )
    }

    keyLookup(path: string){
        return this.http.get<Lookups[]>(this.API + '/key-lookup?key-path=' + path).pipe(
            tap(data => console.log('key path lookup return: ', JSON.stringify(data))), 
            catchError(this.handleError)
        )
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent){
            errorMessage = `An error occured ${err.error.message}`;
            }
        else 
            errorMessage = `Server returned code:` 
                
        console.error(errorMessage);
        return throwError(errorMessage);
    }
    

}