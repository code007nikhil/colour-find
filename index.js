var container = document.querySelector(".container");
// random color 
function randomcolor(){
    bhosda = "0123456789ABCDEF";
    var color ="#"
    for (let i = 0; i < 6; i++) {
        var randno =  Math.floor(Math.random()*16);
        color += bhosda[randno];
       }
    return  color;
}  
randomcolor()


// boxed 

var colors = [];   
function boxappend(){
    var clutter = ""
for (let i = 0; i < 88; i++) {
    var clr = randomcolor();
    clutter += `<div id="${clr}" class="box${i} box" style="background:${clr}"></div>`;
    colors.push(clr);
    container.innerHTML = clutter;      
}
}
boxappend();


// color box 

let currectclr;
function current(){
   currectclr = colors[Math.floor(Math.random()*30)];

 var colorbox = document.querySelector(".colorbox");
 colorbox.style.background = currectclr;
} 
current()


 let score = 0;
 var chance = 5;
 container.addEventListener("click",function(event){
   var choosedClr = event.target.id;
   if (chance > 0 ) {
    if (choosedClr == currectclr) {
        score += 1;
        document.querySelector(".score").textContent = score
        console.log(score);
        colors = [];
        boxappend();
        current();
        document.querySelector(".sc").style.background = `rgb(15, 224, 15)`;
        setTimeout(()=>{
            document.querySelector(".sc").style.background = `yellow`;
        },500)

    } 
    else if(chance == 1 && choosedClr !== currectclr){
        container.style.display = "flex"
        container.style.alignItems = "center"
        container.style.justifyContent = "center"
        container.innerHTML = `<div style="color:white; text-align:center;" class="gameover">
        <h1 style="font-size:50px">Game Over</h1>
        <button class="over">play Again</button>
    </div>`
        chance -=1
        document.querySelector(".chance").textContent = chance;
        var overbtn = document.querySelector(".over");
        overbtn.addEventListener("click",function(){
             location.reload();
        })
        document.querySelector(".ch").style.background = `red`;
        document.querySelector(".sc").style.background = `rgb(15, 224, 15)`;
    }
    else{
        // alert("wrong color");
        chance -= 1;
        document.querySelector(".chance").textContent = chance;
        document.querySelector(".ch").style.background = `red`;
        setTimeout(()=>{
            document.querySelector(".ch").style.background = `yellow`;
        },500)
    }
   }
})

