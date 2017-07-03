document.body.onscroll = function() {myScrollFunction()};
window.scroll({
    behavior: 'smooth' 
    });
function myScrollFunction() {
    if ( document.documentElement.scrollTop > 15 || document.body.scrollTop > 15 ) {
        document.getElementById("myBtn").style.display = "inline-block"; 
    }
    else {
        document.getElementById("myBtn").style.display = "none";    
    }
}
function topFunction() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}