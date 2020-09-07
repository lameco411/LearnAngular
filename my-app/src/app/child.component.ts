import { Component, Output, EventEmitter } from '@angular/core';
@Component({
    selector:'app-child',
    template:`<button (click)="addForParent()">Add</button>
    <button (click)="subForParent()">Subtract</button>
    `
})
export class ChildComponent{
    @Output() myClick=new EventEmitter<boolean>();
    addForParent(){
        this.myClick.emit(true);
    }
    subForParent(){
        this.myClick.emit(false);
    }
}