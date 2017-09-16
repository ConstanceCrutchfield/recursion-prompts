// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

var factorial = function(n, result = 1) {
    if (n < 0){
        return null;
    }
    if (n === 0){
        return result;
    }
    return factorial(n-1, result * n);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, total =0, i = array.length-1) {
    if (i === -1) {
        return total;
    }
    
    return sum(array.slice(0, i), total + array[i], --i);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array, total = 0) {
    array.forEach(item => {
    if (Array.isArray(item)) {
      return total += arraySum(item);
    }
    total += item;
  });
  return total;
};

// 4. Check if a number is even.
var isEven = function(n) {
    if (n < 0){
        n = Math.abs(n);
    }
    if (n === 0){
        return true;
    } if (n === 1){
        return false;
    } n = n-2;
    return isEven(n);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, result = 0) {
    if (n === 0){
        return result;
    } if (n > 0){
        return sumBelow(n-1, result + n);//how to exclude original n value???
    } if (n < 0){
        return sumBelow(n+1, result + n);
    }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, result =[]) {
    if(x === y){
        return result =[];
    }
    if (x < y){
       if(x-y === -1){
        return result;
       }
        result.unshift(y-1);
        return range(x, y-1, result);
    } if (x > y){
        if(x-y === 1){
          return result;
        }
        result.push(x-1);
        return range(x-1, y, result);
    }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if(exp < 0){
        return 1 / base * exponent(base, exp + 1).toFixed(4);
    }
    if(exp === 0){
       return 1; 
    }
    return base * exponent(base, exp-1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) { //says max callstack exceeded but works in jsbin???
    //if n is a decimal return false
    if (n === 1){
        return true;
    }
    if (n % 1 !== 0){
        return false;
    }
    return powerOfTwo( n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, newString = '', i = string.length-1) {
    if (newString.length === string.length){
        return newString;
    } 
    
    return reverse(string, newString.concat(string[i]), --i);
};

//if lenght is 1 or 0
   //  return true
// check first and last letter
  // if not equal return false
//recures with first and last letter removed    
// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string, result = true) {
    string = string.split(' ').join('');
       if (string.length <=1){
           return result;
       } 
       var a = string[0];
       var b = string[string.length-1];
       if(a.toLowerCase() !== b.toLowerCase()){
            result = false;
        }
    return palindrome(string.substring(1, string.length-1), result);
};
// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if(x < 0 && y < 0){
      x = x - x - x;
      y = y - y - y;
    }if (y > x){
      var z = x;
      x = y;
      y = z;
    }
    if(y === 1){
        return 0;
    }
    if(y === 0 ){
        return undefined;
    }
    if(x -y === 0 ){
        return 0;
    } 
     if(x - y < 0){
        return x;
    } x = (x - y);
   
    return modulo(x, y);
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
    //if x negative, add it y number of times
    //if y negative add it x number of times
    //if both negative, Math.abs both, then add
var multiply = function(x, y, total = 0) {
    if(x < 0 && y < 0){
      x = x - x - x;
      y = y - y - y;
    }
    if(y === 0 || x === 0){
        return total;
    } if (y > 0){
      return multiply(x, y-1, total + x);
    } if (y < 0){
      return multiply(x-1, y, total + y);
    }
};


// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y, result = 0) {
    if(x < 0 && y < 0){
      x = x - x - x;
      y = y - y - y;
    }
    if(y === 0 && x === 0){
        return NaN;
    }
    if(y === 0 || x === 0){
        return 0;
    }
    else if(y < 0){
        if(x + y < 0){
            return result;
        }
        if((x + y) >= 0 && (x + y) < (y+y+y)){
       return result; 
        }
        else {
            return divide(x+y, y, result - 1) ;
        }
    }
    else if (x < 0){
        if(x + y < 0){
            return result;
        }
        if((x + y) >= 0 && (x + y) < y){
            return result;
        } else {
            return divide(x+y, y, result - 1) ;
        }
    }
    else if (x - y < 0){
        return result;
    }
    else if((x - y) >= 0 && (x - y) < y){
       return result + 1; 
    }
    else{
        return divide(x-y, y, result + 1) ;
    }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2, compare = true, i = 0) {//do this one like paindrome
   if(str1.length !== str2.length){
        return compare = false;
    }if (str1[i] !== str2[i]){
        return compare = false;
    }if (i === str1.length){
        return compare;
    }  return compareStr(str1, str2, compare, ++i);//works, but says only calls function once
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, arr = [], i = 0){
    if (arr.length === str.length){
        return arr;
    }
    return createArray(str, arr.concat(str[i]), ++i);
};

