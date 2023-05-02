function updateTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const time = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time").innerHTML = time;
  }
  
  setInterval(updateTime, 1000);

  let domElement = document.querySelector(".wave");
  if (domElement) {
    domElement.textContent  = "👋";
  } else {
    console.log("Element not found!");
  }
    
  $(function() {
    var footerHeight = $('footer').height();
    $('body').css('padding-bottom', footerHeight + 'px');
  });
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarMenu = document.querySelector('.navbar-menu');
  
  navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('active');
  });



  $(document).ready(function() {
    setInterval(updateTime, 1000);
  });
  
  $(document).ready(function() {
    $(".blog-post").hover(
      function() {
        $(this).addClass("hovered");
      },
      function() {
        $(this).removeClass("hovered");
      }
    );
    
    $(".blog-post").click(function() {
      var title = $(this).find(".post-title").text();
      var description = $(this).find(".post-description").text();
      
      alert("Post Title: " + title + "\n\nPost Description: " + description);
    });
  });
  

