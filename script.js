function compute()
{
    p = document.getElementById("principal").value;
    rate =document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = p * years * rate /100;
    year = new Date().getFullYear() + parseInt(years);    
       
    if (p < 1) {
    	alert ("Please input a positive number");
    	document.getElementById("principal").focus();
    	return false;
    }   

    else
    	{
    		document.getElementById("result").innerHTML="If you deposit "  +p+ ",\<br\>at an interest rate of "+rate+" %\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";
    		return false;
    	}
    return true;	
}

function updateRate()
{
    rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}