import { environment } from './../../environments/environment';
import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";


export interface AppState {

}

export const reducer: ActionReducerMap<AppState> = {

};

export function logger (reducer:ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        localStorage.setItem('store', JSON.stringify(state))
        return reducer(state,action);
    }
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];