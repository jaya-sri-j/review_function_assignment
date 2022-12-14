var num=parseInt(prompt("enter the number"));
function fibonacci(number)
{
var1=0;
var2=1;
console.log(var1);
console.log(var2);
for(var i=3;i<number;i++)
{
var3=var1+var2;
var1=var2;
var2=var3;
console.log(var3);
}
}
fibonacci(num);