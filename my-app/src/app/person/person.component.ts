import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent implements OnInit {
@Input() name:String;
@Input() age:Number;
  constructor() { }

  ngOnInit(): void {
  }

}
