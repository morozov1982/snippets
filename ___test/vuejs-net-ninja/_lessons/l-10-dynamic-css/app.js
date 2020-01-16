new Vue({
    el: '#vue-app',
    data: {
        available: false,
        nearby: false
    },
    methods: { // Запускаются оба метода (функции)
        
    },
    computed: { // Запускается только та функция, которая необходима
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});