// 17. Reverse the order of an array
var reverseArr = function (array, reversed = [], i = array.length-1) {
    if(reversed.length === array.length){
        return reversed;
    } return reverseArr(array, reversed.concat(array[i]), --i);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, arr = []) {
     if (arr.length === length){
         return arr;
     } arr.push(value);
     return buildList(value, length, arr); 
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count = 0, i = 0) {
    if(i === array.length){
        return count;
    } if(array[i] === value){
        count = count + 1;
    }
    return countOccurrence(array, value, count, ++i);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, result =[], i =0) {
    if(i === array.length){
        return result;
    } 
    return rMap(array, callback, result.concat(callback(array[i])), ++i);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key, num = 0) {
    for (var prop in obj) {
        if (prop === key) {
            num++;
        }
        var value = obj[prop];
        if (typeof value === 'object') {
            num += countKeysInObj(value, key);
        }
    }
    return num;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value, num = 0) {
    for (var prop in obj) {
        if (obj[prop] === value) {
            num++;
        }
        if (typeof obj[prop] === 'object') {
            num += countValuesInObj(obj[prop], value);
        }
    }
    return num;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
     for (var prop in obj) {
        if (prop === key) {
            prop = newKey;
        }
        if (typeof obj[prop] === 'object') {
            replaceKeysInObj(obj[prop], key, newKey);
        }
    }
    return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n, result = [0, 1], i = 1) {
    if(i === n){
      return result;  
    } else if (n <= 0){
        return null;
    } else if(n === 1){
        return result;
    }
    result.push(result[i] + result[i-1]);
    return fibonacci(n, result, ++i);
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if(n < 0){
        return null;  
    } else if (n === 0){
        return 0;
    } else if (n === 1){
        return 1;
    } return nthFibo(n-1) + nthFibo(n-2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, newArray = [], i=0) {
    if (i === input.length){
        return newArray;
    }
    newArray.push(input[i].toUpperCase());
    return capitalizeWords(input, newArray, ++i);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, newArray = [], i =0) {
    if (i === array.length){
        return newArray;
    }
    newArray.push(array[i].charAt(0).toUpperCase() + array[i].substr(1));
    return capitalizeFirst(array, newArray, ++i);
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj, num = 0) {
    for (var prop in obj) {
        if ((obj[prop] % 2) === 0) {
            num += obj[prop];
        }
        if (typeof obj[prop] === 'object') {
            if(nestedEvenSum(obj[prop]) %2 === 0){
                num += nestedEvenSum(obj[prop]);
            }
            nestedEvenSum(obj[prop], num);
        }
    }
    return num;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays, flat =[]) {
   arrays.forEach(item => {
    if (Array.isArray(item)) {
      // Recursively flatten array.
      flatten(item, flat);
      return;
    }
    flat.push(item);
  });
  return flat;

};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function( str, obj = {}, i=0) {
  if(i === str.length){
    return obj;
  }
  if (obj[str[i]]){
     obj[str[i]]++;
  } else {
     obj[str[i]] = 1;
  }
    return letterTally(str, obj, ++i);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, newList = [], i=0) {
    if(i === list.length){
        return newList;
    }
    if(list[i] !== list[i-1]){
        newList.push(list[i]);
    }
    return compress(list, newList, ++i);
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    array.forEach(item => {
        item.push(aug);
        return;
    });
    return array;
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, newArray =[], i=0) {
    if(i === array.length){
        return newArray;
    }
    if(array[i] !== 0 || array[i-1] !== array[i]){
        newArray.push(array[i]);
    }
    return minimizeZeroes(array, newArray, ++i);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, newArray =[], i=0) {
    if(i === array.length){
        return newArray;
    } if(array[i] !== array[i-1]){
        if ((newArray.length) % 2 === 0){
            newArray.push(Math.abs(array[i]));
        } else{
          newArray.push((Math.abs(array[i])) * -1);
        }  
    }
    return alternateSign(array, newArray, ++i);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, newString =[], i=0) {
    
let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; 
var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var arr = str.split('');
  
    if (i === arr.length){
        return newString.join('');
    }
    if (nums.includes(arr[i])){
        arr[i] = words[parseFloat(arr[i])];
          //newString.push(arr[i]); 
    } newString.push(arr[i]);
    return numToText(str, newString, ++i); //logs "I have five5 dogs and six6 ponies"
};
console.log(numToText("I have 5 dogs and 6 ponies"));
// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};
