import { Token } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        const token = localStorage.getItem('token');
        const userRole = localStorage.getItem('role');
        const requiredRole = route.data['role'];

        if(token && userRole && userRole === requiredRole) {
            // user is authenticated and has the required role
            return true;
        }
        else if(token){
            // User is authenticated but does not have the required role, navigate to error page
            return this.router.createUrlTree(['/error']);
        }else {
            // User is not authenticated or doesn't have the required role, redirect to login page
             return this.router.createUrlTree(['/']);
            // return false;
        }
        
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }
    
}