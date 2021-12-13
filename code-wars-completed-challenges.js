function smaller(nums) {
    let result = []
    for(; nums.length > 0;){
        let a = nums.shift();
        result.push(nums.filter(num => num < a).length);
    }
    return result;
}

console.log(
    smaller([5,4,3,2,1])
    
);

function sudokuValidation(board){
    // if(board.length !== 9) return false
    // if(typeof board === 'string') flattenBoard = Array.from(board.replace(/[\s\n\D]/g,''),elem => Number(elem));
    // let flattenBoard;
    // flattenBoard = board.reduce((result,arr) => result.concat(...arr),[]);
    // let mapped = board.map((elem,i) => {
    //     return [elem.slice(0,3) , elem.slice(3,6) , elem.slice(6,9)]
    // }).map(elem => elem[0]).reduce((result,arr) => result.concat(...arr),[]);
    // console.log(horizontal);
    // let test = board.some((elem,i) => elem.filter())
    for(let a = 0; a <= 6; a+=3){
        
        for(let b = 0; b <= 6; b+=3){
            
            let square = board.slice(a,a+3).map(elem => elem.slice(b,b+3)).reduce((result,arr) => result.concat(...arr),[]).filter((num,i,arr) => arr.indexOf(num) === i)
            console.log(square);

        }

    }
    for(let j = 0; j <= 6; j+=3){
        
        for(let i = 1; i <= 9; i+=1){
            let horizontal = board.slice(j,j+3).reduce((result,arr) => result.concat(...arr),[]).filter(elem => elem === i).length;
            let vertical = board.reduce((result,val) => result.concat(val.slice(j,j+3)),[]).filter(elem => elem === i).length
            // let numOccurNTimes = flattenBoard.filter(elem => elem === i).length
            if (horizontal !== 3 || vertical !== 3) return false;
        }

    }
    return true;
}
// console.log(
//     sudokuValidation([
//         [1, 2, 3, 4, 5, 6, 7, 8, 9],
//         [2, 3, 1, 5, 6, 4, 8, 9, 7],
//         [3, 1, 2, 6, 4, 5, 9, 7, 8],
//         [4, 5, 6, 7, 8, 9, 1, 2, 3],
//         [5, 6, 4, 8, 9, 7, 2, 3, 1],
//         [6, 4, 5, 9, 7, 8, 3, 1, 2],
//         [7, 8, 9, 1, 2, 3, 4, 5, 6],
//         [8, 9, 7, 2, 3, 1, 5, 6, 4],
//         [9, 7, 8, 3, 1, 2, 6, 4, 5]        
//     ])
// );

// [1, 2, 3, 4, 5, 6, 7, 8, 9],
// [2, 3, 1, 5, 6, 4, 8, 9, 7],
// [3, 1, 2, 6, 4, 5, 9, 7, 8],
// [4, 5, 6, 7, 8, 9, 1, 2, 3],
// [5, 6, 4, 8, 9, 7, 2, 3, 1],
// [6, 4, 5, 9, 7, 8, 3, 1, 2],
// [7, 8, 9, 1, 2, 3, 4, 5, 6],
// [8, 9, 7, 2, 3, 1, 5, 6, 4],
// [9, 7, 8, 3, 1, 2, 6, 4, 5]

snail = function(array) {
    // Clever & Optimal :
    // \/\/\/\/\/\/\/\/\/\/
    // function snail(array) {
    //     var vector = [];
    //     while (array.length) {
    //       vector.push(...array.shift());
    //       array.map(row => vector.push(row.pop()));
    //       array.reverse().map(row => row.reverse());
    //     }
    //     return vector;
    //   }
    // /\/\/\/\/\/\/\/\/\/\
    let arrayLength = array.reduce((result, val) => result.concat(val),[]).length;
    let result = [];
    for(let i = 0, j = 1;;i+=1, j+=1){
        // first line
        if(i > 0) result.push(...array[i].slice(i,-i));
        else result.push(...array[i].slice(i));
        // checking if result length match with original array length
        if(result.length >= arrayLength) break;
        // second line
        result.push(...array.map(elem => elem[elem.length - j]).slice(j,-j));
        // third line
        if(i > 0) result.push(...array[array.length - j].reverse().slice(i,-i));
        else result.push(...array[array.length - j].reverse().slice(i));
        // fourth line
        result.push(...array.map(elem => elem[i]).reverse().slice(j,-j));
    }
    return result;
}
// console.log(snail([[1,2,3],[4,5,6],[7,8,9]]));

