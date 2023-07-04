import { Component } from "@angular/core";
import { catchError, EMPTY } from "rxjs";
import { AppService } from "src/app/app.service";

@Component({
    selector: 'app-vendor-display',
    templateUrl: './vendors.component.html'
  })
  
export class VendorComponent{ 
    errorMessage: string = '';
    constructor(private appService: AppService) {}

    vendor$ = this.appService.selectedVendor$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
    
}