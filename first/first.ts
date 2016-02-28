/**
 * Created by srujangopu on 2/27/16.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'first',
    templateUrl: './first/first.html'
})
export class First{

    i=0
    studentName = this.i

    show(){
        this.i++;
        this.studentName = this.i
    }

}