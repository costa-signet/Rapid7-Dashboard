import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catchError, EMPTY } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'lookup-key-details',
  templateUrl: './key-lookup.component.html',

})

export class KeyLookupComponent{
    errorMessage: string = '';
    constructor(private appService: AppService, @Inject(MAT_DIALOG_DATA) public data: string) {}
    
    lookup$ = this.appService.keyLookup(this.data)
        .pipe(
        catchError(err => {
            this.errorMessage = err;
            return EMPTY;
        }));
  
}