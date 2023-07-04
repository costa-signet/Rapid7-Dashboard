import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, combineLatest, map, tap, throwError } from "rxjs";
import { CountKey } from "./Dialogs/HighCountKeyDetials/CountKey";
import { Lookups } from "./Dialogs/Lookups/Lookups";
import { RiskScore } from "./Dialogs/RiskScore/RiskScore";
import { Vendor } from "./Dialogs/Vendors/Vendor";
import { OSProduct } from "./Types/OSProduct";



@Injectable({
    providedIn: 'root'
})
//Service to load app component
export class AppService{
    private API = 'https://vgw90ravgg.execute-api.us-east-2.amazonaws.com/test';
    private OS = 'assets/Json/os-product.json';
    private VENDOR = 'assets/Json/vendor.json';
    private COUNT_KEY = 'assets/Json/countKey.json';
    private RISKSCORE = 'assets/Json/riskscore.json';
    private vendorSelectionSubject = new BehaviorSubject<string>('');
    private countKeySelectionSubject = new BehaviorSubject<string>('');
    private riskScoreSelectionSubject = new BehaviorSubject<string>('');
    constructor (private http: HttpClient) { }

    //For one chart in Vul Anlaysis tab
    osProduct$ = this.http.get<OSProduct[]>(this.OS).pipe(
        tap(data => console.log('All: ', JSON.stringify(data))), 
        catchError(this.handleError)
    );


    //Vendor Observable 
    vendors$ = this.http.get<Vendor[]>(this.VENDOR).pipe(
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


    //Observable for data of type IP Addres -- Asset Name -- Count
    countKeys$ = this.http.get<CountKey[]>(this.COUNT_KEY).pipe(
        tap(data => console.log('All: ', JSON.stringify(data))), 
        catchError(this.handleError)
    );

    countKeySelectionAction$ = this.countKeySelectionSubject.asObservable();

    selectedCountKey$ = combineLatest([this.countKeys$, this.countKeySelectionAction$])
        .pipe(
            map(([countKeys, selectedCountKeyName]) => 
            countKeys.find(countKey => countKey.name === selectedCountKeyName)),
            tap(name => console.log('selected top20 count or key ', name))
    );
   
    selectedCountKeyChange(selectedCountKeyName: string): void{ 
        this.countKeySelectionSubject.next(selectedCountKeyName);
        console.log('selected top 20 count or key name function ', this.countKeySelectionSubject.value);
    }



    //Observable for data of type IP Addres -- Asset Name -- CVSS2 Score -- Risk Score
    riskScores$ = this.http.get<RiskScore[]>(this.RISKSCORE).pipe(
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