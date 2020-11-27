// Audio Script 
// track.html 에 사용된 자바스크립트
// 텍스트 클릭시 음악이 재생되도록 하기 위해 사용되었습니다.
// 각각의 텍스트의 노래를 하나씩 넣어야해서 한번에 각자 다르게 지정할 최선의 방법이 떠오르지 않아 각자 하나씩 따로 지정해 적었습니다.

function play() {  // 함수 play
    var audio = document.getElementById('audio_play'); // html에서 지정한 아이디 audio_play가 실행될 수 있도록
    if (audio.paused) { 
        audio.play(); // 오디오를 플레이 한다. 
    }else{ 
        audio.pause(); // 오디오를 정지(클릭시 정지될 수 있도록 onclick="play()" 을 사용)
        audio.currentTime = 0 
    } 
} 
function play2() { 
    var audio = document.getElementById('audio_play2'); // 노래가 여러개 이기때문에 아이디가 각자 달라야해서 숫자를 붙여줬습니다. 
    if (audio.paused) { 
        audio.play(); 
    }else{ 
        audio.pause(); 
        audio.currentTime = 0 
    } 
} 
function play3() { 
    var audio = document.getElementById('audio_play3'); 
    if (audio.paused) { 
        audio.play(); 
    }else{ 
        audio.pause(); 
        audio.currentTime = 0 
    } 
} 
function play4() { 
    var audio = document.getElementById('audio_play4'); 
    if (audio.paused) { 
        audio.play(); 
    }else{ 
        audio.pause(); 
        audio.currentTime = 0 
    } 
} 
function play5() { 
    var audio = document.getElementById('audio_play5'); 
    if (audio.paused) { 
        audio.play(); 
    }else{ 
        audio.pause(); 
        audio.currentTime = 0 
    } 
} 
function play6() { 
    var audio = document.getElementById('audio_play6'); 
    if (audio.paused) { 
        audio.play(); 
    }else{ 
        audio.pause(); 
        audio.currentTime = 0 
    } 
} 
