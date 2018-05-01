var axios = require('axios');


var name = new Vue({
   el: "#name",
    data:{
       name: "",
        desc: "",
        user_id: localStorage.getItem('user_id')
    },

    mounted(){
       axios.post('url', localStorage.getItem('user_id')).then(function(response){
            this.name = response.data.name;
            this.desc = response.data.desc;
       }).catch(function(e){

       });
    },
    delimiters: ["<%","%>"]
});

var request = new Vue({
   el: '#request-form',
    data:{
       car: "",
        age: 2000,
        engine: "",
        problem: "",
        user_id: localStorage.getItem('user_id')
    },
    methods: {
       send(){
           axios.post('url', data).then(function(request){

           }).catch(function(e){

           });
       }
    },
    delimiters: ["<%","%>"]

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