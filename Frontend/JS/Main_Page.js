$(function(){

    var data = require('./data/data');

    localStorage.setItem("isLogged", "false");

    // Function to check if the user is logged in
    var is_logged = function () {
      return localStorage.getItem("isLogged") === 'true'? true : false;
    };


    // Central element
    $center = $('.center');
    var buttons = {
        engine : [$($center.find('#engine')), "engine"],
        odo : [$($center.find('#odo')), "odo"],
        srs : [$($center.find('#srs')), "srs"],
        immo : [$($center.find('#immo')), "immo"],
        abs : [$($center.find('#abs')), "abs"],
        ecu : [$($center.find('#ecu')), "ecu"],
        ps : [$($center.find('#ps')), "ps"],
        dpf : [$($center.find('#dpf')), "dpf"]
    };

    function addAttrs(element){
        element[0].attr("data-tooltip",data[element[1]].tooltip);
        if (is_logged()) element[0].attr("href", "request.html");
        else element[0].attr("href", "form.html");
    }

    buttons.forEach(addAttrs);


});