import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
//Service to load app component
export class AppService{
    private filterSelectedSubject = new BehaviorSubject<number>(0);
    
    
}