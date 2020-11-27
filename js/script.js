// Menu JavaScript 
// nav의 인터랙션 요소를 주기 위해 새용했습니다. 

var lastScrollTop = 0;
var navBackground = document.getElementById('nav-background');
var navHeader = document.getElementById("nav-header");
var getBody = document.getElementById('body');

document.getElementById("toggle").addEventListener("click", function(event){ // 클릭시 이벤트 발생
  event.preventDefault();
  navHeader.classList.toggle("open"); // 메뉴창이 열린다. 
});



