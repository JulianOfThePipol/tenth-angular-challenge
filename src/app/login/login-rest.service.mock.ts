import { of } from 'rxjs';
import { userLoginMock } from '../mocks/data.mock';
import { LoginData } from './../models/rest.models';

export class LoginRestServiceMock {
    loginUser (userData: LoginData) {
        return of(userLoginMock)
    }
}