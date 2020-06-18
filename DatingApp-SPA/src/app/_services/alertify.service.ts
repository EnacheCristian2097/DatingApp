import { Injectable } from '@angular/core';
import * as alartify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

confirm(message: string, okCallback: () => any){
  alartify.confirm(message, (e: any) => {
    if (e) {
      okCallback();
    } else{}
  });
}

success(message: string){
  alartify.success(message);
}

error(message: string){
  alartify.error(message);
}

warning(message: string){
  alartify.warning(message);
}

message(message: string){
  alartify.message(message);
}

}
