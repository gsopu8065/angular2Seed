/**
 * Created by srujangopu on 2/27/16.
 */
import {Component} from 'angular2/core';
import {Inject} from "angular2/core";
import {Http} from "angular2/http";

@Component({
    selector: 'first',
    templateUrl: './first/first.html'
})
export class First{

    constructor(@Inject(Http) public http:Http){}


    studentName = ""

    show(){
       this.http.get("http://demo0180966.mockable.io/getSample")
        .subscribe(res => this.studentName = res.json().msg)
    }

}