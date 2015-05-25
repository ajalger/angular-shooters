(function(){
    
    angular.module('myApp')
    .filter('myFilter', myFilter);
    function myFilter() {
        var vm = this;
    }

})();