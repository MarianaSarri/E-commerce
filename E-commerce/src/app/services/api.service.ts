import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvironmentModel } from '../models/env';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private environment: EnvironmentModel;

  constructor(
    private http: HttpClient,
    @Inject('environment') private env: EnvironmentModel,
  ) {
    this.environment = this.env;
  }

  /**
   * Method to perform a POST request to a custom API.
   * @param apiUrl Full API URL
   * @param request
   * @param headers
   * @returns
   */

  public performPost<T> (url: string, request: T, headers: HttpHeaders = new HttpHeaders()): Observable<T> {
    const apiUrl = this.environment.apiUrl + url;
    return this.http.post<T>(apiUrl, request, { headers });
  }

  public performPut<T> (url: string, request: T, headers: HttpHeaders = new HttpHeaders()): Observable<T> {
    const apiUrl = this.environment.apiUrl + url;
    return this.http.put<T>(apiUrl, request, { headers });
  }

  public performGet<T> (url: string): Observable<T> {
    const apiUrl = this.environment.apiUrl + url;
    return this.http.get<T>(apiUrl);
  }

  public performDelete<T> (url: string): Observable<T> {
    const apiUrl = this.environment.apiUrl + url;
    return this.http.delete<T>(apiUrl);
  }

}