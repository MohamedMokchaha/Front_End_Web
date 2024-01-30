import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    private apiUrl = 'https://scientific-even-krypton.glitch.me/api';
    private tokenKey = 'currentUser';
    private isAuthenticatedFlag = false;
    private currentUser: any;

    constructor(private http: HttpClient) {}


    login(userData: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/login`, userData).pipe(
            map(response => {
                if (response && response.token) {
                    localStorage.setItem(this.tokenKey, response.token);
                    localStorage.setItem('currentUser', JSON.stringify(userData));

                }
                return response;
            }),
            catchError(error => {
                console.error('Error during login:', error);
                throw error;
            })
        );
    }
    signUp(userData: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/register`, userData);
    }

    logout(): void {
        this.isAuthenticatedFlag = false;
        this.currentUser = null;
    }
    getCurrentUser(): any {
        return this.currentUser;
    }
    getCurrentUserId(): string {
        const storedUserData = JSON.parse(localStorage.getItem('currentUser'));
        return storedUserData ? storedUserData.id : null;
    }
    isAuthenticated(): boolean {
        return !!localStorage.getItem(this.tokenKey);
    }
    getjobs(){
        return this.http.get<any[]>(`${this.apiUrl}/jobs`);
    }
    updateUser(data: any, httpOptions: any): Observable<any> {

        const url = `${this.apiUrl}/users`;
        return this.http.put<any>(url, data, httpOptions);
    }
}
