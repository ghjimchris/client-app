import {Injectable} from '@angular/core';
import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  axios;

  constructor() {
    this.axios = Axios.create({
      params: {
        token: 'this is token'
      }
    });
  }

  getAxios() {
    return this.axios;
  }
}
