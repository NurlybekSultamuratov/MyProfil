//IIFE immediately invoked function expression
"use strict";
(function()
{
    function Start():void
    {
        console.log('App Started');
    }

    //invoke start
    window.addEventListener("load", Start);

})();