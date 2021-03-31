import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // get data in parent from child
  getSelectedItems(event) {
    console.log("selected items got in parent", event);
    
  }

}
