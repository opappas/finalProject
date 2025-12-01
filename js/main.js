

// FAQ
/*var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}*/

// FAQ
const acc = document.querySelectorAll(".accordion");

acc.forEach((button) => {
  // Set initial ARIA states
  button.setAttribute("aria-expanded", "false");

  // Toggle on click
  button.addEventListener("click", toggleAccordion);

  // Toggle on Enter or Space
  button.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAccordion.call(this);
    }
  });
});

function toggleAccordion() {
  const panel = this.nextElementSibling;
  const expanded = this.getAttribute("aria-expanded") === "true";

  this.setAttribute("aria-expanded", !expanded);
  this.classList.toggle("active");

  if (expanded) {
    panel.style.maxHeight = null;
    panel.style.paddingTop = "0";
    panel.style.paddingBottom = "0";
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.style.paddingTop = "40px";
    panel.style.paddingBottom = "40px";
  }
}




// Validates emails
function validate(){
  let i1 = document.querySelector("#email").value;
  let i2 = document.querySelector("#confirmEmail").value;
  if(i1 === i2){
    console.log("Emails match")
    return true;
  }else{
    alert("Emails not matching");
    return false;
  }

}



const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1, // how much of the element should be visible before triggering
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // stop observing after it becomes visible
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Background effect
(function() {
  var $curve = document.getElementById("curve");
  var last_known_scroll_position = 0;
  var defaultCurveValue = 350;
  var curveRate = 3;
  var ticking = false;
  var curveValue;

  function scrollEvent(scrollPos) {
    if (scrollPos >= 0 && scrollPos < defaultCurveValue) {
      curveValue = defaultCurveValue - (scrollPos / curveRate);
      $curve.setAttribute(
        "d",
        "M 800 300 Q 400 " + curveValue + " 0 300 L 0 0 L 800 0 L 800 300 Z"
      );
    }
  }

  window.addEventListener("scroll", function() {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        scrollEvent(last_known_scroll_position);
        ticking = false;
      });
    }

    ticking = true;
  });
})();

(function() {
  var curveBottom = document.getElementById("curveBottom");
  var last_known_scroll_position = 0;
  var defaultCurveValue = 50; 
  var curveRate = 3;
  var ticking = false;

  function scrollEvent(scrollPos) {
    var scrollable = document.body.scrollHeight - window.innerHeight;
    var distanceFromBottom = scrollable - scrollPos;

    if (distanceFromBottom <= 500) {
      var curveValue = defaultCurveValue + distanceFromBottom / curveRate;

      curveBottom.setAttribute(
        "d",
        `M 0 100 Q 400 ${curveValue} 800 100 L 800 400 L 0 400 Z`
      );
    }
  }

  window.addEventListener("scroll", function() {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        scrollEvent(last_known_scroll_position);
        ticking = false;
      });
    }

    ticking = true;
  });
})();


/* Dialog - approaches */
document.querySelectorAll(".trigger-button").forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("button opened");
        const target = btn.dataset.target;
        document.getElementById(target).showModal();
    });
});










