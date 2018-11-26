import Router from "express";
import authorization from '../middlewares/authorizationRequest';
import UserController from '../controllers/userController';

const router = Router();
const userController = new UserController();

router.post('/', authorization, userController.handleUsers.bind(userController));



module.exports = router