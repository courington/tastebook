// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

// $.getJSON "/assets/sampleData/tastes.json", (json) ->
// sampleData = json.responseText
// console.log json

(function(){
    var getTastes = (function(){
        var initialize = function(){
            _setListeners();
        }
        var _setListeners = function(){
            $("#new-tastes").click(function(e){
                e.preventDefault();
                //get the javascript object and assign a variable
                var sampleData = $.getJSON("/assets/sampleData/tastes.json", function(){
                	var stringTaste = sampleData.responseText;
                	var objTaste = jQuery.parseJSON(stringTaste);
                	//console.log(objTaste);
                	$(objTaste).each(function(){
                		var tastePhoto = this.photo;
                		var userName = this.user.name;
                		var userAvatar = this.user.avatar;
                		console.log(tastePhoto, userName, userAvatar);
                	});
                });
            });
        }
        
        return {init: initialize}
    }());
    this.getTastes = getTastes;
}).call(this);

$(document).ready(function(){
    getTastes.init();
});