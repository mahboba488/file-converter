$(function(){
    $(".toggle").on("click" , function(){
        if($(".item").hasClass("active")){
            $(".item").removeClass("active")

        }
        else{

            $(".item").addClass("active")

        }
    })
})


//range

const sliderValue = document.querySelector(".val");
        const inputslider = document.querySelector("input");

        inputslider.oninput=(()=>{
            let value = inputslider.value;
            sliderValue.textContent=value;
            sliderValue.style.left = (value/2) + "%";
            sliderValue.classList.add("show")
        });

        inputslider.onblur = (()=>{
            sliderValue.classList.remove("show")
        })


//question

$(document).ready(function(){
    $(".accordio-header").click(function(){

        $(".accordio-header").removeClass("active")
        $(this).addClass("active");
    })
})