import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr-page',
  templateUrl: './toastr-page.component.html',
  styleUrls: ['./toastr-page.component.css']
})
export class ToastrPageComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {

    this.toastr.success('Hello world!', 'Toastr fun!');

  }

}
