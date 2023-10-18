$(function () {
    var song = document.getElementsByTagName('audio')[0],
        sourceMp3 = document.getElementsByTagName('audio')[0];

    sourceMp3.src = 'https://stream.zeno.fm/ns1rsez0pnhvv';


    $('#player').click(function (e) {
        e.preventDefault();
        if (song.paused) song.play();
        else 
        song.setAttribute('src' , 'https://stream.zeno.fm/ns1rsez0pnhvv'); 
    
    });
    $('#player').bind('click', function() {
        if ($('#playback').attr('src') == './Assets/Icons/play_music_icon.png')
            $('#playback').attr('src', './Assets/Icons/stop_music_icon.png');
        else
            $('#playback').attr('src', './Assets/Icons/play_music_icon.png');
    });

    song.addEventListener('pause', function () {
        song.setAttribute('src' , 'https://stream.zeno.fm/ns1rsez0pnhvv');
        song.currentTime = 0;
        $('#playback').attr('src', './Assets/Icons/play_music_icon.png');
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
