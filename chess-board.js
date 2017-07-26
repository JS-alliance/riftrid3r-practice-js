var mkLine = function(width, char1, char2){
    var line = "";
    for(i = 0; i < width; i++)
        if (line.slice(-1) == char1) {
            line += char2;
        } else {
            line += char1;
        } 
        return line;
};
var reverseStr = function(str) {
    for (var i = str.length - 1, revStr = ''; i >= 0; revStr += str[i--]) { }
    return revStr;
};
var generateBoard = function(width, height, char1, char2) {    
    var area = height * width;
    var nl   = "\n";
    var board = ""; 
    var line = mkLine(width,char1,char2);
    var slice = line+nl+reverseStr(line)+nl;

    for(i = 0; i < height/2; i++)
        board += slice; 
    return board;
};

console.log(generateBoard(10,10,"@","#"));