
var data_set =  require('./data/data.js');
var axios = require('axios');



var sheet = ['engine', 'odo', 'srs', 'immo','abs', 'ecu', 'ps', 'dpf'];


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
            href: "/request",
            image: data_set[value].icon,
            message: data_set[value].name,
            message2: data_set[value].tooltip
        },
        delimiters: ["<%","%>"]


})});
