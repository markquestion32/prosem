import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    
  }
  gooutside(){
      this.router.navigate(["C:/Users/Guide Infoa/ttempt2/src/assets/watch/index.html"])
  }

}