function incrementingNumber(array){
    // return Array.from(`${Number(array.join('')) + 1}`,number => Number(number))
    // return `${Number(array.join('')) + 1}`.split('').map(elem => Number(elem))
    let arrayToString = array.join('');
    let incrementedNumber = Number(arrayToString) + 1;
    return `${incrementedNumber}`.split('').map(num => Number(num))
}
// console.log(incrementingNumber([9,9,9]));

function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        let result = ''
        let newKey = key.padEnd(str.length,key);
        for(let i = 0; i < str.length; i+=1){
            if(!abc.includes(str[i])) {result += str[i]; continue};
            let indexStr = abc.indexOf(str[i]), indexKey = abc.indexOf(newKey[i]), cipherChar = indexStr + indexKey;
            if(cipherChar >= abc.length) result += abc[cipherChar - abc.length];
            else result += abc[cipherChar];
        }
        return result;
    };
    this.decode = function (str) {
        let result = '';
        let newKey = key.padEnd(str.length,key);
        for(let i = 0; i < str.length; i+=1){
            if(!abc.includes(str[i])) {result += str[i]; continue};
            let indexStr = abc.indexOf(str[i]), indexKey = abc.indexOf(newKey[i]), cipherChar = indexStr - indexKey;
            if(cipherChar < 0) result += abc[cipherChar + abc.length];
            else result += abc[cipherChar];      
            }
        return result;
    };
  }

function removeZeros(arr){
    var arrNotZero = [];
    var arrZero = [];
    for(let i = 0; arr[i] !== undefined; i+=1){
        if(arr[i] === 0 || arr[i] === '0') arrZero = [...arrZero,arr[i]]
        else arrNotZero = [...arrNotZero,arr[i]]
    }
    return [...arrNotZero,...arrZero];
}
// console.log(removeZeros([7,2,5,0,3,4,9,3,0,8,0]));

function persistence(num) {
    let result = 0;
    while (num > 9) {
        let newNum = Array.from(`${num}`, elem => Number(elem));
        let sum = newNum.reduce((prev,curr) => prev * curr);
        num = sum;
        result += 1;
    }
    return result;
}
// console.log(persistence(864));

function stripComment(input, markers) {
    // Best Practices :
    // \/\/\/\/\/\/\/\/
    // function stripComment(input, markers) {
    //     input.split('\n').map(
    //         line => markers.reduce(
    //           (line, marker) => line.split(marker)[0].trim(), line
    //         )
    //       ).join('\n')
    //     console.log(input.split('\n'));
    // }
    // /\/\/\/\/\/\/\/\
        let newMarkers = markers.join('');
        let regex = new RegExp(` *[${newMarkers}][ \\w]+`,'ig');
        return input.replace(regex, '')
};
// console.log(stripComment("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));


function pageDigits(pages) {
    let sum = 0n;
    let newPages = pages;
    while (newPages > 9) {
        let length = String(newPages).length;
        let a = ( newPages - BigInt('1' + '0'.repeat(length - 1)) + 1n );
        sum += a * BigInt(length);
        newPages -= a;   
    }
    sum += newPages;
    return sum;
}
// console.log(pageDigits(25n));

