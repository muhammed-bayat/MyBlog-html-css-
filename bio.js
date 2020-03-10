$(document).ready(function() {
    $("#off").on("click", function() {
        $("body").css("background-color", "#000000");
        $(".door").css("border", "solid 18px #232323")
        $(".switch").css("background-color", "#232323")
        $(".glass").css("border", "none")
        $(".base").css("background-color", "#232323")
    })
    $("#on").on("click", function() {
        $("body").css("background-color", "#DFDFDF");
        $(".door").css("border", "solid 18px #39393B")
        $(".switch").css("background-color", "#58585B")
        $(".glass").css("border-bottom", "solid 2px #aaaaaa")
        $(".base").css("background", "#39393B")
    })
    setInterval(function() {
        var lights = [];
        lights = $(".port").toArray();

        function shuffle(array) {
            var currIndex = array.length,
                tempVal, randomIndex;
            while (0 !== currIndex) {
                randIndex = Math.floor(Math.random() * currIndex);
                currIndex -= 1;
                tempValue = array[currIndex];
                array[currIndex] = array[randIndex];
                array[randIndex] = tempValue;
            }
            return array;
        }
        lights = shuffle(lights);
        for (var j = 0; j < lights.length; j++) {
            var lights = [];
            lights = $(".port").toArray();

            function shuffle(array) {
                var currIndex = array.length,
                    tempVal, randomIndex;
                while (0 !== currIndex) {
                    randIndex = Math.floor(Math.random() * currIndex);
                    currIndex -= 1;
                    tempValue = array[currIndex];
                    array[currIndex] = array[randIndex];
                    array[randIndex] = tempValue;
                }
                return array;
            }
            lights = shuffle(lights);
            $(lights[j]).css("background-color", "#ABC233");
        }
        setTimeout(function() {
            for (var i = 0; i < lights.length; i++) {
                $(lights[i]).css("background-color", "#000000")
            }
        }, 100);
    }, 200)

})