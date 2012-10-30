class window.TasteBookApp.LunchView extends Backbone.View
    
    id: "lunch"
    
    render: ->
        template = JST['lunch_view']( @model.toJSON() )
        $(@el).html(template);
        this
        #update view with _.templage() method to create template