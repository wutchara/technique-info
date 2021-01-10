// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php


// --------------------------- 1 --------------------------- 
// const today = new Date();
// const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

// console.log(`Sample Output : Today is : ${daylist[today.getDay]}.`);
// console.log(`Current time is : ${today.getHours()%12} ${((h) => {
//   return h < 12 ? 'AM':'PM';
// })(today.getHours())} : ${today.getMinutes()} : ${today.getSeconds()}`);


// --------------------------- 3 --------------------------- 
// const dateFormat = (d, m, y) => {
//   const day = d < 10 ? `0${d}` : d.toString();
//   const month = m < 10 ? `0${m}` : d.toString();

//   return (format) => {
//     return format
//             .replace('dd', day)
//             .replace('mm', month)
//             .replace('yyyy', y.toString())
//             .trim();
//   };
// };

// const date = new Date();
// const doFormat = dateFormat(date.getDate(), date.getMonth()+1, date.getFullYear());

// ['mm-dd-yyyy', 'mm/dd/yyyy', 'dd-mm-yyyy', 'dd/mm/yyyy'].map(f => {
//   console.log(f, doFormat(f));
// });


// --------------------------- 4 --------------------------- 
// const calculateTriangle  = (a, b, c) => {
//   const s = (a+b+c)/2;
//   return Math.sqrt(s*(s-a)*(s-b)*(s-c));
// };
// console.log('calculateTriangle', calculateTriangle(5, 6, 7));

// --------------------------- 6 --------------------------- 
// const checkLeapYear = (year) => {
//   return year%100 === 0 ? year%400 === 0 : year%4 === 0;
// };
// console.log(checkLeapYear(2016));
// console.log(checkLeapYear(2000));
// console.log(checkLeapYear(1700));
// console.log(checkLeapYear(1800));
// console.log(checkLeapYear(100));

// --------------------------- 7 --------------------------- 
// const yearRange = [2014, 2050];

// const runCode = (start, end) => {
//   for(let year = start; year <= end; year++){
//     const dateObj = new Date(Date.UTC(year, 0, 1));
//     !dateObj.getDay() && console.log(dateObj.getFullYear());
//   }
// };
// runCode(...yearRange);

// --------------------------- 8 --------------------------- 
// const input = 5;
// const checkInput = (input) => {
//   const randomNum = Math.floor(Math.random()*10);
//   input === randomNum ? console.log('Good Work') : console.log('Not matched');
// };
// checkInput(input);


// --------------------------- 9 --------------------------- 
// const today = new Date();
// const christmasDate = new Date();
// christmasDate.setMonth(11);
// christmasDate.setDate(25);

// const oneDay = 1000*60*60*24;
// console.log(Math.ceil((christmasDate.getTime()-today.getTime())/oneDay) + " days left until Christmas!");


// --------------------------- 11 --------------------------- 
// const fToc = (fahrenheit) => {
//   return ((fahrenheit-32)/9) * 5;
// };

// const cTof = (celsius) => {
//   return ((celsius/5)*9) + 32;
// };

// const celsius = 60;
// console.log(`${celsius} °C is ${cTof(celsius)} °F`);

// const fahrenheit = 45;
// console.log(`${fahrenheit} °F is ${fToc(fahrenheit)} °C`);


// --------------------------- 13 --------------------------- 
// const var_name = 'abcd';
// const n = 120;
// this[var_name] = n;
// console.log(this[var_name])


// --------------------------- 15 --------------------------- 
// const difference = (compare, target) => {
// 	const diff = Math.abs(compare-target);
// 	return diff*((compare > target) ? 2 : 1);
// };

// const compare = (compareNum) => {
// 	return difference(compareNum, 13);
// };

// console.log(compare(32))
// console.log(compare(11))


// --------------------------- 16 --------------------------- 
// const compute = (num1, num2) => {
// 	const sum = num1 + num2;
// 	return sum*(num1===num2 ? 3 : 1);
// };

// console.log(compute(10, 20));
// console.log(compute(10, 10));


// --------------------------- 17 --------------------------- 
// const difference = (compare, target) => {
// 	const diff = Math.abs(compare-target);
// 	return diff*((compare > target) ? 3 : 1);
// };

// const compare = (compareNum) => {
// 	return difference(compareNum, 19);
// };

// console.log(compare(12));
// console.log(compare(19));
// console.log(compare(22));

// --------------------------- 20 --------------------------- 
// const positiveNegative = (num1, num2) => {
// 	if(num1 < 0) {
// 		return num2 >= 0;
// 	}else {
// 		return num2 < 0;
// 	}
// };

// console.log(positiveNegative(2, 2));
// console.log(positiveNegative(-2, 2));
// console.log(positiveNegative(2, -2));
// console.log(positiveNegative(-2, -2));

