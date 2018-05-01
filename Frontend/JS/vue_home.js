import axios from 'axios'
import * as response from "vue";

var data_set = {
    engine: {
        name: "Engine",
        id: "engine",
        icon: "/static/Check.svg",
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
    odo: {
        name: "ODO",
        id: "odo",
        icon: "/static/odo.svg",
        tooltip: "Коррекція одометрів",
        description: "Коррекція показників одометра після заміниб конвертація з миль в км, фаренгейтів в цельсії, ремонт.\n" +
        "- Погасли показники одометра?\n" +
        "- Замінили панель приладів?\n" +
        "Заповніть заявку"
    },
    srs: {
        name: "SRS",
        id: "srs",
        icon: "/static/airbag.svg",
        tooltip: "Діагностика та ремонт блоків SRS",
        description: "Діагностика та ремонт, відновлення після ДТП (Crash Data) блокыв керування подушок безпеки.\n" +
        "- З\"явилась іконка SRS на панелі?\n" +
        "- Авто побувало у ДТП?\n" +
        "Заповніть заявку"
    },
    immo: {
        name: "IMMO",
        id: "immo",
        icon: "/static/immo.svg",
        tooltip: "Все що стосується систем іммобілайзерів",
        description: "Діагностика та ремонт електронних систем іммобілайзера, виготовлення та адаптація чіпів і ключах, видалення з пам\"яті втрачених ключів.\n" +
        "- Авто не заводиться?\n" +
        "- Засвітився індикатор іммобілайзера?\n" +
        "- Втратили ключі від авто?\n" +
        "- Бажаєте мати ще один ключ?\n" +
        "Заповніть заявку"
    },
    abs: {
        name: "ABS/ESP",
        id: 'abs',
        icon: "/static/abs.svg",
        tooltip: "Обслуговування електроніки гальмівної системи",
        description: "Діагностика та ремонт електроніки гальмівної системи.\n" +
        "- Засвітився індикатор ABS/ESP ?\n" +
        "- Некорректна робота системи ABS/ESP ?\n" +
        "- Вийшов з ладу блок керування ABS?\n" +
        "Заповніть заявку"
    },
    ecu: {
        name: "ECU",
        id: 'ecu',
        icon: "/static/ecuu.svg",
        tooltip: "Ремонт електронних блоків авто",
        description: "Діагностика та ремонт електронних блоків керування. Адаптація та налаштування нових блоків після заміни. Оновлення ПЗ.\n" +
        "- Вийшов з ладу блок керування?\n" +
        "- Не вдається адаптувати новій чи бувший в користуванні блок?\n" +
        "Заповніть заявку."
    },
    ps: {
        name: "PS",
        id: 'ps',
        icon: "/static/ps.svg",
        tooltip: "Все, що стосується програмного забезпечення авто",
        description: "Оновлення та заміна програмного забезпечення. Кодування та модифікація комплектації авто. Адаптація мови.\n" +
        "- Дообладнали авто і потрібно змінити комплектацію?\n" +
        "- Замінили блок і він працює не правильно?\n" +
        "- Бажаєте мати останню версію ПЗ?\n" +
        "Заповніть заявку."
    },
    dpf: {
        name: "DPF\\FAP\\ADDBlue\\CAT",
        id: 'dpf',
        icon: "/static/Check.svg",
        tooltip: "Програмне видалення сажових фільтрів, каталізаторів",
        description: "Програмне видалення сажевіих фільтрів, каталізаторів, присадок AddBlue, Olys та інше.\n" +
        "- Сажевий фільтр не працює?\n" +
        "- Авто в аварійному режимі по вині DPF?\n" +
        "- Каталізатор сплавився?\n" +
        "Заповніть заявку."
    }

};





var sheet = ['engine', 'odo', 'srs', 'immo','abs', 'ecu', 'ps', 'dpf'];

var isLogined = function(){
    let loggined = false;
    axios.get('url').then(response => {
        loggined = response.data;
        }).catch(e =>{
        this.errors.push(e);
    });
    return loggined;
};

var room = new Vue({
    el: '#my-calls',
    data:{
        href: ""
    },
    mounted(){
        isLogined()? this.href = "/request" : this.href = "/form";
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
