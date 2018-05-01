module.exports = function(grunt) {

    //Налаштування збірки Grunt
    var config = {
        //Інформацію про проект з файлу package.json
        pkg: grunt.file.readJSON('package.json'),

        //Конфігурація для модуля browserify (перетворює require(..) в код
        browserify:     {
            //Загальні налаштування (grunt-browserify)

            'Frontend/Assets/home.js':['Frontend/JS/vue_home.js'],
            'Frontend/Assets/form.js':['Frontend/JS/vue_form.js'],
            'Frontend/Assets/request.js':['Frontend/JS/vue_request.js'],
            'Frontend/Assets/room.js':['Frontend/JS/vue_room.js'],

            options:      {
                //brfs замість fs.readFileSync вставляє вміст файлу
                transform:  [ require('brfs') ],
                browserifyOptions: {
                    //Папка з корнем джерельних кодів javascript
                    basedir: "Frontend/JS"
                }
            },

            //Збірка з назвою піца
            garage: {
                src:        'Frontend/JS/Main_Page.js',
                dest:       'Frontend/Assets/main.js'
            }
        }
    };

    //Налаштування відстежування змін в проекті


    //Ініціалузвати Grunt
    grunt.initConfig(config);

    //Сказати які модулі необхідно виокристовувати
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');



    //Список завданнь по замовчуванн
    grunt.registerTask('default',
        [
            'browserify'
            //Інші завдання які необхідно виконати
        ]
    );
};