//Searches and returns result
function search() {
    var input = document.getElementById('searchbar').value.toLowerCase();
    //'#Latin' can be replaced to support other languages
    var URL = 'https://en.wiktionary.org/wiki/' + input + '#Latin';
    
    //Sets size and source of iFrame
    document.getElementById('int-box').style.top = "0%";
    document.getElementById('result').height = Math.round(window.innerHeight*0.8);
    document.getElementById('result').width = "90%";
    document.getElementById('result').src = URL;
    document.getElementById('alert').innerHTML = URL;
}

//Resets everything on page refresh
window.onload = function() {
    document.getElementById('result').src = "";
    document.getElementById('searchbar').value = "";
    document.getElementById('alert').innerHTML = "";
}

//Runs search on enter key press
function enterSub(inField, e) {
    var charCode;
    if (e && e.which) {
        charCode = e.which;
    } else if (window.event) {
        e = window.event;
        charCode = e.keyCode;
    }
    
    if (charCode == 13) {
        search();
    }
}
