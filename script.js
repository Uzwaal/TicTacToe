let boxes= document.querySelectorAll(".box");
let reset= document.querySelector(".reset");
let winner = document.querySelector(".win");
let newgame1 = document.querySelector(".newgame");
let newgame = document.querySelector(".newGame");
let button = document.querySelector(".btn");


let turnO=true;
const resetGame = () => {
     turnO=true;
    enableBoxes();
    //winner.classList.add("hide");
    winner.style.display = "none";
    newgame1.style.display = "none";
}
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerHTML="o";
            turnO=false;
        } else{
            box.innerHTML="x";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});


const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }

}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }

}


const showWinner = (winnerName) => {
    winner.innerHTML = `Congratulations, winner is ${winnerName}`;
    winner.style.display = "block";
    disableBoxes();
    newgame1.style.display = "flex";
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let positionOne = boxes[pattern[0]].innerText;
        let positiontwo = boxes[pattern[1]].innerText;
        let positionThree = boxes[pattern[2]].innerText;

        if(positionOne !="" && positiontwo !="" && positionThree !=""){
            if(positionOne === positiontwo && positiontwo === positionThree){
                console.log("winner", positionOne);
                showWinner(positionOne);
            }
        }
    }
};


button.addEventListener("click", resetGame);
newgame.addEventListener("click", resetGame);