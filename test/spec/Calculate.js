

describe ("My Converter", function() {

    it("should be able to deal with strings", function() {
        expect(function()
        {Calculate.checkNum("hello")}).toThrow(new Error("show fonzie"));
    })

//    it("should be a positive number", function(){
//        expect(function()
//        {Converter.checkIsPositiveNumber(-2)}).toThrow(new Error("not a positive number"));
//    })



})
