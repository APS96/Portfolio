window.addEventListener('scroll', function() {
    let el = document.getElementById('nav');
    let rect = el.getBoundingClientRect();
    let initialPosition = el.getAttribute("data-initialPosition");
    let limit = el.getAttribute("data-limit");
    if(!initialPosition){
        el.setAttribute("data-initialPosition", rect.top);
    }
    if (rect.top <= 0) {
        if(!limit){
            el.setAttribute("data-limit", window.scrollY);
        }
    }

    if(!!limit && window.scrollY>=limit){
        el.classList.add('fixed-top');
    } else {
        el.classList.remove('fixed-top');
    }
});