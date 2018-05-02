var axios = require('axios');

Vue.component('call', {

    props:[
      'name',
      'user',
      'desc',
      'status'
    ],

   template: '<div class=\'call\'>' +
   '<div class="name"><%name%></div>' +
   '<div class="user"><%user%></div>' +
       '<div class="detail-desc"><%desc%></div>' +
   '<div class="status"><%status%></div>' +
   '</div>',
    delimiters: ["<%","%>"]

});

var calls_pre = [];
axios.post('/my_reqs/').then(function(response){
    var arr = response.data;
    console.log(arr);
    calls_pre = arr;
    var cell = new Vue({
        el: "#calls",
        data:{
            calls: calls_pre
        },
        delimiters: ["<%","%>"]
    });
}).catch(function(e){});


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