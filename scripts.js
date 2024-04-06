

document.addEventListener("DOMContentLoaded", hello)
{  

    
}

const maxentries = 4;
function hello()
{
    //alert("bong");
    //alert(document.querySelector(".gallerygrid"));

/*    var newel = document.createElement("p");
    var newtxt = document.createTextNode("helloss");

    newel.appendChild(newtxt);
    grid.appendChild(newel);*/
    const grid = document.querySelector(".gallerygrid");

    if (grid)
    {
        for (let i = 0; i < maxentries; i++) {
            var newrect = document.createElement("div");
            newrect.setAttribute("class", "genrect");
            grid.appendChild(newrect);

            getthumb(newrect);
        }
    }
    getposts()
    
}

function getthumb(parent) {

    const img = document.createElement("img");
    img.src = './Posts/Test/wallywink2.jpg';
    img.setAttribute("class", "thumb");
    parent.appendChild(img);
}

async function getposts() {

    const path = "./Posts/Test/wallywink2.jpg";
    alert("1"); 

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./Posts", true);
    xhttp.send();
    var res = xhttp.responseText;
    var parser = new DOMParser();
    var out = parser.parseFromString(res, "text/html");

    console.log(res);
    alert("2");
/*
    var x = await (fetch('./styles.css', ))
    var y = await x.text;*/

  /*  alert(y);

    fetch("styles.css")
        .then((response) => {
            alert(response.text);
        })
    

    alert("2");*/
  /*  
    var post;
    alert("ok");
    var fs = require('fs');
    alert("2");
    var files = fs.readdirSync('../Posts');
    
    alert(files[0]);
    
    post = fetch(path)
        .then(x => x.text)
        .then(alert(x.text));
    alert(x.text);


    alert(post.document.querySelector(".mainimg"));*/


}