function ageinday(){
var birthyear= prompt("What is your Date of Birth");
var ageindays =(2020-birthyear)*365;
var h1 = document.createElement('h1');
var textanswer = document.createTextNode("You are "+ageindays+" days OLd");
h1.setAttribute('id','ageinday');
h1.appendChild(textanswer);
document.getElementById("flex-box-element").appendChild(h1);
}
function reset()
{
    document.getElementById('ageinday').remove();
}