// --------------------------- 21 --------------------------- 
// const exeStr = (org) => {
// 	const extend = 'Py';
// 	return (~org.indexOf(extend) ? '' : 'Py') + org;
// };

// console.log(exeStr("Python"));
// console.log(exeStr("thon"));

// --------------------------- 22 --------------------------- 
// const removeString = (org, position) => {
// 	const newStr = org.split('')
// 	.map((s, index) => index !== position ? s : '')
// 	.join('');
// 	return newStr;
// };

// console.log(removeString('Python', 0));
// console.log(removeString('Python', 3));
// console.log(removeString('Python', 5));

// --------------------------- 23 --------------------------- 
// const swarp = (str) => {
// 	const len = str.length;
// 	return len > 1 ? str.charAt(len -1) + str.substring(1, len -1) + str.charAt(0) : str;
// };
// console.log(swarp('a'));
// console.log(swarp('ab'));
// console.log(swarp('abc'));

// --------------------------- 24 --------------------------- 
// const addFirst = (str) => {
// 	const first = str.charAt(0);
// 	return  first + str + first;
// };
// console.log(addFirst('a'));
// console.log(addFirst('ab'));
// console.log(addFirst('abc'));

// --------------------------- 26 --------------------------- 
// const addThird = (str) => {
// 	const len = str.length;
// 	const added = str.substring(len-3);
// 	console.log('---',added);
// 	return  len < 3 ? false : added+str+added ;
// };
// console.log(addThird('abcabc'));
// console.log(addThird('ab'));
// console.log(addThird('abcd'));


// --------------------------- 32 --------------------------- 
// const checkNearest = (target, numbers) => {
// 	let nearestValue = Math.abs(numbers[0]-target);
// 	let nearest = 0;

// 	numbers.map((n, index) => {
// 		const diff = Math.abs(target-n);
// 		if(diff < nearestValue) {
// 			nearest = index;
// 			nearestValue = diff;
// 		}
// 	});

// 	return numbers[nearest];
// };

// const nearest100 = (num1, num2) => {
// 	return checkNearest(100, [num1, num2]);
// };

// console.log('nearest100', nearest100(90, 89));
// console.log('nearest100', nearest100(-90, -89));
// console.log('nearest100', nearest100(90, 90));


// --------------------------- 91 --------------------------- 
// const maxConsecutiveSum = (arr, position) => {
// 	let sum = 0;
// 	const len = arr.length;

// 	for(let i = 0; i < len; i++){
// 		let tempSum = 0;
// 		const maxIndex = i+position;

// 		if(maxIndex > len){
// 			break;
// 		}

// 		for(let j = i; j < maxIndex; j++){
// 			tempSum += arr[j] || 0;
// 		}

// 		if(sum < tempSum){
// 			sum = tempSum;
// 		}
// 	}

// 	return sum;
// };

// console.log(maxConsecutiveSum([1, 2, 3, 14, 5], 2));
// console.log(maxConsecutiveSum([2, 3, 5, 1, 6], 3));
// console.log(maxConsecutiveSum([9, 3, 5, 1, 7], 2));


// --------------------------- 94 --------------------------- 
// const elementMode = (arr) => {
// 	const countObj = {};
// 	arr.map(n => {
// 		countObj[n] = (countObj[n] || 0) + 1;
// 	});

// 	const keys = [];
// 	const countable = Object.keys(countObj).map((k, i) => {
// 		keys.push(k);
// 		return countObj[k];
// 	});

// 	const maxCount = Math.max(...countable);
// 	const maxIndex = countable.findIndex(n => n === maxCount);

// 	console.log('keys', keys);
// 	console.log('countable', countable);
// 	console.log('maxCount', maxCount);
// 	console.log('maxIndex', maxIndex);

// 	return +keys[maxIndex];
// };
// console.log(elementMode([1, 2, 3, 2, 2, 8, 1, 9]));


// --------------------------- 95 --------------------------- 
// const num = [1, 2, 3, 2, 2, 8, 1, 9];
// const elementReplace = (arr, oldNum, newNum) => {
// 	return arr.map(n => (n === oldNum ? newNum : n));
// };

// console.log("Original Array:\t" + num);
// console.log("Modify Array:\t" + elementReplace(num, 2, 5));

// --------------------------- 96 --------------------------- 
// const adjacentDifference = (arr) => {
// 	const lastIndex = arr.length - 1;
// 	let sum = 0;
// 	for(let i = 0; i < lastIndex; i++){
// 		sum += Math.abs(arr[i]-arr[i+1]);
// 	}

// 	return sum;
// };
// console.log(adjacentDifference([1, 2, 3, 2, -5]));

// --------------------------- 97 --------------------------- 
// const reverseString = (str) => {
//     return str.split("").reverse().join("");
// }

// const checkPalindrome = (str) => {
// 	return str === reverseString(str);
// };

