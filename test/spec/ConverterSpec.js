

describe ("My Converter", function() {

    it("should be able to deal with strings", function() {
        expect(function()
        {Converter.convertFromImperialToMetric("hello")}).toThrow(new Error("not a number"));
    })

    it("should be a positive number", function(){
        expect(function()
        {Converter.checkIsPositiveNumber(-2)}).toThrow(new Error("not a positive number"));
    })



})
