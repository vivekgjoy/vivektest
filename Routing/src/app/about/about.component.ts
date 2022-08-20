import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  constructor(public router:Router) {

   }

  gotohome(){
    this.router.navigateByUrl('/home')
  }

  ngOnInit(): void {
  }

}
