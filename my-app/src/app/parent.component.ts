import { Component } from '@angular/core';
@Component({
    selector:'app-parent',
    template:`<h3>{{value}}</h3>
    <app-child (myClick)="changeValue($event)"></app-child>`
})
export class ParentComponent{
    value=0;
    changeValue(isAdd:boolean){
        isAdd?this.value++:this.value--;     
        
    }
}