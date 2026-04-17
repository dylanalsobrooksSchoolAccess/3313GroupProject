"use strict";

var ageModal = document.getElementById("age-verification-modal");
var yesButton = document.getElementById("btn-yes");
var noButton = document.getElementById("btn-no");

yesButton.addEventListener('click', function() 
    {
        ageModal.style.display = 'none';
    }
);

noButton.addEventListener('click', function()
    {
        window.location.href = "about:blank"; 
    }
);

