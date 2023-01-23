setInterval(updatetime,1000)
function updatetime(){
    var elem= document.getElementById("heading");
}

function red(){
    document.body.style.backgroundColor = '#ffffff';

}
function fun(){
    alert("welcome")
}
function changetext(){
    
    setTimeout(changetext,5000);

}

window.setInterval(function()
{
    let headings=document.getElementById('heading');
    headings.textContent='welcome!';
},5000)
