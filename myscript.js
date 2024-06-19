

 $(function () {
    $('.artistaboutbutton').click(function () {
        $('.artisttext').toggleClass('textactive');
    });
});

$(function () {
    $('.hamburger').click(function () {
        $('.mobilebuttons').toggleClass('active');
    });
});

$(function () {
    $('#subscribe').click(function () {
        $('.newsletter').toggleClass('newsletteractive');
    });
    $('#closebutton').click(function () {
        $('.newsletter').toggleClass('newsletteractive');
    });
});

  $(function () {
  
        if  ($(window).width() >= 1280) {
            $('.video video').attr('playsinline');
        }
        else {
            $('.video video').removeAttr('playsinline');
        }

    });

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

  // const videoContainerCollection = document.getElementsByClassName('video'),
  // videoContainerArray = [...videoContainerCollection];
  // videoContainerArray.forEach(function(e) {
  //   const video = e.querySelector('video'),
  //   button = document.getElementsByClassName('menubutton');
  //   video.muted = true;
  //   button.addEventListener('click', function() {
  //     button.classList.toggle('muted');
  //     if (video.muted === true) {
  //       video.muted = !video.muted;
  //     }
  //     else if (video.muted === false) {
  //       video.muted = !video.muted;
  //     }
  //   });
  // });

  $(".menubutton").click(function () {
    $("video").prop("muted", !$("video").prop("muted"));
});
