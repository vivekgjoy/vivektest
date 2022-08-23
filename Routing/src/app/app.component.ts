import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Everyone Welcome to Angular';
  day = new Date();
  name='Vivek';
  constructor(public router:Router)
  {
    const test$ = new Observable(call =>
      {
        //console.log('test');
        call.next('Students');
        call.next('vivek');
        call.next('Vignesh');
        call.next('karthik');
        call.next('kumar');
        call.error('error occured');
        call.complete();
        setTimeout(()=>{
          call.next('time out method calling');
        },5000)

        call.next('venkat');
        call.next('sakthi');
        //sub.complete('complete');
        console.log('1st call observable end===========');
      });
      test$.subscribe((x) =>{
        console.log('1st Call',x);

      }, error =>{
        console.log('error');

      })
      test$.subscribe(x =>{
        console.log('2nd Call',x);
      })
  }
  gotoabout()
  {
    this.router.navigateByUrl('/about')
  }
  testfun(){
    return 'Return Apple'
  }
}
