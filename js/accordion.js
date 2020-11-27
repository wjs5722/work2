// Accordion JavaScript
// 수업시간에 배운 아코디언 자바스크립트를 album.html에 사용했습니다.

var accordionEl = document.querySelector("#accoridon"),

    _cuId = null,
    _exId = null;


// 이벤트 핸들러.
function onClickViewItem(e){
    e.preventDefault();
    var el = e.currentTarget, index = viewItemEls.indexOf(el);
    if(!el.classList.contains("selected")){
        // selected 클래스를 가지고 있지 않다면 활성화 가능한 요소들.
        _cuId = index;
        if(_exId !== null){
            // 처음부터 열려있는 아코디언 메뉴가 없기 때문에 _exId 의 값은 처음에 null이다.
            // 따라서 null 이 아닌 경우 부터 이전 항목에 대한 체크가 가능하다.
            viewItemEls[_exId].classList.remove("selected");
        }
        el.classList.add("selected");
        _exId = _cuId;
    }
}
function onClickClose(e){
    e.preventDefault();

    // *****중요*****
    e.stopPropagation();
    // 이벤트 버블링이 일어나면 아코디언 메뉴가 비활성화 되었다가 (close), 부모요소인 view-item의 이벤트가 
    // 한번 더 발생되기 때문에 해당 메뉴가 다시 활성화 된다. (viewItem - event)
    // <----- 버블링이 일어나기 때문에 이를 방지하기 위해 stopPropagation()메서드를 사용해야 함.

    // <div class = "view-item selected">
    // <div class = "btn-close"></div>
    // </div>
    var el = e.currentTarget, itemEl = el.parentElement;
    if(itemEl.classList.contains("selected")){
        if(_exId !== null){
            viewItemEls[_exId].classList.remove("seclected");
            _cuId = null;
            _exId = null;
        }
    }
}



