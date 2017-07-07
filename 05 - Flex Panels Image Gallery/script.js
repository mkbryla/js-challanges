const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
    panels.forEach(closeRest,this);
}

function closeRest(elem) {
  if(elem.classList.contains('open') && this!=elem)
    elem.classList.toggle('open');
}

function toggleBlur(elem) {
    if (this != elem) {
        elem.classList.toggle('blurred');
        console.log(elem);
    }
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
        panels.forEach(toggleBlur,this);
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
