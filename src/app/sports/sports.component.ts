import { Component } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {

  dataSports:any;
  constructor(private obj:NewsService){this.sportsData()}
  sportsData(){
    this.obj.getSportsData().subscribe(res=>this.dataSports=res.articles)
  }
}
