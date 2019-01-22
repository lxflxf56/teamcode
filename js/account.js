var app = angular.module("myApp",[]);
var seacc=sessionStorage.account;
var account;
if (seacc!=null){
    account=JSON.parse(seacc);
}
app.controller('accoutController',function ($scope,$http) {
    if (account==null&&Authorization!=null){
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
            $scope.hasaccount=true;
        },function(resp){
            console.log(resp);
        });
    }
    $scope.account=account;

});

