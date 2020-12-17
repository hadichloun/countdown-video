var vid = document.getElementById("video1");

function slowPlaySpeed() { 
    vid.playbackRate = 0.5;
} 

function normalPlaySpeed() { 
    vid.playbackRate = 1;
} 

function fastPlaySpeed() { 
    vid.playbackRate = 2;
}