  // JavaScript to add 'show' class to elements with a delay
  window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('.Side_bar_socials').classList.add('show');
        document.querySelector('.SAM').classList.add('show');
    }, 1000); // Delay in milliseconds (1 second in this example)
});



  // Dark & Light toggle

  document.querySelector(".day-night input").addEventListener("change", () => {
      document.querySelector("body").classList.add("toggle");
      setTimeout(() => {
          document.querySelector("body").classList.toggle("light");

          setTimeout(
              () => document.querySelector("body").classList.remove("toggle"),
              10
          );
      }, 5);
  });