function formatDuration (seconds) {
    let time = {'year' : 0,'day' : 0,'hour' : 0,'minute' : 0,'second' : 0}
    while(seconds > 0){
        // if (time['day'] >= 365) {time['day'] -= 365; time[`year`] += 1;}
        // else if (time['hour'] >= 24) {time['hour'] -= 24; time[`day`] += 1;}
        if (seconds >= 31536000) {seconds -= 31536000; time[`year`] += 1;}
        else if (seconds >= 86400) {seconds -= 86400; time[`day`] += 1;}
        else if (seconds >= 3600) {seconds -= 3600; time[`hour`] += 1;}
        else if (seconds >= 60) {seconds -= 60; time[`minute`] += 1;}
        else {time['second'] += seconds; seconds = 0;}
    }
    let formats = Object.keys(time).map((key) => {
        if (time[key] > 0){
            if (time[key] > 1) return key + 's';
            else return key;
        };
    }).filter(elem => elem !== undefined);
    let amountOfTime = Object.values(time).filter( elem => elem > 0);
    let result = `${amountOfTime[0]} ${formats[0]}`;
    if(formats.length === 2) result += ` and ${amountOfTime[1]} ${formats[1]}`
    else {
        for(let a = 1; a < formats.length; a+=1){
            if(a < formats.length - 1) result += `, ${amountOfTime[a]} ${formats[a]}`
            else result += ` and ${amountOfTime[a]} ${formats[a]}`
        }
    }
    return result
}
// console.log(formatDuration(7345261));

var moveZeros = function (arr) {
    return arr.filter( elem => elem !== 0).concat(arr.filter(elem => elem === 0));
}
// console.log(moveZeros([false,true,0,NaN,0,undefined,null,3,0,1]));

