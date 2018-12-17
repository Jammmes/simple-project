// find
let logo = document.getElementById('logo');
let page = document.getElementById('page');
let modal = document.getElementById('modal');
// set 
logo.addEventListener('click',function(){
    page.style.display = "block";
    modal.style.display = "flex";
})

page.addEventListener("click", function(){
    this.style.display = "none";
    modal.style.display = "none";
})