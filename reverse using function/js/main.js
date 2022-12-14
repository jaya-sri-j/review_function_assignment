var num=parseInt(prompt("enter the number"));
function reverse(number)
{
sum=0;
while(number>0)
{
var rem=number%10;
sum=rem+(sum*10);
number=(number-rem)/10;
console.log(rem);
}
}
reverse(num);