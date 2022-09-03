import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';

  constructor() { }


  ngOnInit(): void {
  }

  SetFirstName(fname:string)
  {
    this.firstName = fname;
  }

  SetLastName(lname:string)
  {
    this.lastName = lname
  }

}