function validBraces(braces){
    let object = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    let stack = [];
    for(let i = 0; i < braces.length; i+=1){
        if(/[\(\{\[]/.test(braces[i])) stack.push(braces[i])
        else if(object[stack[stack.length - 1]] === braces[i]) stack.pop()
        else return false
    }
    return (stack.length === 0)
}
// console.log(validBraces('([{}])'));

function removeNb (n) {
    let sum = 0;
    let result = []
    let limit = Math.floor(n / 2);
    for(let i = 1; i <= n; i+=1){
        sum += i;
    }
    for(let a = n; a >= limit; a-=1){
        for(let b = a; b >= limit; b-=1){
            if (sum - (a + b) === a * b) {
                result.push([a,b]);
                result.push([b,a]);
            }
        }
    }
    return result.sort( (a, b) => a[0] - b[0])
}
// console.log(removeNb(100));

function pickPeaks(arr){
    let result = {pos:[],peaks:[]}
    for(let i = 1; i < arr.length - 1; i+=1){
        if(arr[i] >= arr[i+1] && arr[i] > arr[i-1]) {
            if(arr[i] === arr[i+1]){
                let remain = arr.slice(i); 
                let numAfterRepeated = remain.find(elem => elem !== arr[i]);
                if(numAfterRepeated > arr[i] || remain.every(elem => elem === arr[i])) continue;
            }
            result['pos'].push(i);
            result['peaks'].push(arr[i]);
        }
    }
    return result
}
// console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]));

function rgb(r,g,b){
    return toHex(r) + toHex(g) + toHex(b)

    function toHex(d){
        if(d > 255) return 'FF'
        if(d < 0) return '00'
        return ('0' + Number(d).toString(16)).slice(-2).toUpperCase()
    }
}
// console.log(rgb(148, 45, 28));

function sqInRect(lng, wdth){
    if(lng == wdth) return null;
    let square = lng * wdth;
    let collection = [];
    for(; square > 0;){
        let i = Math.floor(Math.sqrt(square))
        if (i > Math.min(...arguments)) i = Math.min(...arguments);
        square -= i * i;
        if(Math.max(...arguments) === lng) lng -= i;
        else wdth -= i;
        collection.push(i);
    };
    return collection;
}
// console.log(sqInRect(20,14));

const comfortableWord = word => {
    let newWord = word.toLowerCase()
    let leftHand = "qwertasdfgzxcvb"
    for(let i = 0; i < newWord.length - 1;){
        if (leftHand.includes(newWord[i]) !== leftHand.includes(newWord[i+1])) i+=1;
        else return false
    } 
    return true
};
// console.log(comfortableWord('Yams'));

var exec = function(digit) {
      return function(op) {
        if(op) return op(digit);
        else return digit;
      }
    }
var zero = exec(0)
var one = exec(1)
var two = exec(2)
var three = exec(3)
var four = exec(4)
var five = exec(5)
var six = exec(6)
var seven = exec(7)
var eight = exec(8)
var nine = exec(9)
var plus = function (r) { return function(l) { return l + r; }; }
var minus = function (r) { return function(l) { return l - r; }; }
var times = function (r) { return function(l) { return l * r; }; }
var dividedBy = function (r) { return function(l) { return l / r; }; }
// console.log(five(times(three())));

function sortOnlyTheOdds(array) {
    let newArray = array.slice(0);
    let oddNumOriginal = newArray.filter(elem => elem % 2 === 1);
    let oddNumAscend = newArray.filter(elem => elem % 2 === 1).sort( (a, b) => a-b);
    for(let i = 0; i < oddNumOriginal.length; i+=1){
        newArray.splice(newArray.indexOf(oddNumOriginal[i]),1,oddNumAscend[i])
        newArray.splice(newArray.indexOf(oddNumAscend[i]),1,oddNumOriginal[i])
    }
    return newArray;
}
// console.log(sortOnlyTheOdds([ 2, 22, 5, 1, 4, 11, 37, 0 ]));

function findOutlier(integers){
    //your code here
    let sortedInt = integers.sort( (a, b) => (Math.abs(a) % 2) - (Math.abs(b) % 2))
    return (sortedInt[0] % 2 === sortedInt[1] % 2) ? sortedInt[sortedInt.length - 1] : sortedInt[0]
}
// console.log(findOutlier([2,6,8,10,3]));

function isPrime(num) {
    if (num == 2) return true
    if (num <= 1) return false
    if (num >= 3 && num % 2 == 0) return false
      for(let i = 3; i <= Math.floor(Math.sqrt(num));i+=2){
        if(num % i == 0) return false
      }
    return true
}
// console.log(isPrime(1534645856));

function findNb(m) {
    let test = -1, a = 1;
    for(let i = 2; a ** 2 <= m;i+=1){
        a += i;
        if(a ** 2 === m) return i;
    }
    return test
}
// console.log(findNb(1071225));

function humanReadableTime (seconds) {
    hour = 0;
    minute = 0;
    second = 0;
    while (second !== seconds) {
        if(seconds >= 3600) {seconds -= 3600; hour += 1;}
        else if(seconds >= 60) {seconds -= 60; minute += 1;}
        else second += seconds;
    }
    return `${('0'+hour).slice(-2)}:${('0'+minute).slice(-2)}:${('0'+second).slice(-2)}`
}
// console.log(humanReadableTime(0));

function countBits(n) {
    let test = n.toString(2).split('').filter( (elem) => elem === '1').length
    return test
};
// console.log(countBits(1234));

function sumOddInTriangle(n){
    return n**3
}
// console.log(sumOddInTriangle(6));

function getSum( a,b ){
    //Good luck!
   let result = a, i = a;
   for(i = a; i != b;){
       if(b > a) i+=1;
       else if(b < a) i-=1;
       else return result;
       result += i
   }
   return result
}
// console.log(getSum(5,7));

function filter_list(l) {
    return l.filter( (elem) => typeof elem === 'number')
}
// console.log(filter_list([1,4,6,'adf','hdfvr']));

function findUniq(arr) {
    let newArr = [...new Set(arr)]
    let elemAmount;
    for(let i in newArr){
        elemAmount = arr.filter( (elem) => { return elem === newArr[i]}).length;
        if(elemAmount < 2) return newArr[i];
    }
    // do magic
}
// console.log(findUniq([1,1,1,1,1,2]));

function likes(names) {
    // TODO
    let result;
    if(names.length >= 4) result = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    else if (names.length === 3) result = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    else if (names.length === 2) result = `${names[0]} and ${names[1]} like this`;
    else if (names.length === 1) result = `${names[0]} likes this`;
    else result = `no one likes this`;
    return result;
}
// console.log(likes([]));

function spinWords(string){
    let regex = new RegExp('\s*[a-z]{5,}\s*','ig')
    return string.replace(regex, cb)
    function cb(match){
        return match.split('').reverse().join('');
    }
}
// console.log(spinWords("Welcome")); 

function tickets(peopleInLine){
    let newLine = peopleInLine.slice(0)
    let pocket = {100 : 0 ,50 : 0, 25 : 0}
    let moneyBill = Object.keys(pocket)
    let response = 'NO';
    for(let a of newLine){
        let changesEachPerson = a - 25
        while (changesEachPerson > 0) {
            for(let b = moneyBill.length - 1; b >= 0;){
                if(Number(moneyBill[b]) <= changesEachPerson && pocket[moneyBill[b]] > 0){changesEachPerson -= Number(moneyBill[b]); pocket[moneyBill[b]] -= 1;}
                else b-=1;
            }
            if(changesEachPerson > 0) return response;
        }
        pocket[a] += 1;
    }
    return 'YES';
}
// console.log(tickets([25,25,50,50]));

// Best Practice
// function comp(array1, array2) {
//     if(array1 == null || array2 == null) return false;
//     array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
//     return array1.map(v => v * v).every((v, i) => v == array2[i]);
//   }

function comp(array1, array2){
    if(!Boolean(array1) || !Boolean(array2)) return false;
    else if (array1.length !== array2.length) return false;
    for(let i in array2){
        if (array1.filter( elem => elem === Math.sqrt(array2[i])).length === array2.filter( elem => elem === array2[i]).length) continue;
        return false
    }
    return true;
}
// console.log(comp([2, 9, 1, 6, 3, 2, 0, 0, 6, 7, 7, 2, 0, 9, 2],[4, 4, 0, 4, 0, 81, 1, 1, 49, 4, 49, 36, 9, 36, 81]));
function score( dice ) {
    let newDice = [...new Set(dice.slice(0))]
    let result = 0;
    for(a in newDice){
        switch (newDice[a]) {
            case 1:
                if(count(newDice[a]) > 2) result += 1000 + ( (count(newDice[a]) - 3) * 100 )
                else result += count(newDice[a]) * 100
                break;
            case 5:
                if(count(newDice[a]) > 2) result += 500 + ( (count(newDice[a]) - 3) * 50 )
                else result += count(newDice[a]) * 50
                break;
            case 2:
            case 3:
            case 4:
            case 6:
                if(count(newDice[a]) > 2) result += Number(`${newDice[a]}00`)
                break;
        }
    }
    function count(n) {return dice.filter( (num) => num === n).length}
    return result
}
// console.log(score([4, 1, 1, 1, 1])); 

function rgbToHex(r, g, b){
    for(i in arguments){
        if(arguments[i] > 255) arguments[i] = 255;
    }
    // complete this function
    return parseInt(r,16);
}
// console.log(rgbToHex(255,255,300));

// My attempt
function isInteresting(number, awesomePhrases) {
    let unchangedNumber = number;
    let result = 0;
    let resultLog = []
    do {
        if(allZero()) result = 2;
        else if(sameNumber()) result = 2;
        else if(increDecreCheck()) result = 2;
        else if(palindromeCheck()) result = 2;
        else if(awesomeCheck()) result = 2;
        else number++;
        if (number < 100) {
            result = 0;
            number++;
        }
        resultLog.push(result);
    } while (result == 0 && number <= unchangedNumber + 2 && resultLog.length < 3);

    // Go to town!
    // Interesting Number :
    // 1. if number > 99
    // 2. if numbers followed by all zeros : 100, 9000
    // 3. if Every digit is the same number: 1111
    // 4. if The digits are sequential, incementing†: 1234
    // 5. if The digits are sequential, decrementing‡: 4321
    // 6. if The digits are a palindrome: 1221 or 73837
    // 7. if The digits match one of the values in the awesomePhrases array

    function increDecreCheck() {
        let numArr = Array.from(String(number),(num) => Number(num));
        if( numArr[1] == numArr[0] + 1 ){
            for(let i = 2; i< numArr.length;){
                if( numArr[i] == numArr[i-1] + 1 ) i+=1;
                else if( numArr[numArr.length - 1] == 0 && numArr[i-1] == 9) i+=1;
                else return false
            }
        }
        else if ( numArr[1] == numArr[0] - 1 ){
            for(let i = 2; i< numArr.length;){
                if( numArr[i] == numArr[i-1] - 1 ) i+=1;
                else if( numArr[numArr.length - 1] == 0 && numArr[i-1] == 1) i+=1;
                else return false;
            }
        }
        else return false;
        return true;
    }
    function palindromeCheck() {
        return Number(String(number).split('').reverse().join('')) == number
    }
    function sameNumber() {
        let numArr = Array.from(String(number),(num) => Number(num))
        for(i in numArr){
            return numArr.every( (elem) => elem == numArr[i]);
        }
    }
    function allZero(){
        let numArr = Array.from(String(number),(num) => Number(num))
        let regex = new RegExp(`^[1-9]0{${numArr.length - 1}}`);
        return regex.test(String(number));
    }
    function awesomeCheck(){
        for(a in awesomePhrases){
            if (number == awesomePhrases[a]) return true;
            else a++;
        }
    }
    return (resultLog[resultLog.length - 1] == 2 && resultLog.length > 1) ? 1 : result;
}
// console.log(isInteresting(1232, [122, 256]));

// Best Practices
// function isInteresting(number, awesomePhrases) {
//     var tests = [
//       function(n) { return /^\d00+$/.test(n); },
//       function(n) { return /^(\d)\1+$/.test(n); },
//       function(n) { return RegExp(n).test(1234567890); },
//       function(n) { return RegExp(n).test(9876543210); },
//       function(n) { return n + '' == (n + '').split('').reverse().join(''); },
//       function(n) { return awesomePhrases.some(function(p) { return p == n; }); }
//     ];
    
//     var interesting = 0;
//     tests.some(function(test) {
//       if (number > 99 && test(number))
//         return interesting = 2;
//       else if ((number > 98 && test(number + 1)) || (number > 97 && test(number + 2)))
//         interesting = 1;
//     });
//     return interesting;
// }

// My attempt
function firstNonRepeatingLetter(s) {
    let i = 0, a = s.length, b = s.toLowerCase(), obj = {};
    for(i = 0; i < a; i+=1){
        if(obj.hasOwnProperty(b[i])) delete obj[b[i]];
        else obj[b[i]] = 1; 
    }
    let arr = Object.keys(obj);
    if(arr.length == 0) return '';
    return s[s.indexOf(arr[0])] || s[s.indexOf(arr[0].toUpperCase())];
}

// Best Practices
// function firstNonRepeatingLetter(s) {
//   for(var i in s) {
//     if(s.match(new RegExp(s[i],"gi")).length === 1) {
//       return s[i];
//     }
//   }
//   return '';
// }
// console.log(firstNonRepeatingLetter('aabbcc'));
    
function domainName(url){
    //your code here
    let regex = /(\.|\/)*[a-z0-9\-]{4,}\./i
    let result = url.match(regex).join(' ').replace(/[^a-z0-9\-]/g,'');
    console.log(url.match(regex).join(''));
    return result;
}
// console.log(domainName("https://youtube.com"));     

function isIsogram(str){
    let obj = {}, i = 0, a = str.length, b = str.toLowerCase();
    for(i = 0; i < a;i+=1){
        if(obj.hasOwnProperty(b[i])) obj[b[i]] += 1;
        else obj[b[i]] = 1;
    }
    return !Object.values(obj).includes(2);
}
// console.log(isIsogram('Dermatoglyphicse'));
    
function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] == '(') n++;
        if (parens[i] == ')') n--;
        if (n < 0) return false;
    }
    return n == 0;
}
// console.log(validParentheses('(()))'));
    
