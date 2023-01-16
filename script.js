function check()
{
    var amt = document.getElementById("amount").value;
    if(amt<=0 || amt=="")
    {
        alert("Enter a positive number");
    }
    else{
        var rate = document.getElementById("rating").value;
        var year = document.getElementById("year").value;
        var container = document.getElementById("result");
        var years = new Date().getFullYear()+parseInt(year);
        var amount = amt * year * rate /100;
        var data = `<p style="font-size:15px; margin-bottom:0; padding-bottom:0; color:"black";>
                    If you deposit <mark>${amt},</mark><br/> 
                    at an interest rate of <mark>${rate}%,</mark><br\>
                    You will receive an amount of <mark>${amount},</mark><br\>
                    in the year <mark>${years}</mark>
                    </p>`;
        document.querySelector(".main").style.height = "450px";
        document.getElementById("result").innerHTML = "";
        container.insertAdjacentHTML("afterbegin",data);
    }
}
function change(x)
{
    document.getElementById("rate").innerHTML=x+"%";
}