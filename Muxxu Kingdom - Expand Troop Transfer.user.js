// ==UserScript==
// @name         Muxxu Kingdom - Expand Troop Transfer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      http://kingdom.en.muxxu.com/general*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var array = ["sold","arch","cav","pal","piq","chev","caa","bal","cat"];
    const listItems = document.querySelectorAll('.moreminus');
    for (let i = 0; i < listItems.length; i++) {
        var plus100 = "<li><a href=\"#\" id=\"psold\" class=\"plusten\" onclick=\"return delta('"+array[i]+"',100)\" style=\"opacity: 1;\"></a></li>";
        var minus100 = "<li><a href=\"#\" id=\"mmsold\" class=\"minusten\" onclick=\"return delta('"+array[i]+"',-100)\" style=\"opacity: 1;\"></a></li>";
        var plus1000 = "<li><a href=\"#\" id=\"psold\" class=\"plusten\" onclick=\"return delta('"+array[i]+"',1000)\" style=\"opacity: 1;\"></a></li>";
        var minus1000 = "<li><a href=\"#\" id=\"mmsold\" class=\"minusten\" onclick=\"return delta('"+array[i]+"',-1000)\" style=\"opacity: 1;\"></a></li>";
        var tr1 = "<tr><td style=\"border: 0px; padding:0px;\">"+plus100+"</td><td style=\"border: 0px; padding:0px;\">"+minus100+"</td></tr>";
        var tr2 = "<tr><td style=\"border: 0px; padding:0px;\">"+plus1000+"</td><td style=\"border: 0px; padding:0px;\">"+minus1000+"</td></tr>";
        var table= "<table style=\"border-collapse:collapse;\">"+tr1+tr2+"</table>";
        listItems[i].innerHTML += table;
}



})();
