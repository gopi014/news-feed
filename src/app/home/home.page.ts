import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articles:[];
  constructor(private apiService: ApiService, private router: Router) {
  }
  ionViewDidEnter(){

    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }

  gotoDetails(article:object){
    let navigationExtras: NavigationExtras = {
      state: {
        article: article
      }
    };
    this.router.navigate(['/details'],navigationExtras);
  }
}
