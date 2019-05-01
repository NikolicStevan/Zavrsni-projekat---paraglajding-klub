
// PROCEDURALNO
//---------------------------------------------------------------

/*
let playBtn = document.querySelector('#play');
let reloadBtn = document.querySelector('#reload');
let video = document.querySelector('video');


playBtn.addEventListener('click', playVideo);
reloadBtn.addEventListener('click', reloadVideo);

function playVideo() {
    if (this.getAttribute('src') == "play.png") {
        video.play()
        this.setAttribute('src', 'pause.png');
    } else {
        video.pause();
        this.setAttribute('src', 'play.png');
    }
}


function reloadVideo() {
    video.load();
    playBtn.setAttribute('src', 'play.png');
}
*/

// OBJEKTNO ORJENTISAN
//-------------------------------------------------------------------




/*



(function () {

    let videoPlayer = {
        playBtn: document.querySelector('#play'),
        reloadBtn: document.querySelector('#reload'),
        video: document.querySelector('video'),
        init: function () {
            videoPlayer.playBtn.addEventListener('click', videoPlayer.playVideo);
            videoPlayer.reloadBtn.addEventListener('click', videoPlayer.reloadVideo);

        },

        playVideo: function () {
            if (this.getAttribute('src') == "play.png") {
                videoPlayer.video.play();
                this.setAttribute('src', 'pause.png');
            } else {
                videoPlayer.video.pause();
                this.setAttribute('src', 'play.png');
            }
        },
        reloadVideo: function () {
            videoPlayer.video.load();
            videoPlayer.playBtn.setAttribute('src', 'play.png');
        }

    }


    videoPlayer.init();

})()

*/



//------------------------------------------------
//-------------------------------------------------

/*

let person = {
    name: "Stevan",
    age: 36
}

function Person() {
    this.name = "Stevan";
    this.age = 36
}

let noviObjekat = new Person();

*/






// CONSTRUCTOR
//-----------------------------------------------------------------


/*

(function () {
    function VideoPlayer(id) {
        this.playBtn = document.querySelector('#play');
        this.reloadBtn = document.querySelector('#reload');
        this.video = document.querySelector('video');
        this.init = function () {
            this.playBtn.addEventListener('click', this.playVideo.bind(this));
            this.reloadBtn.addEventListener('click',this.reloadVideo.bind(this));
        }
        this.playVideo = function () {
            if (this.playBtn.getAttribute('src') == "play.png") {
                this.video.play();
                this.playBtn.setAttribute('src', 'pause.png');
            } else {
                this.video.pause();
                this.playBtn.setAttribute('src', 'play.png');
            }

        }
        this.reloadVideo = function() {
            this.video.load();
            this.playBtn.setAttribute('src', 'play.png');
        }
    }

    let vp = new VideoPlayer('one').init();

})()

*/





(function () {
    function VideoPlayer(id) {
        this.container = document.querySelector('#' + id);
        this.playBtn = this.container.querySelector('.play');
        this.reloadBtn = this.container.querySelector('.reload');
        this.video = this.container.querySelector('video');
        this.init = function () {
            this.playBtn.addEventListener('click', this.playVideo.bind(this));
            this.reloadBtn.addEventListener('click', this.reloadVideo.bind(this));
        }
        this.playVideo = function () {
            if (this.playBtn.getAttribute('src') == '../images/play.png') {
                this.video.play();
                this.playBtn.setAttribute('src', '../images/pause.png');
            } else {
                this.video.pause();
                this.playBtn.setAttribute('src', '../images/play.png');
            }

        }
        this.reloadVideo = function () {
            this.video.load();
            this.playBtn.setAttribute('src', '../images/play.png');
        }
    }


    const container = document.querySelectorAll('.container');
    let lengthContainer = container.length;
    

    for (let i = 0; i < lengthContainer; i++) {
        const id = container[i].id;
        let vp = new VideoPlayer(id).init();
    }

   
    // let vp = new VideoPlayer('one').init();
    // let vp2 = new VideoPlayer('two').init();
    // let vp3 = new VideoPlayer('three').init();

})()