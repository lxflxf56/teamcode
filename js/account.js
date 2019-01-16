var app = angular.module("myApp",[]);
var account=JSON.parse(sessionStorage.account);
app.controller('accoutController',function ($scope,$http) {
    if (account==null){
        $http({
            method:'get',
            url:'/api/account',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Authorization
            }
        }).then(function(resp){
            account=resp.data;
            $scope.account=account;
            sessionStorage.setItem('account', JSON.stringify(account));
        },function(resp){
            window.location.href = '/login.html';
            console.log(resp);
        });
    }
    $scope.account=account;
    $scope.hasaccount=true;
});

