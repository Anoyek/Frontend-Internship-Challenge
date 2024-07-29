import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  data: string = '';
  public saveData(key: string, value: string){
    this.data = JSON.stringify(value)
    localStorage.setItem(key, this.data);
  }
  public getData(key: string){
    return localStorage.getItem(key)
  }
  public removeData(key: string){
    localStorage.removeItem(key)
  }
}
