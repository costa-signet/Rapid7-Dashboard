import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, combineLatest, map, tap, throwError } from "rxjs";
import { Vendor } from "./Dialogs/Vendors/Vendor";
import { OSProduct } from "./Types/OSProduct";



@Injectable({
    providedIn: 'root'
})
//Service to load app component
export class AppService{

    private OS = 'assets/Json/os-product.json';
    private VENDOR = 'assets/Json/vendor.json';
    private vendorSelectionSubject = new BehaviorSubject<string>('');
    constructor (private http: HttpClient) { }

    osProduct$ = this.http.get<OSProduct[]>(this.OS).pipe(
        tap(data => console.log('All: ', JSON.stringify(data))), 
        catchError(this.handleError)
    );

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