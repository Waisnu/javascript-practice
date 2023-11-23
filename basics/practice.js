
// OBJECT DESTRUCTURING
const dog = {
    name: ' akilis' ,
    age: 4,
    color: 'black',
    bark() {
      console.log('woof woof');
    }
  };
  
  // const name = dog.name;
  // const age = dog.age
  // const color = dog.color;
  
  const { name, age , color} = dog;
  
  console.log(name);
  console.log(age); 
  console.log(color);
  
  
  //ARRAY DESTRUCTURING
  // --------------------------------
  const arr = ['foo' , 'bar' , 'baz'];
  
  const result = arr[arr.length - 1];
  console.log(result);
  // output : baz
  // --------------------------------
  const [first, second, third] = arr;
  console.log(first, second, third);
  // output : foo bar baz
  // --------------------------------
  
  const anotheArr = [['apple', 'orange'], ['banana', 'grape'], ['cherry', 'kiwi']];
  const result2 = anotheArr[2][1];
  console.log(result2); // Should log 'kiwi'
  
  // ------------ARRAY METHODS--------------------
  
  
  
  // =================== MAP ======================
  const numbers = [1, 2, 3, 4, 5] 
  const doubledNumbers = numbers.map(num => num * 2);
  
  console.log(doubledNumbers); // Should log [2, 4, 6, 8, 10]
  // ===================== FILTER ======================
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  
  console.log(evenNumbers, 'the numbers with remainders are excluded by the new created array with filter'); // Should log [2, 4] , filter creates another array
  
  console.log(`this is the original array ${numbers}`)
  
  // ===================== REDUCE ======================
  console.log('----------REDUCE EXAMPLE----------')
  
  const sum = numbers.reduce((previous, current) => previous + current, 0);
  console.log(sum); // Should log 15
  // sum = previous 0 + current 1 = 1
  // sum = previous 1 + current 2 = 3
  // sum = previous 3 + current 3 = 6
  // sum = previous 6 + current 4 = 10
  // sum = previous 10 + current 5 = 15
  
  const reducePeople = [
    {
      name: 'Zek',
      age: 32
    },
    {
      name: 'Vin',
      age: 28
    },
    {
      name: 'Zed',
      age: 15
    },
    {
      name: 'Marc',
      age: 40
    }
  ];
  
  const oldestPerson = reducePeople.reduce((oldest, current) => {
    if (current.age > oldest.age) 
    {
      return current; // Return the entire object representing the current oldest person
    } 
    else 
    {
      return oldest; // Otherwise, keep the current oldest person
    }
  }, reducePeople[0]); // Start with the first person as the initial value
  
  console.log(`oldest is ${oldestPerson.age} his name is ${oldestPerson.name}`);
  
  // oldest = 0
  // oldest = 0 < 32 ? yes return 32
  // oldest = 32 < 28 ? no return 32
  // oldest = 32 < 15 ? no return 32
  // oldest = 32 < 40 ? yes return 40
  
  
  // ===================== FIND ======================
  console.log('----------FIND EXAMPLE----------')
  const findPeople = [
    {name: 'zek', age: 32},
    {name: 'vin', age: 28},
    {name: 'zed', age: 15},
    {name: 'marc', age: 40}
  ];
  
  const findMarc = findPeople.find(person => person.name === 'marc');
  console.log(`I found ${findMarc.name} well his age is ${findMarc.age} wow his old`); // Should log {name: 'Marc', age: 40}
  // ===================== FINDINDEX ======================
  console.log('----------FINDINDEX EXAMPLE----------')
  
  const findIndex = [ 1 ,2 ,3 ,4 ,5] ;
  const findIndex2 = findIndex.findIndex(num => num === 3);
  console.log(findIndex2); // Should log 2
  
  // ===================== SOME ======================
  console.log('----------SOME EXAMPLE----------')
  
  const someNumbers = [1, 2, 3, 4, 5];
  const someEven = someNumbers.some(num => num % 2 === 0);
  console.log(someEven); // Should log true
  //explain
  // 1 % 2 === 0 ? no
  // 2 % 2 === 0 ? yes return true
  // 3 % 2 === 0 ? no
  // 4 % 2 === 0 ? yes return true
  // 5 % 2 === 0 ? no
  
  // ===================== EVERY ======================
  console.log('----------EVERY EXAMPLE----------')
  
  const everyNumbers = [1, 2, 3, 4, 5];
  const everyEven = everyNumbers.every(num => num % 2 === 0);
  console.log(everyEven); // Should log false
  //explain
  // 1 % 2 === 0 ? no return false
  // 2 % 2 === 0 ? yes
  // 3 % 2 === 0 ? no return false
  // 4 % 2 === 0 ? yes
  // 5 % 2 === 0 ? no return false
  
  // ===================== SORT ======================
  console.log('----------SORT EXAMPLE----------')
  
  const sortNumbers = [4, 2, 5, 3, 1];
  const sortAscending = sortNumbers.sort((a, b) => a - b); 
  
  console.log(sortAscending); // Should log [1, 2, 3, 4, 5]
  //explain
  // 4 - 2 = 2
  // 2 - 5 = -3
  // 5 - 3 = 2
  // 3 - 1 = 2
  // 1 - 2 = -1
  // 2 - 3 = -1
  // 3 - 4 = -1
  
  const sortDescending = sortNumbers.sort((a, b) => b - a);
  console.log(sortDescending); // Should log [5, 4, 3, 2, 1]
  //explain
  // 4 - 2 = 2
  // 2 - 5 = -3
  // 5 - 3 = 2
  // 3 - 1 = 2
  // 1 - 2 = -1
  // 2 - 3 = -1
  // 3 - 4 = -1
  
  // ===================== REVERSE ======================
  console.log('----------REVERSE EXAMPLE----------')
  
  const reverseNumbers = [1, 2, 3, 4, 5];
  const reversed = reverseNumbers.reverse();
  console.log(reversed); // Should log [5, 4, 3, 2, 1]
  //explain
  // reverseNumbers.reverse() = [5, 4, 3, 2, 1]
  // reverseNumbers.reverse() = [1, 2, 3, 4, 5]
  
  
  // ===================== CONCAT ======================
  console.log('----------CONCAT EXAMPLE----------')
  
  const concatNumbers = [1, 2, 3, 4, 5];
  const concatLetters = ['a', 'b', 'c', 'd', 'e'];
  const concat = concatNumbers.concat(concatLetters);
  console.log(concat); // Should log [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e']
  //explain
  // concatNumbers.concat(concatLetters) = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e']
  // concatNumbers.concat('a', 'b', 'c', 'd', 'e') = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e']
  // concatNumbers.concat('a', 'b', 'c', 'd', 'e') = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e']
  
  
  // ===================== JOIN ======================
  console.log('----------JOIN EXAMPLE----------')
  
  const joinLetters = ['a', 'b', 'c', 'd', 'e'];
  const joined = joinLetters.join('');
  console.log(joined); // Should log 'abcde'
  // explain
  // joinLetters.join('') = 'abcde'
  // joinLetters.join(' ') = 'a b c d e'
  // joinLetters.join('-') = 'a-b-c-d-e'
  // joinLetters.join(' ') = 'a b c d e'
  // joinLetters.join('') = 'abcde'
  
  
  // ===================== SLICE ======================
  console.log('----------SLICE EXAMPLE----------')
  
  const sliceLetters = ['a', 'b', 'c', 'd', 'e'];
  const sliced = sliceLetters.slice(2, 4);
  console.log(sliced); // Should log ['c', 'd']
  // explain
  // sliceLetters.slice(2, 4) = ['c', 'd']
  // sliceLetters.slice(2, 3) = ['c']
  // sliceLetters.slice(2, 2) = []
  // sliceLetters.slice(2, 1) = []
  
  
  // ===================== SPLICE ======================
  console.log('----------SPLICE EXAMPLE----------')
  
  const spliceLetters = ['a', 'b', 'c', 'd', 'e'];
  const spliced = spliceLetters.splice(2, 2, 'z');
  console.log(spliced); // Should log ['c', 'd']
  console.log(spliceLetters); // Should log ['a', 'b', 'z', 'e']
  // explain
  // spliceLetters.splice(2, 2, 'z') = ['c', 'd']
  // spliceLetters.splice(2, 2, 'z') = ['a', 'b', 'z', 'e']
  // spliceLetters.splice(2, 2, 'z') = ['a', 'b', 'z', 'e']
  // spliceLetters.splice(2, 2, 'z') = ['a', 'b', 'z', 'e']
  
  
  // ===================== PUSH ======================
  console.log('----------PUSH EXAMPLE----------')
  
  const pushLetters = ['a', 'b', 'c', 'd', 'e'];
  const pushed = pushLetters.push('z');
  console.log(pushed); // Should log 6
  console.log(pushLetters); // Should log ['a', 'b', 'c', 'd', 'e', 'z']
  // explain
  // pushLetters.push('z') = 6
  // pushLetters.push('z') = ['a', 'b', 'c', 'd', 'e', 'z']
  // pushLetters.push('z') = ['a', 'b', 'c', 'd', 'e', 'z']
  // pushLetters.push('z') = ['a', 'b', 'c', 'd', 'e', 'z']
  
  
  // ===================== POP ======================
  console.log('----------POP EXAMPLE----------')
  
  const popLetters = ['a', 'b', 'c', 'd', 'e'];
  const popped = popLetters.pop();
  console.log(popped); // Should log 'e'
  console.log(popLetters); // Should log ['a', 'b', 'c', 'd']
  // explain
  // popLetters.pop() = 'e'
  // popLetters.pop() = ['a', 'b', 'c', 'd']
  // popLetters.pop() = ['a', 'b', 'c', 'd']
  // popLetters.pop() = ['a', 'b', 'c', 'd']
  
  
  // ===================== SHIFT ======================
  console.log('----------SHIFT EXAMPLE----------')
  
  const shiftLetters = ['a', 'b', 'c', 'd', 'e'];
  const shifted = shiftLetters.shift();
  console.log(shifted); // Should log 'a'
  console.log(shiftLetters); // Should log ['b', 'c', 'd', 'e']
  // explain
  // shiftLetters.shift() = 'a'
  // shiftLetters.shift() = ['b', 'c', 'd', 'e']
  // shiftLetters.shift() = ['b', 'c', 'd', 'e']
  // shiftLetters.shift() = ['b', 'c', 'd', 'e']
  
  
  // ===================== UNSHIFT ======================
  console.log('----------UNSHIFT EXAMPLE----------')
  
  const unshiftLetters = ['a', 'b', 'c', 'd', 'e'];
  const unshifted = unshiftLetters.unshift('z');
  console.log(unshifted); // Should log 6
  console.log(unshiftLetters); // Should log ['z', 'a', 'b', 'c', 'd', 'e']
  // explain
  // unshiftLetters.unshift('z') = 6
  // unshiftLetters.unshift('z') = ['z', 'a', 'b', 'c', 'd', 'e']
  // unshiftLetters.unshift('z') = ['z', 'a', 'b', 'c', 'd', 'e']
  // unshiftLetters.unshift('z') = ['z', 'a', 'b', 'c', 'd', 'e']
  
  
  
  // ===================== REPEAT ======================
  console.log('----------REPEAT EXAMPLE----------')
  
  const repeatLetters = ['a', 'b', 'c', 'd', 'e'];
  const repeated = repeatLetters.repeat(2);
  console.log(repeated); // Should log ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e']
  // explain
  // repeatLetters.repeat(2) = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e']
  // repeatLetters.repeat(2) = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e']
  
  
  // ===================== INCLUDES ======================
  console.log('----------INCLUDES EXAMPLE----------')
  
  const includesLetters = ['a', 'b', 'c', 'd', 'e'];
  const includes = includesLetters.includes('c');
  console.log(includes); // Should log true
  // explain
  // includesLetters.includes('c') = true
  
  
  // HIGHLIGHTS IMPORTANT JAVASCRIPT TO PREPARE FOR REACT
  
  // ===================== ARROW FUNCTIONS ======================
  console.log('----------ARROW FUNCTIONS EXAMPLE----------')
  
  
  
  
  
  