function reverse(string) {
    // TODO reverse string using a standar loop (use of split, reverse, and join is forbidden)
    var word="";
    for (var i=string.length-1; i>=0;i--){
       var stringWord="";
        word=word.concat(string[i]);
   }
   return word;
}