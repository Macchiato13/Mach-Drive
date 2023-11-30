var scrollingEnabled = false; // Flag to control scrolling

window.addEventListener("load", function() {
  // Restore the scroll position
  var scrollPosition = sessionStorage.getItem("scrollPosition");
  window.scrollTo(0, scrollPosition);

  // Disable scrolling
  document.body.style.overflow = "hidden";

  // Remove preloader after animation finishes
  setTimeout(function() {
    var preloader = document.getElementById("preloader");
    preloader.style.opacity = "0"; /* Set opacity to 0 for smooth transition */
    preloader.style.pointerEvents = "none"; /* Disable pointer events to prevent interaction */

    // Re-enable scrolling
    document.body.style.overflow = "auto";
    scrollingEnabled = true; // Enable scrolling after preloader animation

    // Reveal all sections
    var sections = document.getElementsByClassName("page");
    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.add("visible");
    }

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Return to section1 after refresh
    window.scrollTo(0, document.getElementById("page1").offsetTop);

    // Call handleIndicatorVisibility after preloader removal
    handleIndicatorVisibility();
  }, 2000); // Total delay from start to end of preloader animation
});

function handleScroll() {
  if (!scrollingEnabled) {
    return; // Exit the function if scrolling is disabled
  }
  // Delay invoking handleIndicatorVisibility to throttle the scroll event
  clearTimeout(window.scrollTimeout);
  window.scrollTimeout = setTimeout(function() {
    handleIndicatorVisibility();
  }, 100);
}
// Delayed animations after 1s (1s after preloader)
setTimeout(function () {
    var squareUp = document.querySelector('.square_up');
    var squareDown = document.querySelector('.square_down');

    squareUp.style.animation = 'fadeUpIn 0.3s ease-in-out forwards';
    squareDown.style.animation = 'fadeDownIn 0.3s ease-in-out forwards';
}, 3200); // 1s delay after preloader (2000ms + 1000ms)

// Delayed animation for line_1 after 2.5s (1.5s after square_up and square_down animations)
setTimeout(function () {
    var line1 = document.querySelector('.line_1');
    line1.style.animation = 'stretchIn 0.5s ease-in-out forwards';
}, 2500); // 1.5s delay after square_up and square_down animations (3000ms + 1500ms)

// Function to add glow animation to elements
function addGlowAnimation(element) {
    element.style.animation = 'glowAnimation 5s ease-in-out infinite';
    element.style.boxShadow = '0 0 5px 5px #FFFEF8'; // Initial box-shadow to match the starting state of glow
}

// Applying glow animation to square_up, square_down, and line_1 after a delay
setTimeout(function() {
    var squareUp = document.querySelector('.square_up');
    var squareDown = document.querySelector('.square_down');
    var line1 = document.querySelector('.line_1');
    var line2 = document.querySelector('.line_2');

    // Make the elements visible if they were initially hidden
    squareUp.style.opacity = '1';
    squareDown.style.opacity = '1';
    line1.style.transform = 'scaleY(1)';

    // Apply glow animation to each element
    addGlowAnimation(squareUp);
    addGlowAnimation(squareDown);
    addGlowAnimation(line1);
    addGlowAnimation(line2);
}, 4000); // Adjust the delay as needed (1s after the previous animations)

// Function to add the alternating animation immediately on page load
function addAlternateAnimation() {
    var logo = document.querySelector('.logo1');
    logo.classList.add('alternateMove');
}

// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Trigger the back-and-forth animation immediately when the page loads
    addAlternateAnimation();
});

// Function to play fade-in and fade-out animations for bars in an infinite loop
function playFadeInFadeOut() {
  const bars = document.querySelectorAll('.bar, .bar1, .bar2');

  bars.forEach((bar, index) => {
      setTimeout(() => {
          bar.classList.add('fade-inBar');
      }, 3500 + index * 800); // Delay the fade-in animation for each bar by 1400ms after 3500ms

      setTimeout(() => {
          bar.classList.remove('fade-inBar');
          bar.classList.add('fade-outBar');
      }, 4100 + index * 800); // Delay the fade-out animation for each bar by 1400ms after 4900ms
  });

  // Repeat the sequence after one iteration
  setTimeout(() => {
      bars.forEach(bar => {
          bar.classList.remove('fade-outBar');
      });
      setTimeout(playFadeInFadeOut, 100); // Restart the sequence after one complete cycle with a slight delay
  }, 8200); // Total duration of each iteration (4900ms fade-in + 4900ms fade-out)
}

// Wait for all elements to load before triggering the fade-in and fade-out animations
window.addEventListener('load', function() {
  playFadeInFadeOut();
});
