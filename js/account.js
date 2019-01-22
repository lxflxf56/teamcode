var sesacc=sessionStorage.account;
app.controller('accoutController',function ($scope,$http) {
    var account;
    if (sesacc!=null){
        account=JSON.parse(sesacc);
        $scope.hasaccount=true;
        $scope.account=account;
    }
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
});

