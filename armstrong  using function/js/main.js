var sum=parseInt(prompt("enter number :"));
function armstrong(number)
{
	var num=number;
	var a=0,
	n=number,
	b=0;
	while(n>0)
	{
		temp=n%10;
		b+=1
		n=(n-temp)/10;
	}
	while(number>0)
	{
		rem=number%10;
		a+=rem**b;
		number=(number-rem)/10;
		if(number==0)
		{
			if(num==a)
			{
				console.log(num+" is a amstrong number");
			}
			else
			{
				console.log(num+" is not a amstrong number");
			}
		}
	}
}
armstrong(sum);