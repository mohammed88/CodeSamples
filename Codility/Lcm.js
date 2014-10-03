/* 
	ChocolatesByNumbers
	There are N chocolates in a circle. Count the number of chocolates you will eat.
	
	Task description
	Two positive integers N and M are given. Integer N represents the number of chocolates arranged in a circle, numbered from 0 to N − 1.
	You start to eat the chocolates. After eating a chocolate you leave only a wrapper.
	You begin with eating chocolate number 0. Then you omit the next M − 1 chocolates or wrappers on the circle, and eat the following one.
	More precisely, if you ate chocolate number X, then you will next eat the chocolate with number (X + M) modulo N (remainder of division).
	You stop eating when you encounter an empty wrapper.
	For example, given integers N = 10 and M = 4. You will eat the following chocolates: 0, 4, 8, 2, 6.
	The goal is to count the number of chocolates that you will eat, following the above rules.
	Write a function:
	function solution(N, M);
	that, given two positive integers N and M, returns the number of chocolates that you will eat.
	For example, given integers N = 10 and M = 4. the function should return 5, as explained above.
	Assume that:
	N and M are integers within the range [1..1,000,000,000].
	Complexity:
	expected worst-case time complexity is O(log(N+M));
	expected worst-case space complexity is O(1).
	Copyright 2009–2014 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/

function solution(N, M) {
    // write your code in JavaScript (ECMA-262, 5th edition)    
    return (N * M) / gcd(N, M,1) / M;    
}

function gcd(a,b, res){    
    if(a === b) return res * a;
    else if(a % 2 === 0 && b % 2 === 0) return gcd(a/2, b/2, res * 2);
    else if(a % 2 === 0) return gcd(a/2, b, res);
    else if(b % 2 === 0) return gcd(a, b/2, res);    
    else if(a > b) return gcd(a-b, b, res);
    else return gcd(a, b-a, res);    
}