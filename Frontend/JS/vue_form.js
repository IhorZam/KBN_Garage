var axios = require('axios');

var all = new Vue({
   el: "#all",
   data: {
       checked: false,
       isLogging: true,
       resultUsername: "",
       resultEmail: "",
       resultPassword: "",
       resultTelephone: "",
       rememberMe: false
   },
    methods: {
       login(){
           this.checked = true;
           this.isLogging = true;
       },
       register(){
           this.checked = true;
           this.isLogging = false;
       },
        loginUser(){
            axios.post('/login/', {username: this.resultUsername, password: this.resultPassword}).then(function(response){
                location.href = '/request'
            }).catch(function (e) {

            });
        },

        registerUser(){
            axios.post('/signup/', {
                username: this.resultUsername,
                password: this.resultPassword,
                email: this.resultEmail,
                telephone: this.resultTelephone
            }).then(function(response){
                location.href = '/request'
            }).catch(function (e) {

            });
        }
    }
});