import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.sass']
})
export class StructComponent implements OnInit {
isShow=true;
arrSubjects=['Angular','NodeJs','React']
  constructor() { }

  ngOnInit(): void {
  }

}
