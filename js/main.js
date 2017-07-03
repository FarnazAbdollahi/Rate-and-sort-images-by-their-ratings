var ratings = [];
var i = 1;
var star = [];
var list = [
    {name:"0", value:null},
    {name:"1", value:null},
    {name:"2", value:null},
    {name:"3", value:null},
]
function hover(node,starIndex) {
    star = node.getElementsByTagName("LI");
        console.log(star);    
    for(i = 1 ; i < starIndex ; i++) {
        if ( star[i].className !== "rateImg Activated") {
            star[i].style.backgroundPosition = '-24px 0';
        }
    }
}
function hoverOut(node,starIndex) {
    star = node.getElementsByTagName("LI");
        for(i = 1 ; i < starIndex ; i++) { 
            if ( (star[i].className) !== "rateImg Activated") {         
            star[i].style.backgroundPosition = '0';
        }
    }
}

function rate(node,ulID,starIndex) {
    star = node.getElementsByTagName("LI");
    if ( (node.className) !== "ratingStar rated" ) {
        for (i = 1 ; i < starIndex ; i++ ){ 
            star[i].setAttribute("class", "rateImg Activated");
            star[i].setAttribute("style","background-position : -24px 0");
        }
        node.setAttribute("class" , "ratingStar rated");
        var name = ulID;
        var imgVal = document.createAttribute("value");
        imgVal.value = starIndex; 
        (document.getElementsByTagName("img")[ulID-1]).setAttributeNode(imgVal);
        list[ulID-1].value = starIndex;

        rateText = document.createTextNode(starIndex);
        (document.getElementById("showR" + ulID)).appendChild(rateText);
    }
    else {
        window.alert("you have already rated this image!");
    }
    if ((document.getElementById("1").className) === "ratingStar rated" && (document.getElementById("2").className) === "ratingStar rated" && (document.getElementById("3").className) === "ratingStar rated" && (document.getElementById("4").className) === "ratingStar rated") {
        document.getElementById("sortBtn").style.display = 'block';
    }
    else {        
        document.getElementById("sortBtn").style.display = 'none';
    }
}

function sortRate() {
    if ( document.getElementById("sorted").className !== "sorted") {
    list.sort( function (a,b) {
        return a.value - b.value;
    });
    document.getElementById("sorted").style.display = 'block';
    var id = "#"; 

    var txt1 = document.createTextNode("Rate: " + list[0].value);
    document.getElementById(id+1).appendChild(txt1);
    var img1 = document.getElementsByTagName("IMG")[list[0].name];
    var cln1 = img1.cloneNode(true);
    document.getElementById(id+1).appendChild(cln1);
    
    var txt2 = document.createTextNode("Rate: " + list[1].value);
    document.getElementById(id+2).appendChild(txt2);
    var img2 = document.getElementsByTagName("IMG")[list[1].name];
    var cln2 = img2.cloneNode(true);
    document.getElementById(id+2).appendChild(cln2);
    
    var txt3 = document.createTextNode("Rate: " + list[2].value);
    document.getElementById(id+3).appendChild(txt3);
    var img3 = document.getElementsByTagName("IMG")[list[2].name];
    var cln3 = img3.cloneNode(true);
    document.getElementById(id+3).appendChild(cln3);
    
    var txt4 = document.createTextNode("Rate: " + list[3].value);
    document.getElementById(id+4).appendChild(txt4);
    var img4 = document.getElementsByTagName("IMG")[list[3].name];
    var cln4 = img4.cloneNode(true);
    document.getElementById(id+4).appendChild(cln4);

    document.getElementById("sorted").setAttribute("class" , "sorted");
}
    else {
        window.alert ("images have been sorted");
    }
}

