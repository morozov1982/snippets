new Vue({
    el: '#vue-app',
    data: {
        name: 'Fit Moralex',
        job: 'Free',
        website: 'http://www.fit-moralex.com',
        websiteTag: '<a href="http://www.fit-moralex.com">Fit Moralex site</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ', ' + this.name + '!';
        }
    }
});