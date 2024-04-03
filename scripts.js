

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
    
}

function getthumb(parent) {

    const img = document.createElement("img");
    img.src = './Posts/Test/wallywink2.jpg';
    img.setAttribute("class", "thumb");
    parent.appendChild(img);
}