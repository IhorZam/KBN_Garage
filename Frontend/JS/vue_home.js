
var data_set =  require('./data/data.js');
var axios = require('axios');



var sheet = ['engine', 'odo', 'srs', 'immo','abs', 'ecu', 'ps', 'dpf'];

var isLogined = function(){
    var loggined = false;
    axios.get('/check_auth/').then(function (response){
        loggined = response.data.auth;
    }).catch(function(e){

    });
    return loggined;
};

var room = new Vue({
    el: '#my-calls',
    data:{
        href: ""
    },
    mounted(){
        isLogined()? this.href = "/room" : this.href = "/form";
    }

});

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
           axios.post('/logout/').then(function(responce){}).catch(function(e){});
       }
    }


});


Vue.component('cell', {

    props: ['message', 'message2', 'href', 'image'],

    template: "<div class=\"blck\">\n" +
    "                <a :href=\"href\" class=\"inner\" >\n" +
    "                    <img width=\"170\" height=\"150\" :src=\"image\">\n" +
    "                        <%message%>\n" +
    "                </a>\n" +
    "                <a :href=\"href\" class=\"hover-inner\" ><%message2%></a>\n" +
    "            </div>",

    delimiters: ["<%","%>"]

});




sheet.forEach(function (value) {
    new Vue({
        el: '#' + value,
        data: {
            isOn: false,
            href: "",
            image: data_set[value].icon,
            message: data_set[value].name,
            message2: data_set[value].tooltip
        },

        methods:{
        },

        mounted(){
            isLogined()? this.href = "/request" : this.href = "/form";
        },

        delimiters: ["<%","%>"]


})});
