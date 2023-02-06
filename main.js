let table=["","","","","","","","",""];
let player1=true;
let choice_button=Array.from(document.querySelectorAll("#button"));
let reset=document.getElementById("reset");
beginGame();
reset.addEventListener("click",()=>location.reload())
let checkWin=[
    [table[0],table[1],table[2]],
    [table[3],table[4],table[5]],
    [table[6],table[7],table[8]],
    [table[0],table[3],table[6]],
    [table[1],table[4],table[7]],
    [table[2],table[5],table[8]],
    [table[0],table[4],table[8]],
    [table[2],table[4],table[6]],
];






function beginGame(){
    
    choice_button.forEach(button=>button.addEventListener("click",()=>{
        play(button);
        CheckWin();
        Turn();
        
    }));
}




function CheckWin(){
    let stillEmpty=false; 
    updateCheckwin();
    for (let i = 0; i < checkWin.length; i++) {
        
        if(equalsCheck(checkWin[i],["X","X","X"]) || equalsCheck(checkWin[i],["O","O","O"] )){
            
            if(player1==true){
                document.getElementById("win").textContent="O is the winner";
                document.getElementById("turn").textContent="";
                choice_button.forEach((button)=>button.disabled="true");

            }
            else{
                document.getElementById("win").textContent="X is the winner";
                document.getElementById("turn").textContent="";
                choice_button.forEach((button)=>button.disabled="true");
            }
        }
        else if(checkWin[i].includes("")){
            stillEmpty=true;
        } 
    }
    if(stillEmpty==false){
        document.getElementById("win").textContent="draw!";
    }
}

    function updateCheckwin(){
        checkWin=[
            [table[0],table[1],table[2]],
            [table[3],table[4],table[5]],
            [table[6],table[7],table[8]],
            [table[0],table[3],table[6]],
            [table[1],table[4],table[7]],
            [table[2],table[5],table[8]],
            [table[0],table[4],table[8]],
            [table[2],table[4],table[6]],
        ];
    }

function Turn(){
    if(player1==false){
        document.getElementById("turn").textContent="O's turn";
    }
    else{
        document.getElementById("turn").textContent="X's turn";
    }
}
function play(button){
    if(player1==true)
    {
        button.textContent="X";
        player1=false;
        table[choice_button.indexOf(button)]="X";
        console.log(choice_button.indexOf(button));
        
    }
    else{
        button.textContent="O";
        player1=true;
        console.log(choice_button.indexOf(button));
        table[choice_button.indexOf(button)]="O";
    }
    button.disabled="true";
}
function equalsCheck(a, b) {
    // check the length
    if (a.length != b.length) {
        return false;
    } else {
        let result = false;

        // comparing each element of array 
        for (let i = 0; i < a.length; i++) {

            if (a[i] !== b[i]) {
                return false;
            } else {
                result = true;
            }
        }
        return result;
    }
}