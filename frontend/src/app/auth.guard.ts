import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const token = localStorage.getItem('token');
        const userRole = localStorage.getItem('role');
        const requiredRole = route.data['role'];

        if(token && userRole && userRole === requiredRole) {
            // user is authenticated and has the required role
            return true;
        } else {
            // User is not authenticated or doesn't have the required role, redirect to login page
            this.router.navigate(['/']);
            return false;
        }
        
    }
}