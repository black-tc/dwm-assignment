import { FormControl } from "@angular/forms";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {  Students, Employed,    } from "./datas";

@Injectable({
  providedIn: "root",
})
export class DataService {
  API_URL = "http://localhost:8000/api/";

  constructor(private _http: HttpClient) {}



  getAllEmployed() {
    let myReq = this.API_URL + "indicators";
    return this._http.get<Employed[]>(myReq);
  }

  getAllStudents() {
    let myReq = this.API_URL + "students";
    return this._http.get<Students[]>(myReq);
  }

  getAllMales() {
    let myReq = this.API_URL + "males";
    return this._http.get<Students[]>(myReq);
  }

  getAllFemales() {
    let myReq = this.API_URL + "females";
    return this._http.get<Students[]>(myReq);
  }

  getAllNust() {
    let myReq = this.API_URL + "nust";
    return this._http.get<Students[]>(myReq);
  }

  getAllIUM() {
    let myReq = this.API_URL + "ium";
    return this._http.get<Students[]>(myReq);
  }

  getAllPart() {
    let myReq = this.API_URL + "part-time";
    return this._http.get<Students[]>(myReq);
  }

  getAllFull() {
    let myReq = this.API_URL + "full-time";
    return this._http.get<Students[]>(myReq);
  }

  getAllDistance() {
    let myReq = this.API_URL + "distance";
    return this._http.get<Students[]>(myReq);
  }


}
