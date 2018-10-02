module.exports = function getZerosCount(number, base) {
let prime =  [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 
  103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 
  233, 239, 241, 251, 257];
let maxprime=0;
for(let l=0;l<=prime.length;l++)
{   if(base%prime[l]==0)
	{ maxprime=prime[l];
    }
}
let count=0;
while(base%maxprime==0)
{ 
	base=base/maxprime;
    count++;
    
}

let i = 0;
 while( number >=maxprime )
 { i += Math.trunc( number/maxprime );
 number = Math.trunc( number/maxprime );
 }
return Math.trunc(i/count);
}