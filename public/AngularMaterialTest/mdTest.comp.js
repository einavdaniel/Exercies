var mdTestModule = angular.module('mdTestModule', []);

mdTestModule.component('seeColorCtrl', {
    template: '<h1>Home</h1><p>Hello, {{ $ctrl.user.name }} !</p>',
    controller: function () {
        this.user = { name: 'world' };
    }
});