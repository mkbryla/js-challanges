function playSound(e) {
    if (e.type == 'keydown') {
        var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
        var key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    } else if (e.type == 'click') {
        var keyCode = this.getAttribute('data-key');
        var key = this;
        var audio = document.querySelector('audio[data-key="' + keyCode + '"]');
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
}

function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing');
}

var keys = document.querySelectorAll('.key');
keys.forEach(addEventListeners);

function addEventListeners(key) {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click', playSound);
}

window.addEventListener('keydown', playSound);
