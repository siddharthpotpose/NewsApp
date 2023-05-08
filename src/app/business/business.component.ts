import { Component } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
storeBusinessData:any;
  constructor(private obj:NewsService){
    this.businessData()
  }
  businessData(){
    this.obj.businessData().subscribe(res=>this.storeBusinessData=res.articles)
  }

}
