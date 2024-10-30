//1. Skaičių suma

// function calcSum(){
// let sum = 0
// for (let i=0; i<=100; i++){
// sum+=i
// }
// return sum
// }

// console.log(calcSum());

//2. Random Exercise Generator
// const myArray = [
//   "Push-ups",
//   "Sit-ups",
//   "Bear Crawls",
//   "1 mile run",
//   "60 second plank",
//   "Burpees",
//   "Jumping Jacks",
//   "Squats",
//   "Weighted Squats",
//   "Inch worms",
// ];

// const randomExer = (number)=> {
//     if (number < 1) {
//         console.log("Skaičius turi būti didesnis nei 1.");}
//   for (let i = 1; i <= number; i++) {
//       let num = Math.floor(Math.random() * 9) + 1;
//       console.log(myArray[num]);
//     }
//   }
// console.log(randomExer(5));

// 3. Monetų skaičiuoklė
// let coins = 0;
//   const answer = prompt("Ar norėtumėt monetos?");
//     while (answer === "taip") {
//     coins++;
//     alert(`Jūs turite ${coins} monetų`)
//     const answer = prompt("Ar norėtumėt monetos?");
//   if (answer === "ne") {
//     break;
//   }}

// let answer = prompt("Ar norėtumėt monetos?");
// let monetos = 0;
// while (answer === "taip"){
//     monetos++;
//     answer = prompt("Ar norėtumėt monetos?");
//   }
// console.log(monetos);

//4. Duotas vardų masyvas
// let names = [
//   "Olivia ",
//   "Jackson",
//   "Sophia",
//   "Elijah",
//   "Ava",
//   "Liam",
//   "Isabella",
// ];
//4.1 Parašykite funkciją, kuri pašalina Olivia
// function removeOlivia(names) {
//   names.splice(0, 1);
//   return names;
// }
// console.log(removeOlivia(names));

//4.2 Parašykite funkciją, kuri prideda vardą Mason į priekį.
// function addMason(names) {
//   names.splice(0, 1, "Mason");
//   return names;
// }
// console.log(addMason(names));

//4.3 Į masyvo pabaigą pridėkite savo vardą.

// function addEryk(name) {
//   names.push(name);
//   return names;
// }
// console.log(addEryk("Eryk"));

//4.4 Parašykte funkciją, kuri priima vardą ir jį pašalina iš masyvo.

// names = names.filter((name) => name !== "Elijah");
// console.log(names);

//4.5 Sukurkite masyvą withBob ir sudėkite ten vardus, kiekvienas vardas turėtų būti sujungtas su ‘withBob’, pvz. OliviawithBob, JacksonwithBob.

// function addBob(value) {
//   return value + "withBob";
// }
// const withBob = names.map(addBob);
// console.log(withBob);

//4.6 Išrikiuokite vardus nuo Z iki A

// function sortArray(array) {
//   array.sort();
//   array.reverse();
//   return array;
// }
// console.log(sortArray(names));

// 5. Procentų skaičiuoklė

// const part = document.getElementById("number")
// const whole = document.getElementById("full")
// const button = document.getElementById("submitButton")
// const output = document.getElementById("output")

// function calcPercentage(e) {
//     e.preventDefault()
//     const result = part.value*whole.value/100
//     output.innerHTML = result
// }
// button.addEventListener("click", calcPercentage)
