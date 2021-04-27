function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function myFunction() {
  var x = document.getElementById("myTopnav2");
  if (x.className === "topnav2") {
    x.className += " responsive";
  } else {
    x.className = "topnav2";
  }
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function validate() {

  if(document.forms[accountForm][fullName.value] == " ") {
    alert("Please write your name.");
    return false;
  }
  if(document.forms[accountForm][uname.value] == " ") {
    alert("Please write a username.");
    return false;
  }
  if(document.forms[accountForm][email.value] == " ") {
    alert("Please write your email address.");
    return false;
  }
  if(document.forms[accountForm][phone.value] == " " || isNaN(document.forms[accountForm][phone.value]) ||
        document.forms[accountForm][phone.value].length != 5) {
    alert("Please write a telephone number.");
    return false;
  }
  if(document.forms[accountForm][zipcode.value] == " " || isNaN(document.forms[accountForm][zipcode.value]) ||
        document.forms[accountForm][zipcode.value].length != 5) {
    alert("Please write a zip code.");
    return false;
  }
  if(document.forms[accountForm][password.value] == " ") {
    alert("Please write a password.");
    document.accountForm.password.focus();
    return false;
  }
  if(document.forms[accountForm][sname.value]value == " ") {
    alert("Please write the name of your salon.");
    return false;
  }
  if(document.forms[accountForm][address.value] == " ") {
    alert("Please write the salon address.");
    return false;
  }
  if(document.forms[accountForm][city.value] == " ") {
    alert("Please write the city where the salon is located.");
    return false;
  }
  if(document.forms[accountForm][state.value] == " ") {
    alert("Please select the state where the salon is located.");
    return false;
  }
  if(document.forms[accountForm][help.value] == " ") {
    alert("Please write down any questions or concerns you may have.");
    return false;
  }
  
  return(true);
}

