function compute()
{
    var p = document.getElementById("principal").value;
    if (p<=0) {
        alert("Enter a positive Amount");
        return document.getElementById("principal").focus();
    }

    var y = document.getElementById("years").value;
    var r = document.getElementById("rate").value;

    var i = p * y * r / 100; 

    var x= new Date().getFullYear();
    var year_future = x + parseInt(y);

    document.getElementById("result").innerHTML=`If you deposit <b>${p}</b>, <br> at an interest rate of <b>${r}%.</b> <br> You will receive an amount of <b>${i}</b>, <br> in the year <b>${year_future}</b><br>`;
    document.getElementById("principal").focus();
}

function read_rate() {
    var p_rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=p_rate + "%";
}