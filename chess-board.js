var generateBoard = function(w, h, c1, c2) {    
    var area = h * w;
    var nl   = "\n";
    var board = ""; 
    var line1 = function(width, char1, char2){
        var line = "";
        for(i = 0; i <= width; i++)
        if (line.slice(-1) == char1) {
            line += char2;
        } else if (line.slice(-1) != nl){
            line += char1;
        }
        line += nl;
        return line;
    };
    var line2 = function(width, char1, char2){
        var line = "";
        for(i = 0; i <= width; i++)
        if (line.slice(-1) == char2) {
            line += char1;
            
        } else if (line.slice(-1) != nl){
            line += char2;
        }
        line += nl;
        return line;
    };


    var slice = line1(w, c1, c2) + line2(w, c1, c2);

    for(i = 0; i <= h/2; i++)
        board += slice;

    return board;
};

console.log(generateBoard(69,1000,"f","u"));