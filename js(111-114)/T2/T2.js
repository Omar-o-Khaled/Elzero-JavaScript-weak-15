let frist_input=document.querySelector(".frist_input");
let sec_input=document.querySelector(".sec_input");
let third_input=document.querySelector(".third_input");
let select_box=document.querySelector(".select_box");
let options=document.querySelector('[label="options"]').children;

// frist Input
if(window.sessionStorage.getItem("frist_Value")){
    frist_input.value=window.sessionStorage.getItem("frist_Value");
}
frist_input.onblur=function(){
    let fIV=frist_input.value;
    window.sessionStorage.setItem("frist_Value",fIV);
    console.log(fIV);
    
}

// second Input
if(window.sessionStorage.getItem("sec_Value")){
    sec_input.value=window.sessionStorage.getItem("sec_Value");
}
sec_input.onblur=function(){
    let SIV=sec_input.value;
        window.sessionStorage.setItem("sec_Value",SIV);
        console.log(SIV);
    
}

// third Input
if(window.sessionStorage.getItem("third_Value")){
    third_input.value=window.sessionStorage.getItem("third_Value");
}
third_input.onblur=function(){
    let TIV=third_input.value;
        window.sessionStorage.setItem("third_Value",TIV);
        console.log(TIV);
    
}

// selection
if(window.sessionStorage.getItem("selectedOption")){
    for(let i=0;i<options.length;i++){
        if(window.sessionStorage.getItem("selectedOption")===options[i].innerHTML){
            options[i].setAttribute("selected","")
        }else{
            options[i].removeAttribute("selected")
        }
    }
}
select_box.onchange=function(){
    for(let i=0;i<options.length;i++){
        window.sessionStorage.setItem("selectedOption",options[select_box.value].innerHTML)
    }
}