var axios = require('axios');

Vue.component('call', {

    props:[
      'name',
      'user',
      'category',
      'desc',
      'status'
    ],

   template: '<div class=\'call\'>' +
   '<div class="name"><%name%></div>' +
   '<div class="user"><%user%></div>' +
       '<div class="category"><%category%></div>' +
   '<button class="description"></button>' +
       '<div class="detail-desc" v-show="false"><%desc%></div>' +
   '<div class="status"><%status%></div>' +
   '<button class="change"></button>' +
   '</div>',
    delimiters: ["<%","%>"]

});

var cell = new Vue({
    el: "#calls",
    data:{
        calls: []
    },
    mounted(){
        axios.get('url').then(function(response){
            this.calls = response.data.calls;
        }).catch(function(e){});
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
            axios.post('/logout/').then(function(responce){
                location.href = '/'
            }).catch(function(e){});
        }
    }


});