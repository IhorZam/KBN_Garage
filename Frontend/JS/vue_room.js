Vue.component('call', {
   template: '<div class=\'call\'>' +
   '<div class="name"></div>' +
   '<div class="user"></div>' +
   '<button class="description"></button>' +
   '<div class="status"></div>' +
   '<button class="change"></button>' +
   '</div>'

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