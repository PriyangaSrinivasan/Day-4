//1a.Print odd number in an array using anonymous function:
/*
var result = [];
 var a = function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0)
        {
           result.push(arr[i])
        }
    }
    return result
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));
*/



//1a.Print odd number in an array using IIFE function:
/*
var result = [];
(function(arr){
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        {
           result.push(arr[i])
        }
    }
    console.log(result)
})([1,2,3,4,5,6,7,8,9,10])
*/

//2a.Print odd number in an array using arrow function:
/*
var result = [];
    var odd = (arr)=>{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        {
           result.push(arr[i])
        }
    }
    return result
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]))
*/

//-------------------------------------------------------------------------------------------------------------------------------------------

//1b.convert all strings to title caps in a string array using anonymous function:

/*
var a = ["my name is priyanga"];
var Name = function(word)
{   
	return word.split(" ").map(function (word) { 
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(" ");
}
console.log(Name(a[0]));
*/

//1b.convert all strings to title caps in a string array using IIFE function:

/*
var a = ["my name is priyanga"];
(function(word)
{   
	return word.split(" ").map(function (word) { 
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(" ");
});
console.log(Name(a[0]));
*/

//2b.convert all strings to title caps in a string array using Arrow function:
/*
var a = ["my name is priyanga"];
var Name = (word) =>
{   
	return word.split(" ").map(function (word) { 
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(" ");
};
console.log(Name(a[0]));
*/

//------------------------------------------------------------------------------------------------------------------------------------------

//1c.Sum of all numbers in an array using anonymous function:
/*
var c = [10,20,30,40,50,60,70,90,100];
var sum = function(arr)
{
	return arr.reduce((a,b)=>a+b);
}
console.log(sum(c));

*/

//1c.Sum of all numbers in an array using IIFE function:
/*

var c = [10,20,30,40,50,60,70,90,100];
 var sum =(function(arr)
{
	return arr.reduce((a,b)=>a+b);
})
console.log(sum(c));

*/

//2c.Sum of all numbers in an array using Arrow function:
/*

var c = [10,20,30,40,50,60,70,90,100];
var sum =(arr)=>
{
	return arr.reduce((a,b)=>a+b);
}
console.log(sum(c));

*/

//---------------------------------------------------------------------------------------------------------------------------------------

//1d.Return all the prime numbers in an array using anonymous function:

/*
var array = [];
let prime = function (arr) {
    array = arr.filter((number) => {
      if (number == 1) {
        return false;
      } else if (number == 2) {
        return true;
      } else {
        for (let i = 2; i < number; i++) {
          if (number % i == 0) {
            return false;
          }
        }
      }
      return true;
    });
    return array;
  }([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  console.log(prime);
*/
  
//1d.Return all the prime numbers in an array using IIFE function:
/*
  var array = [];
  (function (arr) {
      array = arr.filter((number) => {
        if (number == 1) {
          return false;
        } else if (number == 2) {
          return true;
        } else {
          for (let i = 2; i < number; i++) {
            if (number % i == 0) {
              return false;
            }
          }
        }
        return true;
      });
      return array;
    })([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    
    console.log(prime);
*/

//2d. Return all the prime numbers in an array using arrow function:

/*

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var Prime2 = array.filter((number) => {
    if (number == 1) {
        return false;
    }else if (number == 2) {
        return true;
    }else{
        for (let i = 2;i < number; i++){
            if (number % i == 0){
                return false;
            }
        }
    }
    return true;
});

console.log(Prime2);
*/

//-----------------------------------------------------------------------------------------------------------------------------------------

//1e.Return all the palindromes in an array using anonymous function:

/*
var n = ["Hi","Hello","Welcome"]
var a =function(arr, n)
{
    
    for (let i = 0; i < n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
}
console.log(a(n));
*/

//1e.Return all the palindromes in an array using IIFE function:
/*

var n = ["Hi","Hello","Welcome"]
var a =(function(arr, n)
{
   
    for (let i = 0; i < n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
})
console.log(a(n));
*/

//2e.Return all the palindromes in an array using arrow function:
/*

var n = ["Hi","Hello","Welcome"]
var a =(arr, n) =>
{
    for (let i = 0; i < n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
}
console.log(a(n));
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

//1f.Return median of two sorted arrays of same size  using anonymous function:

/*
const array1=[2,4,5,1,3];
const array2=[9,7,10,8,6];


var c = function(nums1, nums2){
  const merged = [...nums1, ...nums2].sort((a, b) => (a - b));
  console.log(merged);
  const n = merged.length;
  if (n % 2 === 0) {
     console.log((merged[n / 2 - 1] + merged[n / 2]) / 2);                
  }else{
    console.log(merged[Math.floor(n / 2)]);
  }
}(array1,array2);
*/

//1f.Return median of two sorted arrays of same size  using IIFE function:

/*
const array3=[2,4,5,1,3];
const array4=[9,7,10,8,6];


(function(nums1, nums2){
  const merged = [...nums1, ...nums2].sort((a, b) => (a - b));
  console.log(merged);
  const n = merged.length;
  if (n % 2 === 0) {
     console.log((merged[n / 2 - 1] + merged[n / 2]) / 2);               
  }else{
    console.log(merged[Math.floor(n / 2)]);
  }
})(array3,array4);
*/

//-----------------------------------------------------------------------------------------------------------------------------------------

//1g.Remove Duplicates From an Array using anonymous function:
/*
let a=[1,2,3,4,5,3,2,9,5,10];


var b = function(arr){
    const a=new Set(arr);
    console.log(Array.from(a));
}(a);
*/

//1g.Remove Duplicates From an Array using IIFE function:
/*
let c=[1,2,3,4,5,3,2,9,5,10];


(function(arr){
    const a=new Set(arr);
    console.log(Array.from(a));
})(c);
*/

//-----------------------------------------------------------------------------------------------------------------------------------------

//1h.Rotate an array by k times using anonymous function:
/*

var a=[1,2,3,4,5];

var k=2;

var b = function(array,k){
for(let i=0;i<k;i++){
    let b=array.pop();
    array.unshift(b);
}
console.log(a);
}(a,k)

*/

//1h.Rotate an array by k times using IIFE function:
/*
var c=[1,2,3,4,5];

var k1=2;

(function(array,k1){
for(let i=0;i<k1;i++){
    let b=array.pop();
    array.unshift(b);
}
console.log(c);
})(c,k1)
*/




