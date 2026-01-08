document.body.addEventListener("wheel",affichWheel,false);
window.addEventListener("scroll",affichScroll,false);

function affichWheel(evt){
    let texte = "deltaX : "+evt.deltaX+"<br />";
    texte += "deltaY : "+evt.deltaY+"<br />";
    texte += "deltaZ : "+evt.deltaZ;
    document.querySelector("#affichWheel").innerHTML = texte; 
}

function affichScroll(evt){
    console.log("scroll");
    let texte = "scrollY : "+window.scrollY;
    document.querySelector("#affichScroll").innerHTML = texte; 
}