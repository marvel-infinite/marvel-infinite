function looad(){
    let logo = document.getElementById('logo');
    logo.classList.add('additionalClassForAnimation');
    looper();
    movieLooper();
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
function looper(){
    for(let i = 0; i<FactsVideoRecources.length;i++){
        FactVides(FactsVideoRecources[i].name,FactsVideoRecources[i].src,FactsVideoRecources[i].videSrc);
        console.log(FactsVideoRecources[i]);
    }
}



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

function movieLooper(){
    for(var i = 0; i < MovieDataBase.length; i++){
        new MovieCreator(MovieDataBase[i].name,MovieDataBase[i].poster,MovieDataBase[i].description,MovieDataBase[i].download);
    }
}

const MovieDataBase = [
    {
        'name':'Ironman',
        'poster':'Ironmanposter1.JPG',
        'description':'Rating: PG-13<br><br>Release Date: May 02, 2008<br><br>Starring: Jon Favreau, Jeff Bridges, Terrence Howard, Gwyneth Paltrow, Samuel L. Jackson, Clark Gregg, Leslie Bibb, Robert Downey Jr., Shaun Toub, Faran Tahir<br><br>2008\'s Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man',
        'download':'https://openload.co/stream/c5N59EO9xzY~1524663218~47.247.0.0~nmo2D8VI?mime=true*'
    },
    {
        'name':'The Incredible Hulk',
        'poster':'Hulk.jpg',
        'description':'Rating: PG-13<br><br> Release Date: Jun 13, 2008<br><br>Starring: Edward Norton, Liv Tyler, Tim Roth, William Hurt <br><br><br>"The Incredible Hulk" kicks off an all-new, explosive and action-packed epic of one of the most popular super heroes of all time. In this new beginning, scientist Bruce Banner (Edward Norton) desperately hunts for a cure to the gamma radiation that poisoned his cells and unleashes the unbridled force of rage within him: The Hulk.',
        'download':'https://openload.co/stream/Vq7SwCuXVrY~1524668487~47.247.0.0~5Ut2mwgB?mime=true*'
    },
    {
        'name':'Iron Man 2',
        'poster':'Iron man 2.jpg',
        'description':'Rating: PG-13 <br><br>Release Date: May 07, 2010<br><br>Starring: Jon Favreau, Gwyneth Paltrow, Don Cheadle, Scarlett Johansson, Mickey Rourke, Sam Rockwell, Samuel L. Jackson, Clark Gregg, Leslie Bibb, Robert Downey Jr.<br><br><br>Billionaire industrialist Tony Stark (played by Robert Downey, Jr.) returns to the big screen--and the Iron Man armor. Joined by Pepper Potts (Gwyneth Paltrow) and James Rhodes (Don Cheadle), expect big-time action and adventure in the Mighty Marvel Manner now available on Blu-ray, DVD and Digital Download.',
        'download':'https://openload.co/stream/KXCvS8MJl3g~1524724248~47.247.0.0~cao9bCe2?mime=true*'
    },
    {
        'name':'Thor',
        'poster':'Thor.jpg',
        'description':'Rating: PG-13<br><br>Release Date: May 06, 2011<br><br>Starring: Chris Hemsworth, Tom Hiddleston, Natalie Portman, Anthony Hopkins, Tadanobu Asano, Idris Elba, Kat Dennings, Rene Russo, Jaimie Alexander, Josh Dallas, Stellan Skarsgård, Clark Gregg, Jeremy Renner<br><br>The epic adventure "Thor" spans the Marvel Universe from present day Earth to the realm of Asgard.<br><br>At the center of the story is The Mighty Thor, a powerful but arrogant warrior whose reckless actions reignite an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth. ',
        'download':'https://00e9e64bac0c9b049e188250fef2afb9960a94ec9c3832315d-apidata.googleusercontent.com/download/drive/v3/files/1_vjZyyiV2L4OaRBqQZNHg1dD9fqx8Roc?qk=AD5uMEtgajsQhxL_RwwmMS4tXgaUcCPc5h2XeKu0chfWV71_eA0rPkpI_cN2Nst-UxobWgyWx1kLSS7fahQXPJmE1aKcvkpueyCjdVPBmRQt5aXWCY7GkMN8JB_fUIkthwA1Zo0aqlIEztAiDHpxTl3KImGX02nGyRywolkIlDpLi3jzxRdtGZ8u1AM5olde4wYrTs3wSQPK2A3uXvTXbaFL6xLkMH2f5pWBlN_dbE07-jt-1sEIQaL-F3UUNmu7jP5dKN4sstfqS0_i8XUTfxUdw5_Te1fc8Q3VvbxDBKG9eY61hAAzg5VX65ijLoO5PwZisJdytpUgLbaj__6pUWNsWFigXnqFhUNQYHtSLSoPZvSeDCoHeOYKEjEiaVn06P5QF_9CfN5H5P-jC5hBCU3B6x4JJ06MZu8g5RFh51Sgieiooo8FWHHf3dLnt12-Jd2QqZgOcvRV7Tt4Yt5jV3cWfKgziegIZnLY5QpjyUJRybpgLwzwbibJt-DNDC9Emq3QON6zoIZtbvpZErz_ebeJdn_EMes9dAq1C0n85KjacEVFZqHKdyHMZXfakZ1-B5pouprKmb8pS7lIbqThcptiADZcofCqGWmC82RlssVBypdiNG7DGhhM7O4a4VMOB4ssq6DJa32oKjlX9dK0Nfwy2FgkAjyIkrrqinnHHtNCLdiF7yPHgkd_1nL_d3hTqnLJ_y0VXcYqXWDRHaVio2dguivN1xpESzFtVp2TyMGpZNeAjxqX1T3RnUXlLMMm1MWY3inKQiVs9ijmPbuLh_sBoxKs6tJorAnrGxrt3lvFqNYTziff8eWGkULFHAnHRt2IPEo0WXIdr8d0eaV0G1b1JSXQbUAYDH5xYBwuW0FtOlJxzv5EvAb7ThCPLlLCwJczqMup1pLsBs4pOCrz9jPkRSPUny_WjiUoskGgC1wIa-vh57uXTRQ'
    },
    {
        'name':'Captain America: The First Avenger',
        'poster':'Captain.jpg',
        'description':'Rating: PG-13 <br><br>Release Date: Jul 22, 2011<br><br>Starring: Chris Evans, Samuel L. Jackson, Sebastian Stan, Hayley Atwell, Hugo Weaving, Stanley Tucci, Tommy Lee Jones, Dominic Cooper, Toby Jones, Bruno Ricci, Neal McDonough, Derek Luke, Richard Armitage, JJ Field, Michael Brandon<br><br>Marvel\'s "Captain America: The First Avenger" focuses on the early days of the Marvel Universe when Steve Rogers volunteers to participate in an experimental program that turns him into the Super Soldier known as Captain America.',
        'download':'https://openload.co/stream/s9HCNy8n0MQ~1524724461~47.247.0.0~ZLR-_w6T?mime=true*'
    },
    {
        'name':' The Avengers',
        'poster':'Avengers.jpg',
        'description':'Rating: PG-13 <br><br>Release Date: May 04, 2012<br><br>Starring: Gwyneth Paltrow, Chris Evans, Scarlett Johansson, Chris Hemsworth, Tom Hiddleston, Samuel L. Jackson, Stellan Skarsgard, Clark Gregg, Jeremy Renner, Mark Ruffalo, Cobie Smulders, Robert Downey Jr.<br><br>Marvel Studios presents in association with Paramount Pictures "Marvel\'s The Avengers"--the super hero team up of a lifetime, featuring iconic Marvel super heroes Iron Man, the Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. ',
        'download':'https://openload.co/stream/ZxXVk5yUwQc~1524724532~47.247.0.0~0ayMEEbP?mime=true*'
    },/*
    {
        'name':'',
        'poster':'',
        'description':'',
        'download':''
    },
    {
        'name':'',
        'poster':'',
        'description':'',
        'download':''
    },
    {
        'name':'',
        'poster':'',
        'description':'',
        'download':''
    }*/
];
// new MovieCreator('Ironman','resources/Ironmanposter1.JPG','Rating: PG-13<br><br>\n' +
//     '                    Release Date: May 02, 2008<br><br>\n' +
//     '\n' +
//     '                    Starring: Jon Favreau, Jeff Bridges, Terrence Howard, Gwyneth Paltrow, Samuel L. Jackson, Clark Gregg, Leslie Bibb, Robert Downey Jr., Shaun Toub, Faran Tahir<br><br>\n' +
//     '                    2008\'s Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man</div><br>','https://openload.co/stream/c5N59EO9xzY~1524663218~47.247.0.0~nmo2D8VI?mime=true*')
//
function MovieCreator(name,poster,description,download){
    this.name = name;
    this.poster = 'resources/'+poster;
    this.description = description;
    this.download = download;
    const movieCard = document.createElement('div');
    movieCard.setAttribute('class','movieCard');
    const title = document.createElement('div');
    title.setAttribute('class','Movietitle');
    title.innerHTML = this.name;
    const titleBorder = document.createElement('div');
    titleBorder.setAttribute('class','MovieBottomLine');
    title.appendChild(titleBorder);
    movieCard.appendChild(title);
    const br = document.createElement('br');
    movieCard.appendChild(br);
    const Pic = document.createElement('img');
    Pic.setAttribute('src',this.poster);
    Pic.setAttribute('class','MoviePoster');
    movieCard.appendChild(Pic);
    const info = document.createElement('div');
    info.setAttribute('class','MovieDescription');
    info.innerHTML = this.description;
    movieCard.appendChild(info);
    const opt = document.createElement("div");
    opt.setAttribute('class','optionsForMovies');
    const center = document.createElement('center');
    const href = document.createElement('a');
    href.setAttribute('href',this.download);
    href.setAttribute('target','_blank');
    const dimg = document.createElement('img');
    dimg.setAttribute('src','resources/download.svg');
    dimg.setAttribute('class','download');
    href.appendChild(dimg);
    center.appendChild(href);
    const dText = document.createElement('h5');
    dText.innerHTML = 'Download<br> The<br> Movie';
    dText.setAttribute('class','downloadtext');
    center.appendChild(dText);
    opt.appendChild(center);
    movieCard.appendChild(opt);
    const Mcu = document.getElementById('McuMovies');
    Mcu.appendChild(movieCard);
    Mcu.appendChild(br);Mcu.appendChild(br);Mcu.appendChild(br);

}

