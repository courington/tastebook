class window.TasteBookApp
    sanity: -> true

    constructor: ->
        new TasteBookApp.Router()
        Backbone.history.start()