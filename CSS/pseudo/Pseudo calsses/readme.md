# UI Basics : Layout
​
## CSS Pseudo Classes           
​
​

A pseudo-class is used to define a special state of an element, 
​For example, it can be used to:

    Style an element when a user mouses over it
    Style visited and unvisited links differently
    Style an element when it gets focus

---
​
## `Pseudo Classes`
​
```css
selector:pseudo-class {
  property:value;
}
```

Anchor Pseudo-classes

`Links` can be displayed in different ways:
​

​
###  Example
​
```css
/* unvisited link */
a:link{
    color:red;
}
/* mouse over link */
a:hover {
    color: hotpink;
    font-weight: bold;
    font-size:22px;
  }
/* visited link */
 a:visited{
     color:yellowgreen;
     font-weight: bold;
 }

/* selected link */
 a:active{
color:orange;
font-size:33px;
 } 
```
​

