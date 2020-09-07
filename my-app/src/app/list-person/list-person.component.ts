import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.sass']
})
export class ListPersonComponent implements OnInit {
  arrPeople=[
    {name:"Nguyễn Thanh Lâm",age:18},
    {name:"Nguyễn Thanh sơn",age:15},
    {name:"Nguyễn Thanh điền",age:11},
    {name:"Nguyễn Thanh hằng",age:25},
    {name:"Nguyễn Thanh Thảo",age:30}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
