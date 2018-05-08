import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  src = "assets/films/1.mp4";
  constructor() { }

  ngOnInit() {
    
  }

}
