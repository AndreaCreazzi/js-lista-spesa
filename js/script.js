// controllo js
console.log(`JS OK`)

// elemento preso dal DOM
const listElement = document.getElementById(`list`);
console.log(listElement)

// array dalla lista

const items = [`latte,` , `yogurt,` , `pane,` , `ecc`];
console.log(items)
// variabile html
let item;

// ciclo for
// for(let i = 0 ; i < items.length ; i++){
//     item = items[i]
//     console.log(item)
//     ! elemento inserito nel DOM
//     listElement.innerText += item
// };

// ciclo while

let i = items
 while(!item){
    item = i
    i++
    console.log(item)
   //  elemento inserito nel DOM
    listElement.innerText += item
   };