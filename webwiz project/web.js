setInterval(updatetime,1000)
function updatetime(){
    samay.innerHTML=new Date();
}

function red(){
    document.bgcolor="red";

}
function fun(){
    alert("welcome")
}
function changetext(){
    let headings=document.getElementById('heading');
    headings.textContent='welcome!';
    setTimeout(changetext,5000);

}
