import { PreloadingStrategy, Route } from "@angular/router";
import { of, timer, Observable, mergeMap  } from 'rxjs';



export class MainPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        const loadRoute = (delay:any) => delay
            ? timer(150).pipe(mergeMap(_ => load()))
            : load();
        return route.data && route.data['preload'] 
            ? loadRoute(route.data['delay'])
            : of(null);
      }
}

export const APP_ROUTES_MODULE_PROVIDER = [MainPreloadingStrategy];