function longestConsec(strarr, k) {
    if(strarr.length < 1 || k < 1 || k > strarr.length) return '';
    // your code
    let newArr = [];
    for(let i = 0; k <= strarr.length; i++){
        let concat = strarr.slice(i,k).join('');
        newArr.push(concat);
        k++;
    }
    let longestForNow = 0;
    let result;
    for(let j = 0; j < newArr.length; j++){
        if(newArr[j].length > longestForNow){
        longestForNow = newArr[j].length;
        result = newArr[j];
        }
    }
    return result;
}
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));
    
function findOdd(A) {
    let obj = {}
    let result;
    for(let  i = 0; i < A.length; i++){
        if(obj.hasOwnProperty(A[i])){
        obj[A[i]] += 1;
        }else {
        obj[A[i]] = 1;
        }
    }
    let getKey = (value) => Object.keys(obj).find(key => obj[key] === value);
    for(a in obj){
        if(obj[a] % 2 == 1) result = obj[a];
    }
    return Number(getKey(result));
}
// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
    
function decToRoman(number){
    let result = [];
    let romanObj = {
        I    :  1,		
        IV   :  4,	
        V    :  5,	
        IX   :  9,
        X    :  10,	
        XL   :  40,	
        L    :  50,	
        XC   :  90,
        C    :  100,	
        CD   :  400,	
        D    :  500,	
        CM   :  900,
        M    :  1000
    };
    let getKey = (value) => Object.keys(romanObj).find(key => romanObj[key] === value);
    let romanNum = Object.values(romanObj).sort( (a, b) => b - a);
    for(let i = 0; number > 0;){
        if(romanNum[i] <= number){
        number -= romanNum[i];
        result.push(getKey(romanNum[i]));
        i = 0;
        }else {
        i++;
        }
    }
    console.log(number);
    return result.join('');
}
// console.log(decToRoman(2007)); 
    

