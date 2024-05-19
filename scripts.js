const maxentries = 4;
let categories;
let buttons;
let activetab;


document.addEventListener("DOMContentLoaded", loaded)
{
    
}



function buttonActive(button) {

    button.classList.add('subactive');
}

function showContent(id) {

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
    activetab = id;
    sessionStorage.setItem('activeTab', id);
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

    activetab = sessionStorage.getItem('activeTab');
    if (activetab)
        showContent(activetab);
    else
        showContent(0);
        
    const grid = document.getElementsByClassName("gallerygrid");
    // const grid = document.querySelector(".gallerygrid");



    if (grid)
    {
        for (let i = 0; i < grid.length; i++) {
            if (grid[i].classList.contains("short")) {
                popshortgrid(grid[i], 4);
        
            }
            else
            popgrid(grid[i], 4);
        }
    }
  /*  const shortgrid = document.querySelector(".shortgallerygrid");
    if (shortgrid)
        popshortgrid(shortgrid, 4);*/
  
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


        const title = document.createElement("div");
        const titletext =  document.createTextNode(postdata[i].title);
        title.setAttribute("class", "posttitle");
        newrect.appendChild(title);
        title.appendChild(titletext);
    }

}

async function popshortgrid(grid, maxentries) {

    const postdata = await getshortposts();
    const entries = Math.min(maxentries, postdata.length);

    for (let i = 0; i < entries; i++) {
        var newrect = document.createElement("div");
        newrect.setAttribute("class", "genrect shortpost");
        grid.appendChild(newrect);

        const img = document.createElement("img");
        img.src = postdata[i].thumb;
        img.setAttribute("class", "shortthumb");
        newrect.appendChild(img);

        const title = document.createElement("div");
        const titletext = document.createTextNode(postdata[i].title);
        title.setAttribute("class", "posttitle");
        newrect.appendChild(title);
        title.appendChild(titletext);

        const text = document.createElement("p");
        text.setAttribute("class", "shortsummary");
        text.appendChild(document.createTextNode(postdata[i].text));
        newrect.appendChild(text);

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
         console.log("oop");
 
     }
}
async function getshortposts() {

    try {
        const response = await fetch("./shortposts.json");
        const postdata = await response.json();

        return postdata;
    } catch (error) {
        console.log("ono");

    }
}