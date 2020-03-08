import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NetworkService, ConnectionStatus } from './network.service';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';
import { tap } from "rxjs/operators";
const API_STORAGE_KEY = 'news';
const API_KEY="f34ce61c4978483c92a78f8d655c05c1";
const API_URL="https://newsapi.org/v2/top-headlines";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient,private storage: Storage,private networkService: NetworkService) { }
  
  getNews(){
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      // Return the cached data from Storage
      return from(this.getLocalData('feeds'));
    }else{
      return this.httpClient.get(`${API_URL}?sources=techcrunch&apiKey=${API_KEY}`).pipe(
        tap(res => {
          this.setLocalData('feeds', res);
        })
      )
    }
    
  }
  // Save result of API requests
  private setLocalData(key, data) {
    this.storage.set(`${API_STORAGE_KEY}-${key}`, data);
  }
 
  // Get cached API result
  private getLocalData(key) {
    return this.storage.get(`${API_STORAGE_KEY}-${key}`);
  }
}

