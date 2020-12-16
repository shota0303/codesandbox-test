// /**
//  *  const let 等の解説
//  */

// var val1 = "var変数";

// console.log(val1);

// /**
//  * テンプレート文字列
//  */

// const name = "miku";
// const age = 17;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";

// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です,年齢は${age}です。`;

// console.log(message2);

// /**
//  * アロー関数
//  */
// //function func1(str) {
// //  return str;
// //}

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// // アロー関数
// const func2 = (str) => str;

// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(3, 7));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "miku",
//   age: 17
// };

// const message1 = `名前は${myProfile.name}です。`;

// console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です。`;

// console.log(message2);

// const myProfile = ["miku", 17];

// const message3 = `名前は${myProfile[0]}`;

// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `年齢は${age}`;

// console.log(message4);

/**
 * デフォルト値、引数
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello();

/**
 * スプレッド変数
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// //sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列をコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];

// console.log(arr7);

/**
 * mapやfillter
 */
// const nameArr = ["田中", "佐藤", "高木"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "佐藤") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

/**
 * 三項演算子
 */
// const val1 = 1 < 0 ? "trueです。" : "falseです。";
// console.log(val1);
// const num = "1300";

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています。" : "許容範囲です。";
// };

// console.log(checkSum(90, 11));
