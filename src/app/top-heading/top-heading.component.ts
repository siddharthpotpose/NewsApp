import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {
  data:any;
constructor(private obj:NewsService){this.getData()}
  ngOnInit(): void {
    // this.obj.getMethod().subscribe((res)=>console.log (res.articles))
  }
  getData(){
    this.obj.getMethod().subscribe(res=>this.data=res.articles)
  }

}
