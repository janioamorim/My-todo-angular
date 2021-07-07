import { Injectable } from "@angular/core";
import { EMPTY, Observable } from "rxjs";
import { Produto } from "../model/produto";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";


@Injectable({
    providedIn: "root",
})

export class ProductService {
    baseUrl = "http://localhost:3000/produtos";

    constructor(private http: HttpClient) {}

    read(): Observable<Produto[]> {
        return this.http.get<Produto[]>(this.baseUrl).pipe(
          map((obj) => obj),
          catchError((e) => this.errorHandler(e))
        );
      }
  
    create(produto: Produto): Observable<Produto> {
      return this.http.post<Produto>(this.baseUrl, produto).pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
    } 

    errorHandler(e: any): Observable<any> {       
        return EMPTY;
      }
    
  }