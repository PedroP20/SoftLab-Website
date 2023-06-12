
const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const main_video_description = document.querySelector('.main-video .description');
const video_playlist = document.querySelector('.video-playlist .videos');
const musicList = document.querySelector('.music-list');

let data = [
    {
        'id': 'a1',
        'title': 'Introdução - O que é CSS e seus tipos',
        'name': 'VIDEO_1.mp4',
        'duration': '04:29',
        'description': 'Nessa seção da aula, iremos discutir sobre o que eé o CSS em sua definição e alguns dos seus tipos existentes.<br><a href="https://www.youtube.com/embed/eougUSBi8fo" target="_blank">Acesso à aula</a>'
    },
   
    {
        'id': 'a3',
        'title': 'Seletores em CSS',
        'name': 'VIDEO_2.mp4',
        'duration': '06:13',
        'description': 'Nessa seção da aula, iremos discutir sobre alguns seletores usados em CSS, e como referencia-los.<br><a href="https://www.youtube.com/embed/E96MP_6hoPA" target="_blank">Acesso à aula</a>'
    },
    {
        'id': 'a5',
        'title': 'Alinhamento de Divs',
        'name': 'VIDEO_3.mp4',
        'duration': '08:53',
        'description': 'Nessa seção da aula, iremos discutir sobre um dos assuntos mais importantes em CSS. Como alinhar elementos.<br><a href="https://www.youtube.com/embed/DZHv6dN61O0" target="_blank">Acesso à aula</a>'
    },
    {
        'id': 'a6',
        'title': 'Bordas em CSS',
        'name': 'VIDEO_4.mp4',
        'duration': '03:10',
        'description': 'Nessa seção da aula, iremos discutir sobre os tipos de bordas existentes em CSS, e como usá-las.<br><a href="https://www.youtube.com/embed/ssQX1dQ0Fjg" target="_blank">Acesso à aula</a>'
    },
    {
        'id': 'a7',
        'title': 'Fontes em CSS',
        'name': 'VIDEO_5.mp4',
        'duration': '04:27',
        'description': 'Nessa seção da aula, iremos discutir sobre os tipos de fontes existentes em CSS, e como usá-las.<br><a href="https://www.youtube.com/embed/ivMDE5Qu8vc" target="_blank">Acesso à aula</a>'
    },

    {
        'id': 'a8',
        'title': 'Background em CSS',
        'name': 'VIDEO_6.mp4',
        'duration': '03:59',
        'description': 'Nessa última seção da aula, iremos discutir sobre como funciona o background em CSS, como usá-lo e seus tipos.<br><a href="https://www.youtube.com/embed/jvbH9AkrnVU" target="_blank">Acesso à aula</a>'
    }
    
];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="icons/play.svg" alt="">
                    <p>${video.numeral ? video.numeral : i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'icons/pause.svg';

let musicIndex = 1;
window.addEventListener('load',()=>{
   loadMusic(musicIndex);
   playingNow();
})
function playMusic(){
   mainVideo.play();
   playlist.classList.add('active')
}
function loadMusic(indexNumb){
   mainVideo.src = `${allVideos[indexNumb - 1].src}.mp4`;
   videoTitle.innerHTML = `${indexNumb}. ${allVideos[indexNumb - 1].name}`
   
}

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'icons/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'icons/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
        main_video_description.innerHTML = match_video.description;
    }
});