// const buildPalindrome = (str) => {
// 	if(checkPalindrome(str)) {
// 		return str;
// 	}

// 	const lastCharecter = str.charAt(str.length-1);
// 	const containIndex = str.indexOf(lastCharecter);
// 	const subStr = str.substring(0, containIndex);
// 	const newStr = str + reverseString(subStr);

// 	if(checkPalindrome(newStr)) {
// 		return newStr;
// 	}
// };
// console.log(buildPalindrome("abcddc"))
// console.log(buildPalindrome("122"))
// console.log(buildPalindrome("133333"))


// --------------------------- 98 --------------------------- 
// const formatString = (str) => {
// 	const strArr = str.split('');
// 	const count = {
// 		upper: 0,
// 		lower: 0,
// 		other: 0,
// 	};

// 	strArr.map(c => {
// 		if((/^[A-Z]/g).test(c)){
// 			count.upper++;
// 		}else if((/^[a-z]/g).test(c)){
// 			count.lower++;
// 		}else{
// 			count.other++;
// 		}
// 	});

// 	return count.upper > count.lower ? str.toUpperCase() : count.lower > count.upper ? str.toLowerCase() : str;
// };

// console.log(formatString('PHp'));
// console.log(formatString('Write'));
// console.log(formatString('Wr564518'));


// --------------------------- 99 --------------------------- 
// const rearrangementCharacters = (str1, str2) => {
// 	const strArr1 = str1.trim().split('').sort();
// 	const strArr2 = str2.trim().split('').sort();

// 	let result = true;
// 	const len = str1.length;
// 	for (let i = 0; i < len; i++) {
// 		if(strArr1[i] !== strArr2[i]){
// 			result = false;
// 			break;
// 		}
// 	}
// 	return result;
// };
// console.log(rearrangementCharacters("xyz", "zyx"))
// console.log(rearrangementCharacters("xyz", "zyp"))


// --------------------------- 100 --------------------------- 
// const compare = (arr1, arr2) => {
// 	let arrShort;
// 	let arrLong;

// 	if(arr1.length > arr2.length){
// 		arrShort = arr2;
// 		arrLong = arr1;
// 	}else {
// 		arrShort = arr1;
// 		arrLong = arr2;
// 	}

// 	for(num of arrShort) {
// 		if(arrLong.includes(num)){
// 			return true;
// 		}
// 	}

// 	return false;
// };

// console.log(compare([1,2,3], [3,4,5]));   
// console.log(compare([1,2,3], [5,6,7])); 


// --------------------------- 101 --------------------------- 
// const checkRegX = (regx, c) => {
// 	return regx.test(c);
// };
// const checkLower = (c) => {
// 	return checkRegX(/^[a-z]/g, c);
// };
// const checkUpper = (c) => {
// 	return checkRegX(/^[A-Z]/g, c);
// };

// const testString = (str) => {
// 	const strArr = str.split('');
// 	const lastIndex = strArr.length - 1;

// 	let result = true;
// 	for (let i = 0; i < lastIndex; i++) {
// 		if(checkLower(strArr[i])) {
// 			if(checkLower(strArr[i+1])){
// 				result = false;
// 				break;
// 			}
// 		}else if(checkUpper(strArr[i])) {
// 			if(checkUpper(strArr[i+1])){
// 				result = false;
// 				break;
// 			}
// 		}
// 	}

// 	return result;
// };
// console.log(testString(''));
// console.log(testString('xYr'));
// console.log(testString('XXyx'));


// --------------------------- 102 --------------------------- 
// const inversionsNaive = (arr) => {
// 	const lastIndex = arr.length - 1;
// 	let count = 0;
// 	for(let i = 0; i < lastIndex; i++){
// 		for(let j = i+1; j < lastIndex + 1; j++){
// 			if(arr[i] > arr[j]) {
// 				count++;
// 			}
// 		}
// 	}
// 	return count;
// };

// console.log(inversionsNaive([0, 3, 2, 5, 9]));   
// console.log(inversionsNaive([1, 5, 4, 3]));   
// console.log(inversionsNaive([10, 30, 20, -10]));  


// --------------------------- 103 --------------------------- 
// const getNumber = (arr, deleteIndex) => {
// 	const temp = [...arr];
// 	temp[deleteIndex] = '';
// 	return +temp.join('');
// };

// const digitDelete = (number) => {
// 	const numberArr = `${number}`.split('');
// 	const len = numberArr.length;
// 	let result = getNumber(numberArr, len - 1);

// 	for(let i = 0; i < len - 1; i++) {
// 		const temp = getNumber(numberArr, i);
// 		if (temp > result) {
// 			result = temp;
// 		}
// 	}

// 	return result;
// };
// console.log(digitDelete(100));
// console.log(digitDelete(10));
// console.log(digitDelete(1245));
// console.log(digitDelete(11111));


