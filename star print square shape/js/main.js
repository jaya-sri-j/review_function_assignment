var num=parseInt(prompt("enter num"));
function star(number)
{
var sum="";
for ( i=0;i<number;i++)
{
for (j=0;j<number;j++)
{
sum+="*";
}
sum+="\n";
}
console.log(sum);
}
star(num);

