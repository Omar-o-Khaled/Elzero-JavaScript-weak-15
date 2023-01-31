// arrays
let fontInfoArray=["font_family","color","font_size"];
let family_names=["Open","Cairo","Roboto"]
let colors_names=["red","green","blue","tomato","steelblue","cadetblue"]

// counter
let family_counter=3;
let color_counter=6;
let size_counter=30;

for(let i=0;i<fontInfoArray.length;i++){
    let div=document.createElement("div");
    let label=document.createElement("label");
    let selectBox=document.createElement("select");
    let optgroup=document.createElement("optgroup");
    let br=document.createElement("br");

    div.className=fontInfoArray[i];
    label.setAttribute("for",fontInfoArray[i]);
    selectBox.setAttribute("name",fontInfoArray[i]);
    selectBox.setAttribute("id",fontInfoArray[i]);
    optgroup.label=fontInfoArray[i];

    label.innerHTML=fontInfoArray[i];

    selectBox.append(optgroup);
    div.append(label,br,selectBox);
    document.body.append(div)
}

let optgroup=document.querySelectorAll('optgroup');

let optgroup1=optgroup[0];
let optgroup2=optgroup[1];
let optgroup3=optgroup[2];


for(let i=0;i<family_names.length;i++){
    let option=document.createElement("option");
    option.value=i;
    option.innerHTML=family_names[i];
    if(i===0){
        option.setAttribute("selected","")
    }
    optgroup1.append(option)
}

for(let i=0;i<colors_names.length;i++){
    let option=document.createElement("option");
    option.value=i;
    option.innerHTML=colors_names[i];
    if(i===0){
        option.setAttribute("selected","")
    }
    optgroup2.append(option);
}

for(let i=16;i<=size_counter;i++){
    let option=document.createElement("option");
    option.value=i;
    option.innerHTML=i;
    if(i===16){
        option.setAttribute("selected","");
    }
    optgroup3.append(option);
}


let fristSelection=document.querySelector('[name="font_family"]');
let secSelection=document.querySelector('[name="color"]');
let thirdSelection=document.querySelector('[name="font_size"]');



let options_one=optgroup1.children;
let options_two=optgroup2.children;
let options_three=optgroup3.children;

// font_family
if(window.localStorage.getItem("font_family")){
    for(let i=0;i<options_one.length;i++){
        if(window.localStorage.getItem("font_family")===options_one[i].innerHTML){
            console.log(options_one[i]);
            options_one[i].setAttribute("selected","")
        }else{
            options_one[i].removeAttribute("selected")
        }
    }
}

function changeOptionOne(){
    fristSelection.onchange=function(){
        window.localStorage.setItem("font_family",fristSelection[fristSelection.value].innerHTML);
        bodyInfo();
    }
}
changeOptionOne()

// color
if(window.localStorage.getItem("color")){
    for(let i=0;i<options_two.length;i++){
        if(window.localStorage.getItem("color")===options_two[i].innerHTML){
            console.log(options_two[i]);
            options_two[i].setAttribute("selected","")
        }else{
            options_two[i].removeAttribute("selected")
        }
    }
}

function changeOptionTwo(){
    secSelection.onchange=function(){
        window.localStorage.setItem("color",secSelection[secSelection.value].innerHTML);
        bodyInfo()
    }
}
changeOptionTwo()

// font_size
if(window.localStorage.getItem("font_size")){
    for(let i=0;i<options_three.length;i++){
        if(window.localStorage.getItem("font_size")===options_three[i].innerHTML){
            console.log(options_three[i]);
            options_three[i].setAttribute("selected","")
        }else{
            options_three[i].removeAttribute("selected")
        }
    }
}

function changeOptionThree(){
    thirdSelection.onchange=function(){
        window.localStorage.setItem("font_size",thirdSelection.value);
        bodyInfo()
    }
}
changeOptionThree()

function bodyInfo(){
    document.body.style.cssText=`font-family:${window.localStorage.getItem("font_family")};color:${window.localStorage.getItem("color")};font-size:${window.localStorage.getItem("font_size")}px;text-transform: capitalize;`;
    fristSelection.style.cssText=`font-family:${window.localStorage.getItem("font_family")};background-color:${window.localStorage.getItem("color")};color:white;font-size:${window.localStorage.getItem("font_size")}px;`
    secSelection.style.cssText=`font-family:${window.localStorage.getItem("font_family")};background-color:${window.localStorage.getItem("color")};color:white;font-size:${window.localStorage.getItem("font_size")}px;`
    thirdSelection.style.cssText=`font-family:${window.localStorage.getItem("font_family")};background-color:${window.localStorage.getItem("color")};color:white;font-size:${window.localStorage.getItem("font_size")}px;`

    console.log(window.localStorage.getItem("font_family"))
    console.log(window.localStorage.getItem("color"))
    console.log(window.localStorage.getItem("font_size"))
}
bodyInfo()