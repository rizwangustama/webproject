var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
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