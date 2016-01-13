angular.module('NoteWrangler').controller('NotesEditController', function($scope,User, Note, Category, $routeParams, $location){
  $scope.note = Note.get({id: $routeParams.id})
  $scope.isSubmitting = false;
  $scope.categories = Category.query();
  $scope.users = User.query();

  $scope.saveNote = function(note){
    $scope.isSubmitting = true;

    note.$update().finally(function(){     // promise 'finally'
      $scope.isSubmitting = false;
      $location.path("/notes/" + note.id);  //$location is like windows.location in JS, this will redirect
    });
  }
});