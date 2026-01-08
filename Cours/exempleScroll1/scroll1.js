document.addEventListener("scroll",scrollWindow,false);
document.querySelector("p").addEventListener("scroll",scrollP,false);

function scrollWindow(evt){
    let texte = "Le document<br />";
    texte += "scrollX : "+window.scrollX+"<br />";
    texte += "scrollY : "+window.scrollY+"<br />";
    texte += "pageXOffset : "+window.pageXOffset+"<br />";
    texte += "pageYOffset : "+window.pageYOffset+"<br />";
    texte += "document.documentElement.scrollLeft : "+document.documentElement.scrollLeft+"<br />";
    texte += "document.documentElement.scrollTop : "+document.documentElement.scrollTop+"<br />";
    texte += "document.documentElement.scrollWidth : "+document.documentElement.scrollWidth+"<br />";
    texte += "document.documentElement.scrollHeight : "+document.documentElement.scrollHeight+"<br />";
    texte += "document.documentElement.clientWidth : "+document.documentElement.clientWidth+"<br />";
    texte += "document.documentElement.clientHeight : "+document.documentElement.clientHeight+"<br />";
    texte += "window.innerWidth : "+window.innerWidth+"<br />";
    texte += "window.innerHeight : "+window.innerHeight+"<br />";   
    document.querySelector("#afficheWindow").innerHTML = texte;
}

function scrollP(evt){
    const p = document.querySelector("p");
    let texte = "Le paragraphe<br />"
    texte += "element.scrollLeft : "+p.scrollLeft+"<br />";
    texte += "element.scrollTop : "+p.scrollTop+"<br />";
    texte += "element.scrollWidth : "+p.scrollWidth+"<br />";
    texte += "element.scrollHeight : "+p.scrollHeight+"<br />";
    texte += "element.clientWidth : "+p.clientWidth+"<br />"
    texte += "element.clientHeight : "+p.clientHeight+"<br />";
    document.querySelector("#afficheP").innerHTML = texte;
}