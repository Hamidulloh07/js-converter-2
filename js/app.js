let sayHi = function (text) {
  let wordArray = text.split(" ");

  let longestWord = wordArray[0];

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length < longestWord.length) {
      longestWord = wordArray[i];
    };
  };

  return longestWord;
};
let result = sayHi("sobit obit bit it");
console.log("sobit obid bit it sozlaridan eng kichkinasi");
console.log(result);

//uy ishi 2
let sayHiNumber = function (text) {


  let longestWord2 = numbers[0];

  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] > longestWord2) {
      longestWord2 = numbers[j];
    }
  }

  return longestWord2;
}
let numbers = [10, 40, 50, 60, 70, 80, 4, 90, 100];
let result2 = sayHiNumber();
console.log(`10, 40, 50, 60 ,70 ,80, 4, 90 ,100 sonlaridan eng kattasi`);
console.log(` ${result2}`);

//uy ishi 3
let sayHiNumber2 = function (number3) {

  let longNumbers3 = numbers2[0];

  for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] < longNumbers3) {
      longNumbers3 = numbers2[i];
    }
  }

  return longNumbers3;
}
let numbers2 = [10, 40, 50, 60, 70, -80, 4, 90, 100];
let resul3 = sayHiNumber2();
console.log(`10, 40, 50, 60 ,70 ,-80, 4, 90 ,100 sonlaridan eng kichigi`);
console.log(`${resul3}`);