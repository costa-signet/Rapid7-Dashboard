import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, combineLatest, map, tap, throwError } from "rxjs";
import { AssetAnalysis, IPAnalysis, MACAnalysis } from "./Types/Asset-Analysis";
import { Reports } from "./Types/Reports";


@Injectable({
    providedIn: 'root'
})
//Service to load app component
export class AppService{
    private reportSelectionSubject = new BehaviorSubject<string>('2023-05-02-rapid7');     //hard code most recent report for now
    
    private LIST_URL = 'https://kbt9dzwcd4.execute-api.us-east-2.amazonaws.com/list';
    private ASSET_URL = 'assets/serverClient-asset.json';
    private IP_URL = 'assets/serverClient-ip.json';
    private MAC_URL = 'assets/serverClient-mac.json';
    constructor (private http: HttpClient) { }

    asset$ = this.http.get<AssetAnalysis[]>(this.ASSET_URL).pipe(
        tap(data => console.log('All: ', JSON.stringify(data))), 
        catchError(this.handleError)
    );

    ip$ = this.http.get<IPAnalysis[]>(this.IP_URL).pipe(
        tap(data => console.log('All: ', JSON.stringify(data))), 
        catchError(this.handleError)
    );
    mac$ = this.http.get<MACAnalysis[]>(this.MAC_URL).pipe(
        tap(data => console.log('All: ', JSON.stringify(data))), 
        catchError(this.handleError)
    );






    
    rapid7Files$ = this.http.get<Reports[]>(this.LIST_URL).pipe(
        tap(data => console.log('All: ', JSON.stringify(data))), 
        catchError(this.handleError)
    );

    reportSelectionAction$ = this.reportSelectionSubject.asObservable();

    selectedReport$ = combineLatest([this.rapid7Files$, this.reportSelectionAction$])
        .pipe(
            map(([rapid7Files, selectedReportName]) => 
                rapid7Files.find(rapid7File => rapid7File.file === selectedReportName)),
            tap(report => console.log('selected report', report))
        );

    selectedReportChange(selectedReportName: string): void{ 
        this.reportSelectionSubject.next(selectedReportName);
        console.log('selected rapid7 file name ', this.reportSelectionSubject.value);
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