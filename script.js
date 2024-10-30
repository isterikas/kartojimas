// 1. Tiesinis algoritmas

// const calculateDays = (days) => {
//     const hours = days * 24
//     const minutes = days * 24 * 60
//     return `${days} dienos yra ${hours} valandos, arba ${minutes} minučių`
// }

// console.log(calculateDays(5));

// 2. Tiesinis algoritmas
// const calculateY = (x) => {
//     const y = 16 * Math.pow(x, 4) + 2 * x
//     return y
// }

// console.log(calculateY(2))

// 3. Sąlyginis sakinys

// const x = 4
// const answer = (x%2==0) ? "lyginis skaičius" : "nelyginis skačius"

// console.log(answer);
// 4.
// const x = 3
// const y = 2
// 4.1 sąlyginis sakinys

// if (x>y){
//     console.log('x yra didesnis');
// } else {
//     console.log('y yra didesnis');

// }
// 4.2 Ternary operator
// const answer = (x>y) ? "x yra didesnis" : "y yra didesnis"
// console.log(answer);

// 4.3 Math object
// console.log(Math.max(x, y))

// 5. Sąlyginis sakinys
// const findgrade = (x) =>{
//     if (x>=0 && x<30){
//         return "failed"
//     } else if (x>=30 && x<34){
//         return 1
//     } else if (x>=35 && x<39){
//         return 2
//     } else if (x>=40 && x<44){
//         return 3
//     } else if (x>=45 && x<49){
//         return 4
//     } else if (x>=50 && x<60){
//         return 5
// }}

// console.log(findgrade(42));
// 6. Sąlyginis sakinys

// const calculateBMI = (ugis, svoris) => {
//    return svoris/Math.pow((ugis/100), 2)
// }
// console.log(calculateBMI(186, 80));

// 7. Variantų sakinys
// const showWeather = (skaicius) => {
//   switch (skaicius) {
//     case 1:
//       return "Saulėta";
//     case 2:
//       return "Lietinga";
//     case 3:
//       return "Vėjuota";
//     case 4:
//       return "Sniegas";
//     default:
//       return "Netinkamas skaičius. Įveskite skaičių nuo 1 iki 4";
//   }
// };
// console.log(showWeather(1));

// 8. Variantų sakinys

// const showSeason = (menuo) => {
//   switch (menuo) {
//     case 1:
//     case 2:
//     case 12:
//       return "Žiema";
//     case 3:
//     case 4:
//     case 5:
//       return "Pavasaris";
//     case 6:
//     case 7:
//     case 8:
//       return "Vasara";
//     case 9:
//     case 10:
//     case 11:
//       return "Ruduo";
//     default:
//       return "Netinkamas skaičius. Įveskite skaičių nuo 1 iki 12";
//   }
// };
// console.log(showSeason(8));

// 9. Cikliniai algoritmai

// for (let i=100; i<1000; i++){
//     if(i%5===0){
//         console.log(i);
//     }
// }

// 10. Cikliniai algoritmai

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   }
// }

// 11. Cikliniai algoritmai
// for (let i=-5; i<=5; i++){
//     if (i===0){
//         continue;
//     }
// console.log(1/i)
// }

// 12. Cikliniai algoritmai
// const calcSum = (x, y) =>{
//     let sum = 0
// for (let i=x; i<=y; i++){
//     sum=sum+i
// }
// return sum
// }
// console.log(calcSum(1, 5));
