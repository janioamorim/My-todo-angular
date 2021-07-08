import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../model/produto";
import { Observable, EMPTY } from "rxjs";
import { map, catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = "http://localhost:3000/products";

    //as credencias de acesso/autorização ao dominio
  // e colocar dados no dominio cruzado
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  //Função generica para mostrar mensagens depois de cada ação
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  //Metodo Post - criar novo produdo
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, JSON.stringify(product), this.httpOptions)
    .pipe(
      retry(1),
      catchError((e) => this.errorHandler(e))
    );
  }

  // Metodo get para listar os produtos
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      retry(1),
      catchError((e) => this.errorHandler(e))
    );
  }

  //Metodo para listar por id
  readById(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl+"/"+id).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(this.baseUrl+"/", JSON
    .stringify(product), this.httpOptions)
    .pipe(
      retry(1),
      catchError((e) => this.errorHandler(e))
    );
  }

  //deletar por Id
  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(this.baseUrl+"/"+id, this.httpOptions)
    .pipe(
      retry(1),
      catchError((e) => this.errorHandler(e))
    );
  }

  // tratamento do erro
  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
