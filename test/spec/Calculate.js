

describe ("My calculator", function() {

    it("should be able to deal with strings", function() {
        expect(function()
        {checkNum("hello")}).toThrow(new Error("show fonzie"));
    })


})
