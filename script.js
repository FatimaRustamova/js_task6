let myExample = document.querySelector(".example");
let my_h_element = document.querySelector("#h-element");
let myButton1 = document.querySelector("#btn1");
let myButton2 = document.querySelector("#btn2");
let myButton3 = document.querySelector("#btn3");
let myButton4 = document.querySelector("#btn4");
let myButton5 = document.querySelector("#btn5");
let myButton6 = document.querySelector("#btn6");
let myButton7 = document.querySelector("#btn7");
let myButton8 = document.querySelector("#btn8");
let myColor1 = document.querySelector("#color1");
let myColor2 = document.querySelector("#color2");

let font_size = 25;
let border_radius = 0;
let height = 50;
let width = 300;

//---Font Size(+)---
let Button_1 = () => {
    font_size += 5;
    my_h_element.style.fontSize = font_size + "px";
}

myButton1.addEventListener("click" , Button_1);

//---Font Size(-)---
let Button_2 = () => {
    font_size -= 5;
    my_h_element.style.fontSize = font_size + "px";
}

myButton2.addEventListener("click" , Button_2);

//---Border Radius(+)---
let Button_3 = () => {
    border_radius += 5;
    myExample.style.borderRadius = border_radius +"px";
}

myButton3.addEventListener("click" , Button_3);

//---Border Radius(-)---
let Button_4 = () => {
    border_radius -= 5;
    myExample.style.borderRadius = border_radius +"px";
}

myButton4.addEventListener("click" , Button_4);

//---Height(+)---
let Button_5 = () => {
    height += 5;
    myExample.style.height = height + "px";
}

myButton5.addEventListener("click" , Button_5);

//---Height(-)---
let Button_6 = () => {
    height -= 5;
    myExample.style.height = height + "px";
}

myButton6.addEventListener("click" , Button_6);

//---Width(+)---
let Button_7 = () => {
    width += 5;
    myExample.style.width = width + "px";
}

myButton7.addEventListener("click" , Button_7);

//---Width(-)---
let Button_8 = () => {
    width -= 5;
    myExample.style.width = width + "px";
}

myButton8.addEventListener("click" , Button_8);

//---Text Color---
let Color_1 = () => {
    my_h_element.style.color = myColor1.value;
}

myColor1.addEventListener("click" , Color_1);


//---Background Color---
let Color_2 = () => {
    myExample.style.borderColor = myColor2.value;
}

myColor2.addEventListener("click" , Color_2);