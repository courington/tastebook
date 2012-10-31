(function(){
    var getTastes = (function(){
        

        var initialize = function(){
            _setListeners();
        }
        

        var _setListeners = function(){
            $("#new-tastes").click(function(e){
            		$(this).hide();
                e.preventDefault();
                _getData();
            });
        }

        var _getData = function(){
        				// get local javascript object
                var sampleData = $.getJSON("/assets/sampleData/tastes.json", function(){

                	//parse local js object to json
                	var stringTaste = sampleData.responseText;                	
                	var objTaste = jQuery.parseJSON(stringTaste);

                	//loop through object to get properties
                	$(objTaste).each(function(i, taste){
                		//console.log(taste);
                		var tastePhoto = taste.photo;
                		var userAvatar = taste.user.avatar;
                		var userName = taste.user.username;
                		//var address = taste.venue.address;
                		//var city = taste.venue.city;
                		//var notes = taste.notes;
                		var foodName = taste.food.name;
                		
                		//create template to render properties in view
                		var template ='<li>'+ 
                									'<div class="taste-card">'+
																		'<div class="taste-photo pull_left">'+
																			'<img src="'+tastePhoto+'"/>'+
																		'</div>'+
																		'<dl class="pull_left">'+
																			'<dt>'+
																				'<img src="'+userAvatar+'"/>'+
																			'</dt>'+
																			'<dd>'+
																				'<p>'+'<strong>'+userName+'</strong>'+'</p>'+
																				//'<p>'+address+'<span>'+city+'</span>'+'</p>'+
																				//'<p>'+notes+'</p>'+
																				'<p>'+foodName+'</p>'+
																			'</dd>'+
																		'</dl>'+
																	'</div>'+
																	'</li>'
										//render template in view
										$('#taste-list').append(template);							
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