import { Component } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
  techData:any;
constructor(private obj:NewsService){this.technologyData()}

technologyData(){
  this.obj.techData().subscribe(res=>this.techData=res.articles)
}
}
