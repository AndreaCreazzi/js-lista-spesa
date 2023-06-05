// controllo js
console.log(`JS OK`)

// elemento preso dal DOM
const listElement = document.getElementById(`list`);
console.log(listElement)

// array dalla lista
const items = [`latte,` , `yogurt,` , `pane,` , `ecc`];
console.log(items)

// variabile item
let item;

// ciclo for
// for(let i = 0 ; i < items.length ; i++){
//     item = items[i]
//     console.log(item)
//     ! elemento inserito nel DOM
//     listElement.innerText += item
// };

// variabile i
let i = items

// ciclo while
while(!item){
   item = i
   i++
   console.log(item)
   // elemento inserito nel DOM
   listElement.innerText += item
};