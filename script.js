const containEl=document.querySelector(".container");

const btnEl=document.querySelector(".btn");

btnEl.addEventListener("click",() =>{
    imgnum=10;
      addImgs();
})

function addImgs(){
    for(let i=0;i<imgnum;i++)
    {
        const newImgEl= document.createElement("img");
        newImgEl.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000 )}`;

        containEl.appendChild(newImgEl);
    }
}