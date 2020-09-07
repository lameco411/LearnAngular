import { Component } from '@angular/core';
@Component({
    templateUrl:'./word.component.html',
    selector:'app-word',
    styleUrls:['./word.component.css']
})

export class WordComponent {
    en:string='hello';
    vn:string='xin chào';
    imageUrl='https://img.thuthuattinhoc.vn/uploads/2019/01/13/hinhf-anh-tranh-ve-chi-bi-de-thuong-nhat_104528071.jpg';
    forgot=true;
    toggleForgot(){
        this.forgot=!this.forgot
    }
}