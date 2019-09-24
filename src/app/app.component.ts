import { Component,OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private mydifferenttit:Title){}

  ngOnInit(){
  this.mydifferenttit.setTitle('Tuesday Training')
  }

  myname='Hey Deivanai';
  uname = 'Priya';
  pswd = '';

  Color ='pink';


myalert = ()=>{
alert("Hello");
this.Color='blue';
};

colorChange= () =>{
  this.Color='blue';
}

colorNoChange= () =>{
  this.Color='Pink';
}
  

}
