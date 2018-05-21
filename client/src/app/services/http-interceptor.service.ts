import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class HttpInterceptorService {
  constructor(public router: Router) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const customReq = request.clone({
      
      setHeaders : {
        'Content-Type' : 'application/json',
        
      }
    });
    
    return next
    .handle(customReq)
    .catch(resErr => {
      if (resErr instanceof HttpErrorResponse) {
            
        
        if(resErr.status===403){
          console.log(resErr);
          
        }

        if(resErr.status===401){
          
        }

        if(resErr.status===404){
          console.log(resErr);
        }


        if(resErr.error != null){
           
        } 
        }
        
      return Observable.throw(resErr);
    });;
  }

}
