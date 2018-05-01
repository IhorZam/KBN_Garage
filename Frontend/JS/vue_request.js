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
    },
    methods: {
       send(){
           axios.post('/post_req/', {
               title: this.car,
               descr: this.age + " " + this.engine + " " + this.problem
           }).then(function(request){
                location.href = '/room'
           }).catch(function(e){

           });
       }
    },
    delimiters: ["<%","%>"]

});
