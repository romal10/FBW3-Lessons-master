import {doubleNumber,greeting} from './user.js';
import{hi} from './user.js';
let div = document.createElement("div");
div.append(hi("Romal"));
div.style.background="pink";
document.body.append(div);

console.log(doubleNumber(3)); // 6 
    
