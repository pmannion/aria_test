
var addChar = (function(input, character) {
    if(input.value == null || input.value == "0")
        input.value = character
    else
        input.value += character
})

var compute = (function(form) {
    form.display.value = eval(form.display.value)
})


var checkNum = (function(str) {
    for (var i = 0; i < str.length; i++) {
        var ch = str.substring(i, i+1)
        if (ch < "0" || ch > "9") {
            if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
                && ch != "(" && ch!= ")") {
                $("#the-fonz-1").show();
                return false
            }
        }
        $("#the-fonz").show();
    }
    return true

})

