
const random = document.getElementById('rand');
const roll = document.getElementById('generate');
let randomly=0;
min=1;
max=6;

roll.onclick = function(){
    randomly  = Math.floor(Math.random()*max)+min;
    random.textContent=randomly;
}
