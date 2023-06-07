var r1=Math.random()*6;
r1=Math.floor(r1);
r1++;
var img1="dice"+r1+".png";
var dicee1=document.querySelectorAll("img")[0];
dicee1.setAttribute("src",img1);

var r2=Math.random()*6;
r2=Math.floor(r2);
r2++;
var img2="dice"+r2+".png";
var dicee2=document.querySelectorAll("img")[1];
dicee2.setAttribute("src",img2);

var d=document.querySelector("h1");
if(r2>r1){
    d.innerHTML="Player 2 won 👑";

}

else if(r1>r2){
    d.innerHTML="Player 1 won 👑";

}
else {
    d.innerHTML="It's a Draw";
}
