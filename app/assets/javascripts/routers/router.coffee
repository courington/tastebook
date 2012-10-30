class TasteBookApp.Router extends Backbone.Router
        
    routes:
        "": "index"
        
    index: ->
        party = new TasteBookApp.Lunch()
        view = new TasteBookApp.LunchView(model:Lunch)
        $('body').append(view.render().el)