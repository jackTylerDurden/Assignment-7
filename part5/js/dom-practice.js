/*eslint-env browser*/

var showAlert = function() {
    "use strict";
    window.alert("I have been clicked");
}

var $ = function(id){
    "use strict";
    return document.getElementById(id);
}

//STEP 1
function IAmClickedOldSchool(){
    "use strict";
    window.alert("I have been clicked");
}

//STEP 5
window.addEventListener("load",init);

function init(){
    "use strict";
    //STEP 2
    $("button1").onclick = function () {
        "use strict";
        window.alert("I have been clicked");
    };
    
    //STEP 3
    $("button2").addEventListener("click",showAlert); //user defined function
    
    //STEP 4
    $("button3").addEventListener("click",function(){   //callback function
        window.alert("I have been clicked");
    });
}

