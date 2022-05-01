function compute()
{
    // create variables used in the formula
    var principal = document.getElementById("principal").value;

    // add validation for "Principal" input box - must be great than zero
    if (principal<=0) {
        alert("Enter a positive Amount");
        return document.getElementById("principal").focus();
    }
    
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // formula to generate the interest earned
    var interest = principal * years * rate / 100; 

    // change "number of years" into actual year that rate would end
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\> \<br\>"
    document.getElementById("principal").focus();
}

// function that reads the value of the range slider and displays it the <span>adjacent to the slider.
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

