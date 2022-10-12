var App = angular.module('App', []);
App.controller('personController', function($scope, $http) {
    $http.get('./person.json')
       .then(function(res){
            $scope.persons = res.data;                
        });

    $scope.deletePerson = (person) => {
        const personIndex = $scope.persons.findIndex(el => el.id === person.id);
        if (personIndex === -1) {
            return;
        }
        $scope.persons.splice(personIndex, 1);
    }

    $scope.addPerson = () => {
        if(!$scope.firstName || !$scope.lastName || !$scope.middleName || !$scope.cardNumber || !$scope.city || !$scope.birthDate) {
            return;
        }

        const person = {
            id: $scope.persons.length !== 0 ? $scope.persons[$scope.persons.length - 1] + 1 : 1,
            firstName: $scope.firstName,
            middleName: $scope.middleName,
            lastName: $scope.lastName,
            cardNumber: $scope.cardNumber,
            city: $scope.city,
            birthDate: $scope.birthDate
        }

        $scope.persons.push(person);
    }
});
