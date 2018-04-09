
function FactVides(name,image){
    this.name = name;
    this.image  = image;
    let FVcont = document.createElement('div');
    let FVimg = document.createElement("img");
    let FVtitle = document.createElement('h2');
    let FVSection = document.getElementById('FactVideosList');
    let br = document.createElement('br');
    FVcont.classList.add('factvideo');
    FVimg.src = this.image;
    FVtitle.innerHTML = this.name;
    FVcont.appendChild(FVimg);
    FVcont.appendChild(FVtitle);
    FVSection.appendChild(br);
    FVSection.appendChild(FVcont);
}

function looper(){
    for(let i = 0; i<FactsVideoRecources.length;i++){
        FactVides(FactsVideoRecources[i].name,FactsVideoRecources[i].src);
        console.log(FactsVideoRecources[i]);
    }
}

const FactsVideoRecources = [{
                'name':'Marvel Phase 4',
                'src':'facts/Marvel-Phase-4.jpg'
            },{
                'name':'Thor gets his hammer back',
                'src':'facts/Thor%20gets%20his%20hammer%20back.jpg'
            },{
                'name':'What is Ragnarok',
                'src':'facts/what is ragnarok.jpg'
            },{
                'name':'Complete History Of infinity stones',
                'src':'facts/infinity stones.jpg'
}

];
