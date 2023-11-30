window.addEventListener("load", function() {
    // Restore the scroll position
    var scrollPosition = sessionStorage.getItem("scrollPosition");
    window.scrollTo(0, scrollPosition);
  
    // Remove preloader after animation finishes
    setTimeout(function() {
      var preloader = document.getElementById("preloader");
      preloader.style.opacity = "0"; /* Set opacity to 0 for smooth transition */
      preloader.style.pointerEvents = "none"; /* Disable pointer events to prevent interaction */
  
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
    }, 4000); // Total delay from start to end of preloader animation
  });
  
  function handleScroll() {
    // Delay invoking handleIndicatorVisibility to throttle the scroll event
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(function() {
      handleIndicatorVisibility();
    }, 100);
  }