// --------------------------- 104 --------------------------- 
// const differentValues = (arr, max) => {
// 	const len = arr.length;
// 	const lastIndex = len - 1;
// 	let result = 0;
// 	for(let i = 0; i < lastIndex; i++){
// 		for(let j = i+1; j < len; j++){
// 			const diff = Math.abs(arr[i] - arr[j]);
// 			if(diff <= max && diff > result) {
// 				result = diff;
// 			}
// 		}
// 	}

// 	return result;
// };
// console.log(differentValues([12, 10, 33, 34], 10));
// console.log(differentValues([12, 10, 33, 34], 24));
// console.log(differentValues([12, 10, 33, 44], 40));


// --------------------------- 106 --------------------------- 
// const divideDigit = (org, divider) => {
// 	if (org === 0 || [0, 1].includes(divider)) {
// 		return org;
// 	}

// 	let result = org;
// 	let previous;
// 	do {
// 		previous = result;
// 		result = result/divider;
// 	}while(Number.isInteger(result));

// 	return previous
// };
// console.log(divideDigit(-12, 2))
// console.log(divideDigit(13, 2))
// console.log(divideDigit(13, 1))

// --------------------------- 107 ---------------------------
// const arrPairs = (arr) => {
// 	const len = arr.length;
// 	const lastIndex = len - 1;
// 	let sum = 0;
// 	for(let i = 0; i < lastIndex; i++) {
// 		for(let j = i+1; j < len; j++) {
// 			if(arr[j]%arr[i] === 0){
// 				sum++;
// 			}
// 		}
// 	}

// 	return sum;
// };

// console.log(arrPairs([1,2,3]))
// console.log(arrPairs([2,4,6]))
// console.log(arrPairs([2,4,16]))


// --------------------------- 108 ---------------------------
// const dotProduct = (vector1, vector2) => {
// 	let sum = 0;
// 	vector1.map((v1, index) => {
// 		sum += v1*vector2[index];
// 	});

// 	return sum;
// };

// console.log(dotProduct([1,2,3], [1,2,3]))
// console.log(dotProduct([2,4,6], [2,4,6]))
// console.log(dotProduct([1,1,1], [0,1,-1]))


// --------------------------- 109 ---------------------------
// const sortPrime = (num) => {
// 	const prime = [2, 3];
// 	const primeLength = prime.length;

// 	if(num > prime[primeLength-1]){
// 		let nextPrime = prime[primeLength-1];
// 		do {
// 			nextPrime += 2;
// 			const len = prime.length;

// 			let isPrime = true;
// 			for(let i = 0; i < len; i++){
// 				if(nextPrime%prime[i] === 0) {
// 					isPrime = false;
// 					break;
// 				}
// 			}

// 			if(isPrime){
// 				prime.push(nextPrime);
// 			}
// 			// console.log('temp', temp);
// 		}while(nextPrime <= num);
// 	}


// 	return prime.filter(p => p <= num);
// };
// console.log(sortPrime(3))
// console.log(sortPrime(5))
// console.log(sortPrime(11))
// console.log(sortPrime(19))


// --------------------------- 110 ---------------------------
// const findNumbers = (arr, limit) => {
// 	const arrLen = arr.length;
// 	let count = 0;
// 	for(let i = 0; i < arrLen; i++) {
// 		if(arr[i] < limit && arr[i]%2 == 0) {
// 			count++;
// 		}
// 	}

// 	return count;
// };

// console.log(findNumbers([1,2,3,4,5,6,7,8], 5))
// console.log(findNumbers([1,3,5,6,7,8], 6))


// --------------------------- 111 ---------------------------
// const findThirdNumber = (a, b, c) => {
// 	const arr = [a, b, c];
// 	const len = arr.length;
// 	const lastIndex = len - 1;

// 	for(let i = 0; i < lastIndex; i++){
// 		for(let j = i+1; j < len; j++){
// 			if(arr[i] === arr[j]){
// 				return arr[i];
// 			}
// 		}
// 	}

// 	return false;
// };
// console.log(findThirdNumber(1,2,2))
// console.log(findThirdNumber(1,1,2))
// console.log(findThirdNumber(1,2,3))


// --------------------------- 112 ---------------------------
const factorial = function  calFact(num) {
	return (num)*(num > 1 ? calFact(num-1) : 1);
};

const trailingZerosFactorial = (num) => {
	const value = factorial(num);
	const valueReverse = `${value}`.split('').reverse();
	const len = valueReverse.length;

	let sum = 0;
	for (let i = 0; i < len; i++){
		if(valueReverse[i] === '0'){
			sum++;
		}else{
			break;
		}
	}
	return sum;
};

console.log(trailingZerosFactorial(8))
console.log(trailingZerosFactorial(9))
console.log(trailingZerosFactorial(10))
