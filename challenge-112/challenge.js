let ul=document.querySelectorAll("ul li");
let container=document.querySelector(".container")

// window.localStorage.clear()
if(window.localStorage.color){
    container.style.background=window.localStorage.color;
    ul.forEach(function(element){
        element.classList.remove("active");
    })
    document.querySelector(`[data_color=${window.localStorage.color}]`).classList.add("active");
}

ul.forEach(function(ele){
    ele.onclick=function(){
        ul.forEach(function(element){
            element.classList.remove("active");
        })
        this.classList.add("active");
        window.localStorage.color=this.getAttribute("data_color");
        container.style.background=window.localStorage.color;
    }
});