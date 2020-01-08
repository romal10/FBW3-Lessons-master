import {greeting,hi,makeElement} from './user.js';
// import {hi} from './user.js';

// no need to add {} after import because doubleNumber is export default 
import doubleNumber from './user.js'; 
//alert(doubleNumber(250));

// let div = document.createElement("div");
// div.append(hi("Romal"));
// div.style.background="pink";
// document.body.append(div);

makeElement("div",hi("Romal"),"pink");
makeElement("div",hi("Farhan"),"lightgreen");
makeElement("span",hi("Ali"),"red");
makeElement("section",hi("Dan"),"blue");


