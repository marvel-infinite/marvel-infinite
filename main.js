function looad(){
    let logo = document.getElementById('logo');
    logo.classList.add('additionalClassForAnimation');
    looper();
}

function looper(){
    for(let i = 0; i<FactsVideoRecources.length;i++){
        FactVides(FactsVideoRecources[i].name,FactsVideoRecources[i].src,FactsVideoRecources[i].videSrc);
        console.log(FactsVideoRecources[i]);
    }
}


const FactsVideoRecources = [{
    'name':'Marvel Phase 4',
    'src':'facts/Marvel-Phase-4.jpg',
    'videSrc':'iuyBFkONLl4'
},{
    'name':'Thor gets his hammer back',
    'src':'facts/Thor%20gets%20his%20hammer%20back.jpg',
    'videSrc':'5Lu3tOOE9u0'
},{
    'name':'What is Ragnarok',
    'src':'facts/what is ragnarok.jpg',
    'videSrc':'mAWI_ja2edo'
},{
    'name':'Complete History Of infinity stones',
    'src':'facts/infinity stones.jpg',
    'videSrc':'ZoD1DKiL9J0'
}

];

function FactVides(name,image,vidSrc){
    this.name = name;
    this.image  = image;
    this.vidSrc = "https://www.youtube.com/embed/"+vidSrc;
    let FVcont = document.createElement('div');
    let FVimg = document.createElement("img");
    let FVtitle = document.createElement('h2');
    let FVSection = document.getElementById('FactVideosList');
    let br = document.createElement('br');
    FVcont.setAttribute('onclick','videoPlayerViewer("'+this.name+'","'+this.vidSrc+'")');
    FVcont.classList.add('factvideo');
    FVimg.src = this.image;
    FVtitle.innerHTML = this.name;
    FVcont.appendChild(FVimg);
    FVcont.appendChild(FVtitle);
    FVSection.appendChild(br);
    FVSection.appendChild(FVcont);

}
function videoPlayerViewer(title,src) {
    let videoPlayer = document.getElementById('videoPlayer');
    let Vidtitle = document.getElementById('videoTitle');
    Vidtitle.innerHTML = title;
    let videFrame = document.getElementById('videoFrame');
    videFrame.src = src;
    videoPlayer.style.visibility = 'visible';
}