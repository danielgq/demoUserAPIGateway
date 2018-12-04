import axios from 'axios'

export default {
    async getUsers() {
        console.log('calling aws api getuserlist')
        return await new Promise((resolve, reject) => {
                axios.get('https://9qw4ir47zj.execute-api.ap-northeast-1.amazonaws.com/demo1/getuserlist').then((result) => {
                    let users = result.data.Items
                    console.log(users);
                    resolve(users);
                }).catch((err) => {
                    console.log('error happens !!!!!!1' + err);
                })
            }
        )
    },

    deleteUser: (userName) => {
        console.log('calling aws api deleteUser');
        return new Promise((resolve, reject) => {
                let params = {
                    "userName": userName
                }
                axios.delete('https://9qw4ir47zj.execute-api.ap-northeast-1.amazonaws.com/demo1/deleteuser', {data: params}).then((result) => {
                    console.log(' deleteUser success!!!');
                    resolve({});
                }).catch((error) => {
                        console.log('error!!!!' + error);
                    }
                )
            }
        )
    },

    async addUser(user) {
        return await new Promise((resolve, reject) => {
            axios.post('https://9qw4ir47zj.execute-api.ap-northeast-1.amazonaws.com/demo1/adduser', user).then((result) => {
                console.log(' adduser success!!!');
                resolve({});
            }).catch((error) => {
                reject(error)
                console.log('error!!!!' + error.toString());
            })
        })
    },

    async editUser(user) {
        return await new Promise((resolve, reject) => {
            axios.put('https://9qw4ir47zj.execute-api.ap-northeast-1.amazonaws.com/demo1/updateUser', user).then((result) => {
                console.log('updateUser success!!!');
                resolve({});
            }).catch((error) => {
                reject(error)
                console.log('error!!!!' + error.toString());
            })
        })
    }
}

