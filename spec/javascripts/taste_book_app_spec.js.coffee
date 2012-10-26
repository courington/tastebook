describe "TasteBookApp", ->
    it "passes a sanity test", ->
        app = new TasteBookApp()
        expect(app.sanity()).toEqual(true)