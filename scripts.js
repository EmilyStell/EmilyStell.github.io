const maxentries = 4;
let categories;
let buttons;
let activetab = -1;


document.addEventListener("DOMContentLoaded", loaded)
{
    
}



function buttonActive(button) {

    button.classList.add('subactive');
}

function showContent(id) {

    if (activetab == id)
        return;

    for (i = 0; i < categories.length; i++) {

        if (i == id)
            categories[i].style.display = "";
        else
            categories[i].style.display = "none";
    }

    for (i = 0; i < buttons.length; i++) {

        if (i == id)
            buttons[i].classList.add('subactive');
        else
            buttons[i].classList.remove('subactive');
    }
    
}



function loaded()
{
    categories = document.querySelector(".content").children;
    buttons = document.getElementsByClassName("subbutton");
    for (i = 0; i < buttons.length; i++) {

        let index = i;
        buttons[i].addEventListener('click', function (event) {
            /*console.log(event.target);*/
 /*           let clicked = event.target;
            buttonActive(clicked);*/
/*            this.classList.add('subactive');*/
 /*           event.target.classList.add('subactive');*/
            showContent(index);
        });
    }

    showContent(0);
    
    const grid = document.querySelector(".gallerygrid");

    if (grid)
    {
        popgrid(grid, 4);
    }
  
}

async function popgrid(grid, maxentries) {
    const postdata = await getposts();
    const entries = Math.min(maxentries, postdata.length);

    for (let i = 0; i < entries; i++) {
        var newrect = document.createElement("a");
        newrect.setAttribute("class", "genrect");
        const path = "./Posts/" + postdata[i].url;
        /*console.log(path);*/
        newrect.setAttribute("href", path);
        grid.appendChild(newrect);


        const img = document.createElement("img");
        img.src = postdata[i].image;
        img.setAttribute("class", "thumb");
        newrect.appendChild(img);

        const title = document.createTextNode(postdata[i].title);
        newrect.appendChild(title);
    }

}
async function getthumb(path, parent) {

    const response = await fetch(path);
    const html = await response.text();

    const tempcontainer = document.createElement('div');
    tempcontainer.innerHTML = html;

    const elem = tempcontainer.querySelector(".mainimg img");
    parent.appendChild(elem);
    console.log(elem.src);
}

async function getthumbtest(parent) {

    const postdata = await getposts();
    console.log(postdata);

    const img = document.createElement("img");
    img.src = './Posts/Test/wallywink2.jpg';
    img.setAttribute("class", "thumb");
    parent.appendChild(img);
}

 async function getposts() {

     try {
         const response = await fetch("./posts.json");
         const postdata = await response.json();

         return postdata;
     } catch (error) {
         console.log("err");
 
     }
}