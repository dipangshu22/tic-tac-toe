let boxes=document.querySelectorAll(".box")
let reset=document.querySelector('#reset')
let turn=true;
let win_pattern=[
[0,1,2],
[0,4,8],
[0,3,6],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]

]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("clicked");
        box.innerText="hello "
    })
})


    
