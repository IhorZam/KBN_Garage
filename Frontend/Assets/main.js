(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
        engine : [$center.find('#engine'), "engine"],
        odo : [$center.find('#odo'), "odo"],
        srs : [$center.find('#srs'), "srs"],
        immo : [$center.find('#immo'), "immo"],
        abs : [$center.find('#abs'), "abs"],
        ecu : [$center.find('#ecu'), "ecu"],
        ps : [$center.find('#ps'), "ps"],
        dpf : [$center.find('#dpf'), "dpf"]
    };

    /*for (element in buttons){
        buttons[element][0].attr("data-tooltip",data[buttons[element][1]].tooltip);
        if (is_logged())
            buttons[element][0].find('a').attr("href","request.html");
        else
            buttons[element][0].find('a').attr("href","form.html");
        buttons[element][0].find('a').click(function () {
           localStorage.setItem("data", JSON.stringify(data[buttons[element][1]]));
        });
    }
*/
});
},{"./data/data":2}],2:[function(require,module,exports){


var data = {
    engine:
        {
            name: "Двигун",
            tooltip: "Діагностика силового агрегату та трансміссії",
            description: "Діагностика та ремонт електронних компонентів, які стосуються двигуна та трансмісії.\n" +
            "- Засвітився чек?\n" +
            "- Немає потужності?\n" +
            "- Не рівно працює?\n" +
            "- Двигун на запускається?\n" +
            "- Надмірне споживання пального?\n" +
            "- Вийшов з ладу блок керування двигуном?\n" +
            "Заповніть заявку"
    },
    odo:
        {
        name: "ODO",
        tooltip: "Коррекція одометрів",
        description: "Коррекція показників одометра після заміниб конвертація з миль в км, фаренгейтів в цельсії, ремонт.\n" +
        "- Погасли показники одометра?\n" +
        "- Замінили панель приладів?\n" +
        "Заповніть заявку"
    },
    srs:
        {
            name: "SRS Airbag",
            tooltip: "Діагностика та ремонт блоків SRS",
            description: "Діагностика та ремонт, відновлення після ДТП (Crash Data) блокыв керування подушок безпеки.\n" +
            "- З\"явилась іконка SRS на панелі?\n" +
            "- Авто побувало у ДТП?\n" +
            "Заповніть заявку"
        },
    immo:
        {
            name: "IMMO",
            tooltip: "Все що стосується систем іммобілайзерів",
            description: "Діагностика та ремонт електронних систем іммобілайзера, виготовлення та адаптація чіпів і ключах, видалення з пам\"яті втрачених ключів.\n" +
            "- Авто не заводиться?\n" +
            "- Засвітився індикатор іммобілайзера?\n" +
            "- Втратили ключі від авто?\n" +
            "- Бажаєте мати ще один ключ?\n" +
            "Заповніть заявку"
        },
    abs:
        {
            name: "ABS ESP",
            tooltip: "Обслуговування електроніки гальмівної системи",
            description: "Діагностика та ремонт електроніки гальмівної системи.\n" +
            "- Засвітився індикатор ABS/ESP ?\n" +
            "- Некорректна робота системи ABS/ESP ?\n" +
            "- Вийшов з ладу блок керування ABS?\n" +
            "Заповніть заявку"
        },
    ecu:
        {
            name: "ECU",
            tooltip: "Ремонт електронних блоків авто",
            description: "Діагностика та ремонт електронних блоків керування. Адаптація та налаштування нових блоків після заміни. Оновлення ПЗ.\n" +
            "- Вийшов з ладу блок керування?\n" +
            "- Не вдається адаптувати новій чи бувший в користуванні блок?\n" +
            "Заповніть заявку."
        },
    ps:
        {
            name: "Program Software",
            tooltip: "Все, що стосується програмного забезпечення авто",
            description: "Оновлення та заміна програмного забезпечення. Кодування та модифікація комплектації авто. Адаптація мови.\n" +
            "- Дообладнали авто і потрібно змінити комплектацію?\n" +
            "- Замінили блок і він працює не правильно?\n" +
            "- Бажаєте мати останню версію ПЗ?\n" +
            "Заповніть заявку."
        },
    dpf:
        {
            name: "DPF\\FAP\\ADDBlue\\CAT",
            tooltip: "Програмне видалення сажових фільтрів, каталізаторів",
            description: "Програмне видалення сажевіих фільтрів, каталізаторів, присадок AddBlue, Olys та інше.\n" +
            "- Сажевий фільтр не працює?\n" +
            "- Авто в аварійному режимі по вині DPF?\n" +
            "- Каталізатор сплавився?\n" +
            "Заповніть заявку."
        }





};



module.exports = data;
},{}]},{},[1]);
