angular.module('NoteWrangler').factory('Note', function($resource){
  return $resource('/notes/:id', {id: "@id"}, {  //@ is like 'this'
    update: {
      method: "PUT"
    }
  });
});