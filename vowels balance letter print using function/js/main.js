var number=String(prompt("enter string :"));
function vowels(name)
{
	var sum=0;
	for(i=name.length-1;i>=0;i--)
	{
		if(name[i]!=='a'||name[i]!=='e'||name[i]!=='i'||name[i]!=='o'||name[i]!=='u')
		{
			sum++;
		}
	}
	console.log(sum);
}
vowels(number);