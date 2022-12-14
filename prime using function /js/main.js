var num=parseInt(prompt("enter the number"));
function prime(number)
{
c=0;
flag=true;
for(i=2;i<number;i++)
{
if (number%i==0)
{
flag=false;
}
}
if (flag==true)
{
console.log("prime");
}
else
{
console.log("not prime");
}
}
prime(num);