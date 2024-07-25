import { Injectable } from '@angular/core';
import { publicDecrypt } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  data: string = '';
  public saveData(key: string, value: object){
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
