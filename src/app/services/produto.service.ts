import { Injectable } from "@angular/core";
import { EMPTY, Observable } from "rxjs";
import { Product } from "../model/produto";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
    providedIn: "root",
})

export class ProductService {
    baseUrl = "http://localhost:3000/products";

    constructor(private http: HttpClient, private snackBar: MatSnackBar,) {}

    read(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl).pipe(
          map((obj) => obj),
          catchError((e) => this.errorHandler(e))
        );
      }

    create(product: Product): Observable<Product> {
      return this.http.post<Product>(this.baseUrl, product).pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
    }

    errorHandler(e: any): Observable<any> {
        return EMPTY;
    }

  }
