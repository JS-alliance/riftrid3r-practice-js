alternateChars = function(nChar, char1, char2){
    var line = ""
    
    for(i = 0; i <= nChar; i++)
        if (line.slice(-1) == char1) {
            line += char2;
        
        } else {
            line += char1;
        }
    return line;
};
addNewLine = function(rawline){
    newlineLine = rawline + "\n"
    return newlineLine;
};

printLines = function(nLines, line){
    var lines = "";
    for(i = 0; i < nLines; i++){
        
        lines += line
    
    };
    return lines;

};
console.log(printLines(10, addNewLine(alternateChars(10, "3", " "))));