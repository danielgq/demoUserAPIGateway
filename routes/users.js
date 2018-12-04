import Router from "express";
import validateRequest from '../middlewares/validateRequest';
import validateLogin from '../middlewares/validateLogin';
import UserController from '../controllers/userController';
import LoginController from '../controllers/loginController';

const router = Router();
const userController = new UserController();
const loginController = new LoginController();

router.post('/', validateRequest, userController.handleUsers.bind(userController));
router.post('/login',validateLogin, loginController.login.bind(loginController));



module.exports = router