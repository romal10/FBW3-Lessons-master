// add export brfore declaration 
 let greeting = " welcome back ";

 function hi(user){
    return `${greeting}  ${user} in javascript Module`
    //return 'Hello world' + user ;
}


// add export after declaration
export {greeting,hi,makeElement}


export default function doubleNumber(num) {
    return num * 2;
  }

  function makeElement(element,text,background){
      let el = document.createElement(element);
      el.append(text);
      el.style.background = background;
      el.style.color="#fff";
      el.style.height="100px";
      document.body.append(el);
  }