new Vue({
    el: '#vue-app',
    data: {
        age: 20,
        a: 0,
        b: 0
    },
    methods: { // Запускаются оба метода (функции)
        /*addToA: function() {
            console.log('addToA');
            return this.age + this.a;
        },
        addToB: function() {
            console.log('addToB');
            return this.age + this.b;
        }*/
    },
    computed: { // Запускается только та функция, которая необходима
        addToA: function() {
            console.log('addToA');
            return this.age + this.a;
        },
        addToB: function() {
            console.log('addToB');
            return this.age + this.b;
        }
    }
});