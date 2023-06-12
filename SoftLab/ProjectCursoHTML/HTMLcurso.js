

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const main_video_description = document.querySelector('.main-video .description');
const video_playlist = document.querySelector('.video-playlist .videos');
const musicList = document.querySelector('.music-list');



let data = [
    {
        'id': 'a1',
        'title': 'Introdução - Editor de Código',
        'name': 'VIDEO_HTML_1.mp4 ',
        'duration': '01:29',
        'numeral' : '1',
        'description' : 'Aqui falaremos sobre onde vamos editar o código, e como baixa-lo.<br><a href="https://www.youtube.com/embed/erzRr1x8-to?" target="_blank">Acesso à aula</a>'
    },
    {
        'id': 'a2',
        'title': 'O que são Tags, Elementos e Atributos',
        'name': 'VIDEO_HTML_2.mp4',
        'duration': '06:45',
        'numeral': '1.1',
        'description' : 'Nessa seção da Aula, iremos discutir a definição do que são as Tags, os elementos e os atributos dentro de HTML.<br><a href="https://www.youtube.com/embed/1oX1rCVB8sI" target="_blank">Acesso à aula</a>'

    },
    {
        'id': 'a3',
        'title': 'Estrutura básica de uma página HTML',
        'name': 'VIDEO_HTML_3.mp4',
        'duration': '04:19',
        'numeral' : '1.2',
        'description' : 'Nessa seção da Aula, iremos discutir sobre a estrutura de uma página em HTML, com seus conceitos e tags.<br><a href="https://www.youtube.com/embed/1oX1rCVB8sI" target="_blank">Acesso à aula</a>'

    },

    {
        'id': 'a5',
        'title': 'Tags de texto - Cabeçalhos',
        'name': 'VIDEO_HTML_4.mp4',
        'duration': '01:32',
        'numeral': '2',
        'description' : 'Nessa seção da Aula, iremos discutir sobre algumas variedades das tags de texto, onde nesse caso, é sobre o cabeçalho<br><a href="https://www.youtube.com/embed/bAURNss6ZL4" target="_blank">Acesso à aula</a>'

    },
    {
        'id': 'a6',
        'title': 'Tags de texto - Parágrafos e Quebra de Linha',
        'name': 'VIDEO_HTML_5.mp4',
        'duration': '01:55',
        'numeral': '2.1',
        'description' : 'Nessa seção da Aula, iremos discutir sobre outra tag de texto, nesse caso, sobre os parágrafos.<br><a href="https://www.youtube.com/embed/7BpkFyXlFmE"  target="_blank">Acesso à aula</a>'

    },
    
    {
        'id': 'a7',
        'title': 'Tags de texto - Ênfase de texto',
        'name': 'VIDEO_HTML_6.mp4',
        'duration': '01:43',
        'numeral': '2.3',
        'description' : 'Nessa seção da Aula, iremos discutir sobre outra tag de texto, nesse caso, como dar ênfase em um texto.<br><a href="https://www.youtube.com/embed/T4UcRCwo1F4"  target="_blank">Acesso à aula</a>'

    },
    
    {
        'id': 'a9',
        'title': 'Tags de Imagem',
        'name': 'VIDEO_HTML_7.mp4',
        'duration': '03:00',
        'numeral': '3',
        'description' : 'Nessa seção da Aula, iremos discutir sobre algumas variedades das tags de imagem, onde nesse caso, é sobre como acionar imagens em HTML e seus formatos permitidos.<br><a href="https://www.youtube.com/embed/En0aY-izig0"  target="_blank">Acesso à aula</a>'

    },

    
    {
        'id': 'a11',
        'title': 'Tags de Links',
        'name': 'VIDEOS_HTML_8.mp4',
        'duration': '02:54',
        'numeral': '4',
        'description' : 'Nessa seção da Aula, iremos discutir sobre outra tipo de tag, as tags de links.<br><a href="https://www.youtube.com/embed/erzRr1x8-to?"  target="_blank">Acesso à aula</a>'

    },

    {
        'id': 'a12',
        'title': 'Tags de Tabelas',
        'name': 'VIDEO_HTML_9.mp4',
        'duration': '02:37',
        'numeral': '5',
        'description' : 'Nessa seção da Aula, iremos discutir sobre outro tipo de tag, as tags de tabelas.<br><a href="https://www.youtube.com/embed/fXstnFye1eo" target="_blank">Acesso à aula</a>'

    },

    {
        'id': 'a13',
        'title': 'Tags de Formulários',
        'name': 'VIDEO_HTML_10.mp4',
        'duration': '06:20',
        'numeral': '6',
        'description' : 'Nessa seção da Aula, iremos discutir sobre as tags de formulários, nesse caso, a 1 parte.<br><a href="https://www.youtube.com/embed/0eI7JbhX34Q" target="_blank">Acesso à aula</a>'

    },

    {
        'id': 'a16',
        'title': 'Tags Semânticas',
        'name': 'VIDEO_HTML_11.mp4',
        'duration': '02:58',
        'numeral': '7',
        'description' : 'Nessa seção da Aula, iremos discutir sobre as tags semânticas, uma das mais importantes, nesse caso será sobre a estruturação.<br><a href="https://www.youtube.com/embed/ovjX_WGWT1E"  target="_blank">Acesso à aula</a>'

    },

    {
        'id': 'a20',
        'title': 'Aula extra - Tags de classes e IDs',
        'name': 'VIDEO_HTML_12.mp4',
        'duration': '03:39',
        'numeral': '7.4',
        'description' : 'Nessa seção da Aula extra, iremos discutir sobre as tags de classes e ids, nesse caso "extra" pois já inclui alguns fundamentos de CSS aplicados junto com HTML, mas bem fáceis de compreender<br><a href="https://www.youtube.com/embed/ktbccUJ6ey4" target="_blank">Acesso à aula</a>'

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

