var mdTestModule = angular.module('mdTestModule', []);

mdTestModule.component('seeColorCtrl', {
    template: '<h1>Home</h1><p>Hello, {{ $ctrl.user.name }} !</p>',
    controller: function () {
        this.user = { name: 'world' };
    }
});

mdTestModule.component('itemWithTooltip', {
    template: '<span tooltip="simple tooltip here" tooltip-position="buttom" style="color:red;">ERROR<span>',
    controller: function () {
        
    }
});