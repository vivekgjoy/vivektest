import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data={name:'',email:''}

  constructor(public router:Router) {

  }
  gotocontact(){
   this.router.navigateByUrl('/contact')
 }
 ngOnInit(): void {
}


}
