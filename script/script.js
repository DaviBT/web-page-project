function toggleMode() {
    const html = document.documentElement;
  
    //theme change
    let theme = window.matchMedia("(prefers-color-scheme:dark)").matches
      ? "dark"
      : "light";
    if (theme === "light") {
      html.classList.add("light");
    }
  
    /* if(html.classList.contains('light')){
          html.classList.remove('light')
      } else {
          html.classList.add('light')
      } */
    html.classList.toggle("light"); // if there is the light class, it will remove, else, it will add
  
    //img change
    if (html.classList.contains("light")) {
      const img = document.querySelector("#profile img");
      img.setAttribute("src", "assets/profile/profile.png"); // changing the image
    } else {
      img.setAttribute("src", "../assets/profile/light-mode-profile.png");
    }
  }
  
  
  // accordion effect
  var acc = document.getElementsByClassName("accordion");
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
  }