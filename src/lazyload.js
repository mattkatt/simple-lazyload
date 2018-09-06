// LazyLoad
// written by Matt Evans @mattkatt

function lazyLoad() {
  'use strict';
  var i, targets = document.querySelectorAll(".lazyload");

  if (targets.length > 0) {
    for (i = 0; i < targets.length; i++) {
      var elem = targets[i],
          list = elem.classList,
          src = elem.getAtrribute('data-src'),
          rect = elem.getBoundingClientRect();

      if (rect.top <= (window.innerHeight + 100) && elem.offsetParent !== null) {

        if (list.contains("lazyBG")) {
          elem.style.backgroundImage = "url(" + src + ")";
        }

        if (!list.contains("lazyBG")) {
          elem.src = src;
          if (elem.tagName === "VIDEO") {
            elem.play();
          }
        }

        list.remove("lazyload");
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
document.addEventListener('scroll', lazyLoad, false)
