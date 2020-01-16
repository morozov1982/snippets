new Vue({
    el: '#vue-app',
    data: {
        age: 37,
        x: 0,
        y: 0,
    },
    methods: {
        add: function(inc) {
            this.age += inc;
        },
        subtract: function(dec) {
            this.age -= dec;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            console.log('prevent');
        },
        /* Keyboard Events */
        logName: function() {
            console.log('Чё, имя печатаешь?');
        },
        logAge: function() {
            console.log('Чё, возраст печатаешь?');
        }
    }
});