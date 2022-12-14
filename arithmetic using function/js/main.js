var o1=parseInt(prompt("enter o1"));
var o2=parseInt(prompt("enter o2"));
var operator=String(prompt("enter + or - or * or /"));

function add(o1,o2)
{
	console.log(o1+o2)
}
function sub(o1,o2)
{
	console.log(o1-o2)
}
function mul(o1,o2)
{
	console.log(o1*o2)
}
function div(o1,o2)
{
	console.log(o1/o2)
}

if(operator=='+')
{
	add(o1,o2);
}
else if(operator=='-')
{
	sub(o1,o2);
}
else if(operator=='*')
{
	mul(o1,o2);
}
else if(operator=='/')
{
	div(o1,o2);
}
else
{
	console.log(" invalid");
}