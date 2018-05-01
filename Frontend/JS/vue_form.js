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

        },

        registerUser(){

        }
    }
})