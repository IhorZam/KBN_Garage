import axios from 'axios'


var name = new Vue({
   el: "#name",
    data:{
       name: "",
        desc: "",
        user_id: localStorage.getItem('user_id')
    },

    mounted(){
       axios.post('url', localStorage.getItem('user_id')).then(response => {
            this.name = response.data.name;
            this.desc = response.data.desc;
       }).catch(e => {
           this.errors.push(e);
       });
    },
    delimiters: ["<%","%>"]
});

var request = new Vue({
   el: '#request-form',
    data:{
       car: "",
        age: 0,
        engine: "",
        problem: "",
        user_id: localStorage.getItem('user_id')
    },
    methods: {
       send(){
           axios.post('url', data).then(request => {

           }).catch(e => {
              this.errors.push(e);
           });
       }
    }

});