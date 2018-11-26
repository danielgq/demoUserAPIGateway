import BaseController from './baseController';
import userService from '../services/userService'

export default class UserController extends BaseController {

    handleUsers(req, res) {
        try {
            console.log('calling handleUsers')
            const method = req.query.method

            switch (method){
                case 'getUsers':
                    console.log('calling getUsers')
                    userService.getUsers().then(data => {
                        res.status(200).json(this.result(data));
                    });
                    break;
                case 'deleteUser':
                    console.log('calling deleteUser')
                    const userName = req.body.data.userName;
                    userService.deleteUser(userName).then(data => {
                        res.status(200).json(this.result(data))
                    });
                    break;
                case 'addUser':
                    console.log('calling addUser')
                    const user = req.body;
                    userService.addUser(user).then(data => {
                        res.status(200).json(this.result(data))
                    });
                    break;
                case 'editUser':
                    console.log('calling addUser')
                    const editedUser = req.body;
                    userService.editUser(editedUser).then(data => {
                        res.status(200).json(this.result(data))
                    });
                    break;
            }

        } catch (e) {
            res.status(400).json({
                msg: e.message
            });
        }
    }

}
