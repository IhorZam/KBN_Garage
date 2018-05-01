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
                alert("Invalid login");
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

var isLogined = function(){
    var loggined = false;
    axios.get('/check_auth/').then(function (response){
        loggined = response.data.auth;
    }).catch(function(e){

    });
    return loggined;
};

var logout = new Vue({
    el: '#logout',
    data: {
        isLoggined: false
    },
    mounted(){
        this.isLoggined = isLogined();
    },
    methods: {
        logout(){
            axios.post('logout').then(function(responce){}).catch(function(e){});
        }
    }

});