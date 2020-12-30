// // // Написать функцию, которая принимает два числа и возращает результат их умножения
// // function aa(a, b) {
// //     return a * b;
// // }
// // console.log(aa(7, 5));
// // // Написать функцию, которая принимает пол человека('M', 'F') в виде строки, 

// // // результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен"s 
// // function man(){
// //     let m=prompt("ваш пол");
// //     if (m=="male"){
// //         console.log( "Ваш пол мужской" );
// //     }
// //     else if(m=="female"){
// //         console.log("Ваш пол  женский");
// //     }
// //     else{
// //         console.log("Ваш пол не опеределен");
// //     }
// // }
// // man();

// // Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.
// function sum(){
// let summ=0;
// for(let i=0; i<=100; i++){
//     summ=summ+i;

// }
// console.log(summ);
// }
// sum();
// // Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.
// function cube(num){
//     console.log(num*num*num);
// }
// cube(2);

// // Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное.
// //  В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.
// function a(num){
//     if(num=>0){
//         console.log("+++");
//     }
//     else{
//         console.log("---");
//     }
// }
// a(0);
// // Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.

// function summ(a,b,c){
//     let sum=a+b+c;
//     console.log(sum);
// }
// summ(4,3,15);

 

//  Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. 
// Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
// function func(n){
//  for(let i=0; i<=n;i++){
 
 
//   if(n>10){
    
//       n=n/2;
//       console.log(n);
//       }   
 
// }

// }
 
// func(100); 
// Напишите функцию, которая будет находить сумму квадратов элементов массива.

 
// function getSum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum =sum+Math.sqrt(elem);
// 	}
	
// 	return sum;
// }

// let arr1 = [3, 3];
 
// console.log(getSum(arr1));

// // Сделайте функцию getDigitsSum (digit - это цифра), которая параметром будет принимать целое число и возвращать сумму его цифр.
// function getDigitsSum (n, m){
//     let summ=n+m;
//     return summ;

// }
// console.log(getDigitsSum(5,6));
 

// // Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку 
// // "Привет Иван Петров с возрастом 17 лет" (только здесь данные, которые были переданы в функцию)

// function func(name,surName,age){
//     return console.log('Привет '+ name + surName +' с возрастом '+age+' лет')
// }
// func('Ivan ',' Petrov',28)


// // Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// function funcWeek(arg){
//    const  arr=['Понедельник','Вторник' ,'Среда','Четверг','Пятница','Суббота','Воскресенье'];
// for(let i in arr){
//     if(arg==i){
//         console.log(arr[i]);
        
//     }
  
// }
// }
// funcWeek(6);

 let salaries= {
     John: 55,
     Max:90,
     Make:60,
     Bek:50

 }
 let summ=0;
  for(let key in salaries){
      summ+=salaries[key];
  }
  console.log(summ);

  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
 
  // Напишите код, выполнив задание из каждого пункта отдельной строкой:

  // Создайте пустой объект user.
  // Добавьте свойство name со значением John.
  // Добавьте свойство surname со значением Smith.
  // Измените значение свойства name на Pete.
  // Удалите свойство name из объекта

  const user ={
  
  }
  user.name= 'John';
  user.surname='Smith';
  user.name='Pete';

  delete user.name;
  console.log( user.name)

  let sum = a => a+a;
   console.log(sum(5));
   let k= a => a+a+a;

console.log(k(6))

// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, 
// что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
const isNumberInRange = n =>{
  if(n=>10){
    return true
  }
  return false

}
console.log(isNumberInRange(5))

// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
//  

var arr =[1,2,6,87,96,3,45,10,3];

const IsPositve = num =>{
  if (num=>0 && num<=10){
    return true
  }
  return false

}
var newArr=[];

for(let i=0; i<arr.length; i++){
  if(IsPositve(arr[i])){
    newArr.push(arr[i])
  }
}
console.log(newArr)
//  Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число)
const getDivisors = n =>{
  if (n%2 == 0){
    return   true

  }
}
const arrM=[n];
 
console.log(arrM) 