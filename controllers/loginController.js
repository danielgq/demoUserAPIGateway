import tokenService from '../services/tokenService'
import BaseController from './baseController';

export default class LoginController extends BaseController{
    login(req, res, next){
        console.log('calling LoginController')
        const token = tokenService.generateToken(req, res, next);
        token !== null ? (res.status(200).json(this.result({token}))) :  res.status(401).json();
    }
}