// LazyLoad
// written by Matt Evans @mattkatt

function lazyLoad() {
    'use strict';
    var targets = document.querySelectorAll(".lazyload");

    if (targets.length > 0) {
        for (i = 0; i < targets.length; i++) {
            var elem = targets[i],
            list = elem.getAttribute('class').split(' '),
            lazyBG = list.indexOf("lazyBG"),
            src = elem.getAttribute('data-src'),
            rect = elem.getBoundingClientRect();

            if (rect.top <= (window.innerHeight + 200) && elem.offsetParent !== null) {
                if (lazyBG > -1) {
                    elem.style.backgroundImage = "url(" + src + ")";
                }

                if (lazyBG <= -1) {
                    elem.src = src;
                    if (elem.tagName === "VIDEO") {
                        elem.play();
                    }
                }

                list.splice(list.indexOf("lazyload"), 1);
                elem.setAttribute('class', list.join(' '));
            }
        }
    }

    if (targets.length <= 0) {
        window.removeEventListener('orientationchange', lazyLoad, false);
        document.removeEventListener('scroll', lazyLoad, false);
    }
}

window.addEventListener('load', lazyLoad, false);
window.addEventListener('orientationchange', lazyLoad, false);
document.addEventListener('scroll', lazyLoad, false);
