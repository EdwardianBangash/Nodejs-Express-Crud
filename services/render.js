const axios = require('axios');
exports.homeRoute = function (req, res) {
    axios.get('http://127.0.0.1:8080/api/all').then(response => {
        res.render("index", {users:response.data});
    }).catch(error => {
        console.log(error);
    });
}

exports.addUserRoute = function (req, res) {
    res.render("add-user");
}


exports.editUserRoute = function (req, res) {
    axios.get('http://127.0.0.1:8080/api/find',{params:{id:req.query.id}}).then(response => {
        res.render("update-user", {user:response.data});
    }).catch(error => {
        console.log(error);
    });
}

exports.updateUserRoute = function (req, res) {
    axios.post('http://127.0.0.1:8080/api/update',
    {
        id:req.body.id,
        name:req.body.name,
        age:req.body.age,
    }).then(response => {
        res.redirect("/");
    }).catch(error => {
        console.log(error);
    });
}

exports.deleteUserRoute = function (req, res) {
    axios.get('http://127.0.0.1:8080/api/delete',{params:{id:req.query.id}}).then(response => {
        res.redirect("/");
    }).catch(error => {
        console.log(error);
    });
}