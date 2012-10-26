describe "Lunch", ->
    it "can be initialized", ->
        expect(-> new TasteBookApp.Lunch()).not.toThrow(new TypeError("undefined is not a function"));