var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      // when window width is >= 840px
      840: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });


// Toogle menu

var buttonMenu = document.getElementById("toggle-menu");
var sideMenu =  document.getElementById("primary-menu");

buttonMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (buttonMenu.classList.contains("active")) {
		buttonMenu.classList.remove("active");
		sideMenu.classList.remove("active");
	}else{
		buttonMenu.classList.add("active");
		sideMenu.classList.add("active");
	}
}