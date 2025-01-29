// ------------- JQUERY ---------------
$(document).ready(function() {
    $("article.resume1").hide();

    $("button.resume1").click(function() {
        $("article.resume1").toggle();
    });

    $("article.resume2").hide();

    $("button.resume2").click(function() {
        $("article.resume2").toggle();
    });

    $("article.resume3").hide();

    $("button.resume3").click(function() {
        $("article.resume3").toggle();
    });

    $("article.resume4").hide();

    $("button.resume4").click(function() {
        $("article.resume4").toggle();
    });

    $("article.resume5").hide();

    $("button.resume5").click(function() {
        $("article.resume5").toggle();
    });

    $("article.resume6").hide();

    $("button.resume6").click(function() {
        $("article.resume6").toggle();
    });
    $("article.resume7").hide();

    $("button.resume7").click(function() {
        $("article.resume7").toggle();
    });
})
// ------------ JQUERY PLUG IN  STARS !! -----------
$("#input-id").rating();

// ------------ VALIDATE FORM --------------------- 
function validateform(theform) {
    // get  last name
    var lname = theform.lastname.value;
    console.log(lname);  console.log(lname.length);
    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    // check last name to make sure it's a letter
    if(letters.indexOf(lname.charAt(0))  == -1 ){
        //first character is NOT a letter 
        alert("Name must begin with a letter"); // remove soon
        return false;
    }
    // LOOP FOR ANOTHER LETTERS  name
    for (i=1; i<lname.length; i++)
      {
        if (letters.indexOf(lname.charAt(i)) == -1) {
            if (lname.charAt(i) != "-")  {
                alert("Name contains an invalid character"); // remove soon
                return false;
            }
        }
      }
       
 

// check for years 
var d = new Date();
var y = d.getFullYear();
console.log("d is", d, "y is ", y)
var userborn = theform.yearborn.value;
var approxAge = y - userborn;
console.log("approx age is ", approxAge);
if (approxAge < 15) 
{alert("YOU HAVE TO BE A LEAST 16 TO REGISTER TO THIS PAGE"); // remove soon
return false;
}

  // for now until server action
}
