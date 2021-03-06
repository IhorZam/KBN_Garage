var axios = require('axios');

var all = new Vue({
   el: "#all",
   data: {
       checked: false,
       isLogging: true,
       resultName: "",
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
                alert("Invalid login");
            });
        },

        registerUser(){
            axios.post('/signup/', {
                name: this.resultName,
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

