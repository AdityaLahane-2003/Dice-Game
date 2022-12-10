var rn1=Math.floor(Math.random()*6)+1; 
var rn2=Math.floor(Math.random()*6)+1; 
var ri1="images/dice"+rn1+".png"
var ri2="images/dice"+rn2+".png"
document.querySelector(".img1").setAttribute("src",ri1 );
document.querySelector(".img2").setAttribute("src",ri2 ); 

if(rn1>rn2){
    document.querySelector("h1").textContent="Player 1 Wins 🚩";
} 
else if(rn1==rn2){
    document.querySelector("h1").textContent="Match Draw 🙌 ";
} 
else{
    document.querySelector("h1").textContent="Player 2 Wins 🚩";
}