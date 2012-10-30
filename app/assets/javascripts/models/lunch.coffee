class window.TasteBookApp.Lunch extends Backbone.Model
	url: '/assets/sampleData/tastes.json'

model = new TasteBookApp.Lunch()
model.fetch
	success: =>
		console.log model