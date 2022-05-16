"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// let arr = [
//   {
//     id: 1,
//     name: "sher",
//   },
//   {
//     id: 2,
//     name: "rus",
//   },
//   {
//     id: 3,
//     name: "erick",
//   },
//   {
//     id: 4,
//     name: "meder",
//   }
// ]
// let result = arr.filter(function (item, i) {
//   return item.id < 3
// })
// console.log(result)
// let names = "sher,rus,erick"
// let arr = names.split(',')
// arr.reverse()
// console.log(arr)
// let str = 'анна'
// let s = str.split('')
// let a = s.reverse()
// if (str == a.join('')) {
//   console.log('ДА')
// }

/**
 * @description
 * проверяет слово на полиндром
 * 
 * @param {string} word  слово
 * 
 * @returns {boolean}
 */
// function isPolindrom(word) {
//     let str = word.split('')
//     let revers = str.reverse()
//     if (word == revers.join('')) {
//       return true
//     } else {
//       return false
//     }
//   }
//   function isPolindrom(word) {
//     return word.split('').reverse().join('') == word
//   }
// let arr = ['sher', 'rus', 'erick', 'meder']
// let content = document.querySelector('.page__content')
// render()
// let users = [
//   {
//     name: "sher",
//     phone: +222,
//     email: "sher@mail.com",
//     status: true
//   },
//   {
//     name: "rus",
//     phone: +333,
//     email: "rus@mail.com",
//     status: false
//   }
// ]
// let status = users.filter(function (item,id) {
//     return id = [1]
// })
// console.log(status)
// Задача: 
// 1. Удалить "жизнь" в массиве
// 2. Добавить массив items вначала array
// 3. Слово "Прекрасная" написать с заглавной буквы
var arr = ["eсть", "жизнь", "на", "Марсе"];
var items = ["прекрасная", "девушка"];
var h = arr.splice(1, 1);
var l = arr.unshift.apply(arr, items);
var s = arr.shift(1);
var t = s.split('');
var w = t.shift();
var r = w.toUpperCase();
var a = t.unshift.apply(t, _toConsumableArray(r));
var q = t.join('');
var e = arr.unshift(q);
console.log(arr);