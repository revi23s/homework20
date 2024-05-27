// 1.reqemlerden ibaret bir array yaradin ve hemen arryin icinde gezerek (dovr) tek edeleri tapib her birini 1 vahid artirin.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 != 0) {
//     array[i]++;
//     console.log(array[i]);
//   }
// }
// console.log(array);

// 2.reqemlerden ibaret bir array yaradin ve icinde gezerek cut olan ededleri arrain 1-ci elemtine, tek olan edeleri ise arrayin sonuncu elementine vurun.

// let array = [1, 4, 7, 8, 10, 13, 14, 16, 18, 5];

// let tempArray = [1, 4, 7, 8, 10, 13, 14, 16, 18, 5];

// for (let index = 0; index < array.length; index++) {
//   if (array[index] % 2 == 0) {
//     // cut
//     array[index] = array[index] * tempArray[0];
//   } else {
//     // tek
//     array[index] = array[index] * tempArray[tempArray.length - 1];
//   }
// }

// console.log(array);

// 3. reqemlerden ibaret bir array yaradin ve icinde gezerek arrayin en boyuk ve en kicik elementini tapin daha sonra tapdiginiz bu iki reqemin hasilini console-a yazdirin.

let array = [2, 3, 4, -5, 6, 7, 8, 9, 17, 11, 13];
let largestNum = array[0];
let smallNum = array[0];
for (let index = 0; index < array.length; index++) {
  //   console.log(array[index]);
  if (array[index] > largestNum) {
    largestNum = array[index];
  }
  if (array[index] < smallNum) {
    smallNum = array[index];
  }
}
console.log(`${largestNum}: Boyuk ededimiz ${smallNum}: kicik ededimiz`);

hasil = largestNum * smallNum;
console.log(hasil);
