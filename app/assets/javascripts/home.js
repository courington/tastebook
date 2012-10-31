(function(){
    var getTastes = (function(){
        

        var initialize = function(){
            _setListeners();
        }
        

        var _setListeners = function(){
            $("#new-tastes").click(function(e){
                e.preventDefault();
                _getData();
                $(this).hide();
            });
        }

        var _getData = function(){
                var sampleData = $.getJSON("/assets/sampleData/tastes.json", function(){
                	var stringTaste = sampleData.responseText;
                	var objTaste = jQuery.parseJSON(stringTaste);
                	
                	$(objTaste).each(function(i, taste){
                		console.log(taste);
                		var tastePhoto = taste.photo;
                		var userAvatar = taste.user.avatar;
                		var userName = taste.user.username;
                		//var address = taste.venue.address;
                		//var city = taste.venue.city;
                		//var notes = taste.notes;
                		var foodName = taste.food.name;
                		

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