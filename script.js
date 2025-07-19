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
        console.log();
       if(turn){
        box.innerText='O'
        turn=false;}
        else{
            box.innerText='X'
            turn=true
        }

        box.disabled=true
        checkwinner()

    })
    
})

const checkwinner=()=>{
    for(let data of win_pattern){
        // console.log(data[0],data[1],data[2])
        // console.log(boxes[data[0]].innerText,boxes[data[1]].innerText,boxes[data[2]].innerText)
        let pos1=boxes[data[0]].innerText
        let pos2=boxes[data[1]].innerText
        let pos3=boxes[data[2]].innerText

        if(pos1!='' && pos2!='' && pos3!=''){
            if(pos1===pos2 && pos2==pos3)
                console.log("winner is " ,pos1)
        }
    }
}
    
