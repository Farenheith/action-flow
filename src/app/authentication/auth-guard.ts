import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    private static cenario: string;
    private static _onChange = new Array<(newId: string) => void>();

    static getCenarioId(): string {
        if (!this.IsReady()) {
            this.cenario = localStorage.getItem('cenario');
        }

        return this.cenario;
    }

    static setCenarioId(newId: string) {
        localStorage.setItem('cenario', newId);
        this.cenario = newId;
        if (this.IsReady()) {
            this._onChange.forEach(obs => obs(this.cenario));
        }
    }

    static OnCenarioChange(observer: (newId: string) => void) {
        this._onChange.push(observer);
        this.getCenarioId();
        if (this.IsReady()) {
            observer(this.cenario);
        }
    }

    static IsReady(): boolean {
        return this.cenario && this.cenario !== '';
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean> | Promise<boolean> | boolean {

        AuthGuard.getCenarioId();

        return (AuthGuard.IsReady());
    }
}
