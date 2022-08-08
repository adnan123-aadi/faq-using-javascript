let faq=document.querySelectorAll(".faq").forEach(function(item){
item.addEventListener("click",function(){
    item.classList.toggle("active");
})

});