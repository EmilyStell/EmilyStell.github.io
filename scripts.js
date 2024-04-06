

document.addEventListener("DOMContentLoaded", loaded)
{  

    
}

const maxentries = 4;
function loaded()
{
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
        console.log(path);
        newrect.setAttribute("href", path);
        grid.appendChild(newrect);


        const img = document.createElement("img");
        img.src = postdata[i].image;
        img.setAttribute("class", "thumb");
        newrect.appendChild(img);

        const title = document.createTextNode(postdata[i].title);
        newrect.appendChild(title);

    /*    getthumb(path, newrect);*/
/*
        getthumbtest(newrect);*/
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