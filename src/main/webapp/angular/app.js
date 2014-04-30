var app = angular.module('student', []);

app.controller('MainCtrl', function($scope,$http) {
  $scope.name = "Felipe";
  $scope.pokazStudentow=function(){
	$http.get('/AngularSpringApp/studenci/lista').
                success(function(data) {
                $scope.studenci = data;
                console.log(data);
            });
        }
});