function updateInventory(arr1, arr2) {
    let newInvItemName = arr2.map( (elem) => elem[1])
    let updInv = [...arr2]
    arr1.reduce( (prev, curr) => {
        if (newInvItemName.indexOf(curr[1]) == -1) {
        prev.push(curr)
        } else {
        prev[newInvItemName.indexOf(curr[1])][0] += curr[0];
        } return prev;
    },updInv);
    return updInv.sort( (a, b) => a[1].localeCompare(b[1]));
}
// algorithm :
// 1. checks arr2 with arr1
// 2. if an item in arr1 doesn't exist in the arr2. push that item to arr2.
// 3. if it exist, ignore it
// if(arr2.indexOf(arr1[0][1]) >= 0) return;
// arr2.push(arr1[0])
// Example inventory lists
var curInv = [
[21, "Bowling Ball"], 
[2, "Dirty Sock"], 
[1, "Hair Pin"], 
[5, "Microphone"]
];
var newInv = [
[2, "Hair Pin"], 
[3, "Half-Eaten Apple"], 
[67, "Bowling Ball"], 
[7, "Toothpaste"]
];
// console.log(updateInventory(curInv, newInv));
    
function sym(...args) {
    // flatten all the arrays
    // take out that numbers from those two array
    // concat the remain numbers from those array with the other array
    let newArr = args.flat(1);
    let number = newArr.filter( (number) => args[0].indexOf(number) == -1 ^ args[1].indexOf(number) == -1);
    let uniqNum = [...new Set(number)]
    for(let j = 2; j < args.length; j++){
        newArr = [...uniqNum,...args[j]]
        uniqNum = newArr.filter( (number) => args[j].indexOf(number) == -1 ^ uniqNum.indexOf(number) == -1);
    }
    return [...new Set(uniqNum)];
}
// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4],[6,7,2,1,1,3]));


function isValidWalk(walk) {
    //insert brilliant code here
    let direction = {
        'n' : 1,
        's' : -1,
        'w' : 1,
        'e' : -1
    }
    let y = 0
    let x = 0
    for(let i = 0; i < walk.length; i++){
        switch(walk[i]){
        case 'n':
            y++;
            break;
        case 's':
            y--;
            break;
        case 'w':
            x++;
            break;
        case 'e':
            x--;
        }
    }
    let time = walk.length;
    return ((y == 0 && x == 0) && time == 10) ? true : false;
}
// console.log(isValidWalk(['n','e','n','e','n','e','n','e','n','e']));

// Best Practice
function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
// console.log(rot('Muhammad Fadillah Akbar'));
