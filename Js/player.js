$(function () {
    var song = document.getElementsByTagName('audio')[0],
        sourceMp3 = document.getElementsByTagName('audio')[0];

    sourceMp3.src = 'https://ice55.securenetsystems.net/DASH48';


    $('#player').click(function (e) {
        e.preventDefault();
        if (song.paused) song.play();
        else 
        song.setAttribute('src' , 'https://ice55.securenetsystems.net/DASH48'); 
    
    });
    $('#player').bind('click', function() {
        if ($('#playback').attr('class') == 'fa fa-solid fa-circle-pause fa-lg')
            $('#playback').attr('class', 'fa fa-soli fa-circle-play fa-lg');
        else
            $('#playback').attr('class', 'fa fa-solid fa-circle-pause fa-lg');
    });

    song.addEventListener('pause', function () {
        song.setAttribute('src' , 'https://ice55.securenetsystems.net/DASH48');
        song.currentTime = 0;
        $('#playback').attr('class', 'fa fa-soli fa-circle-play fa-lg');
    });

    

    



    
});


let mediaSession = navigator.mediaSession;

if ("mediaSession" in navigator){
    navigator.mediaSession.metadata = new MediaMetadata({
      title: "Radio",
      artist: "Beat83",
      album: "",
      artwork: [{src: ""}]
    });}
