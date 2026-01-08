document.querySelector("#scroll").addEventListener("click",scrollCallBack,false);
document.querySelector("#scrollTo").addEventListener("click",scrollToCallBack,false);
document.querySelector("#scrollBy").addEventListener("click",scrollByCallBack,false);

// non standard
document.querySelector("#scrollByLines").addEventListener("click",scrollByLinesCallBack,false);
document.querySelector("#scrollByPages").addEventListener("click",scrollByPagesCallBack,false);

// Sur les éléments scrollables
document.querySelector("#scrollElt").addEventListener("click",scrollEltCallBack,false);
document.querySelector("#scrollToElt").addEventListener("click",scrollToEltCallBack,false);
document.querySelector("#scrollByElt").addEventListener("click",scrollByEltCallBack,false);
document.querySelector("#scrollTopElt").addEventListener("click",scrollTopEltCallBack,false);

// pas de différence de fonctionnement entre scroll et scrollTo
// La plupart des navigateurs supportent les deux mais attention

function scrollCallBack(){
    window.scroll(0,1000);
}

function scrollToCallBack(){
    window.scrollTo({
        left:0,
        top:100,
        behavior:"smooth"
    });
}

function scrollByCallBack(){
    window.scrollBy(0,300);
}

// Les méthodes non standards

function scrollByLinesCallBack(){
    window.scrollByLines(5);
}

function scrollByPagesCallBack(){
    window.scrollByPages(1);
}

// Les éléments scrollables
function scrollEltCallBack(){
    document.querySelector("#scrollable").scroll(0,800);
}

function scrollToEltCallBack(){
    document.querySelector("#scrollable").scrollTo({
        left:0,
        top:100,
        behavior:"smooth"
    });
}

function scrollByEltCallBack(){
    document.querySelector("#scrollable").scrollBy(0,300);
}

function scrollTopEltCallBack(){
    document.querySelector("#scrollable").scrollTop+=100;
    //document.documentElement.scrollTop+=100;
}