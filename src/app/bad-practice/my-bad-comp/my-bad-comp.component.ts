import { Component,Input } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-my-bad-comp',
  templateUrl: './my-bad-comp.component.html',
  styleUrls: ['./my-bad-comp.component.css']
})
@Input()

export class MyBadCompComponent implements OnInit {

  constructor(private mytit:Title) { }

 

}
