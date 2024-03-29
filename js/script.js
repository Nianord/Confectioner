"use strict"

const elemClick = document.querySelector('.header__click');
const elemHide = document.querySelector('.header__hide');
const elemClose = document.querySelector('.close');

elemClick.addEventListener('click', appear);
window.addEventListener('click', remove);
elemClose.addEventListener('click', remove);

function appear() {
		if (elemClick == this) {
			elemHide.classList.toggle('_appear');
			elemClose.classList.toggle('_appear');
		} else {
			elemHide.classList.remove('_appear');
		}
	} 
function remove() {
	if (!event.target.closest('.header__click') || elemClose==this) {
		elemHide.classList.remove('_appear');
		elemClose.classList.remove('_appear');
		}
	}

function ibg(){
	let ibg=document.querySelectorAll(".ibg"); 
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img'))
			{ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();


let myImageSlider = new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		//перетаскивать скролл
		draggable: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	autoHeight: true,
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	loopedSlides: 2,
	zoom: {
		maxRatio: 5,
		minRatio: 1,
	},
});


window.onload = function () {
	const parallax = document.querySelector('.parallax');

	if (parallax) {
		const move1 = document.querySelector('.move1');
		const move2 = document.querySelector('.move2');
		const move3 = document.querySelector('.move3');
		const move4 = document.querySelector('.move4');
		const move5 = document.querySelector('.move5');
		const move6 = document.querySelector('.move6');
		const move7 = document.querySelector('.move7');
		const move8 = document.querySelector('.move8');
		const move9 = document.querySelector('.move9');
		const move10 = document.querySelector('.move10');
		const move11 = document.querySelector('.move11');
		const move12 = document.querySelector('.move12');
		const move13 = document.querySelector('.move13');
		const move14 = document.querySelector('.move14');
		const move15 = document.querySelector('.move15');
		const move16 = document.querySelector('.move16');


		const forMove1 = 8;
		const forMove2 = 11;
		const forMove3 = 5;
		const forMove4 = 14;
		const forMove5 = 7;
		const forMove6 = 12;
		const forMove7 = 6;

		const speed = 0.1;

		let positionX = 0, positionY = 0;
		let coordXprocent = 0, coordYprocent = 0;

		function setMouseParallaxStyle(){
			const distX = coordXprocent - positionX;
			const distY = coordYprocent - positionY;

			positionX = positionX + (distX * speed);
			positionY = positionY + (distY * speed);

			move1.style.cssText = `transform: translate(${positionX / forMove1}%,${positionY / forMove1}%);`;
			move2.style.cssText = `transform: translate(${positionX / forMove2}%,${positionY / forMove2}%);`;
			move3.style.cssText = `transform: translate(${positionX / forMove3}%,${positionY / forMove3}%);`;
			move4.style.cssText = `transform: translate(${positionX / forMove4}%,${positionY / forMove4}%);`;
			move5.style.cssText = `transform: translate(${positionX / forMove5}%,${positionY / forMove5}%);`;
			move6.style.cssText = `transform: translate(${positionX / forMove6}%,${positionY / forMove6}%);`;
			move7.style.cssText = `transform: translate(${positionX / forMove7}%,${positionY / forMove7}%);`;
			move8.style.cssText = `transform: translate(${positionX / forMove1}%,${positionY / forMove1}%);`;
			move9.style.cssText = `transform: translate(${positionX / forMove2}%,${positionY / forMove2}%);`;
			move10.style.cssText = `transform: translate(${positionX / forMove3}%,${positionY / forMove3}%);`;
			move11.style.cssText = `transform: translate(${positionX / forMove4}%,${positionY / forMove4}%);`;
			move12.style.cssText = `transform: translate(${positionX / forMove5}%,${positionY / forMove5}%);`;
			move13.style.cssText = `transform: translate(${positionX / forMove6}%,${positionY / forMove6}%);`;
			move14.style.cssText = `transform: translate(${positionX / forMove7}%,${positionY / forMove7}%);`;
			move15.style.cssText = `transform: translate(${positionX / forMove1}%,${positionY / forMove1}%);`;
			move16.style.cssText = `transform: translate(${positionX / forMove2}%,${positionY / forMove2}%);`;

			requestAnimationFrame(setMouseParallaxStyle);
		}
		setMouseParallaxStyle();

		parallax.addEventListener("mousemove", function (e) {
			const parallaxWidth = parallax.offsetWidth;
			const parallaxHeight = parallax.offsetHeight;

			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;

			coordXprocent = coordX / parallaxWidth *100;
			coordYprocent = coordY / parallaxHeight *100
		});

		let thresholdSets = [];
		for (let i = 0; i <= 1.0; i +=0.005) {
			thresholdSets.push(i);
		}
		const callback = function (entries, observer) {
			const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
			setParallaxItemsStyle(scrollTopProcent);
		};
		const observer = new IntersectionObserver(callback, {
			threshold: thresholdSets
		});

		const observElements= document.querySelectorAll('.content');
		for (let i = 0; i<observElements.length; i++) {
			observer.observe(observElements[i]);
		}

		function setParallaxItemsStyle(scrollTopProcent) {
			move1.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent /0.5}%);`;
			move2.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent /0.3}%);`;
			move3.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent /0.9}%);`;
			move4.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent /0.8}%);`;
			move5.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent /0.2}%);`;
			move6.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent /0.5}%);`;
			move7.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent /0.6}%);`;
			move8.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent /0.5}%);`;
			move9.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent /0.3}%);`;
			move10.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent /0.9}%);`;
			move11.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent /0.8}%);`;
			move12.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent /0.2}%);`;
			move13.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent /0.5}%);`;
			move14.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent /0.6}%);`;
			move15.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent /0.5}%);`;
			move16.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent /0.3}%);`;
		}
	}
}

// minimized
document.addEventListener('DOMContentLoaded', function() {
  const minimized = document.querySelectorAll('.minimized');
  
  minimized.forEach(function(mini) {
    mini.addEventListener('click', function(event) {
      const i_path = this.getAttribute('src');
      const magnify = `
        <div class="overlay"></div>
        <div class="magnify">
          <img src="${i_path}">
          <div class="close-popup"><i></i></div>
        </div>
      `;
      document.querySelector('body').insertAdjacentHTML('beforeend', magnify);
      document.querySelector('.magnify').style.cssText = `
        left: ${ (document.documentElement.clientWidth - document.querySelector('.magnify').offsetWidth) / 2 }px;
        top: ${ (window.innerHeight - document.querySelector('.magnify').offsetHeight) / 2 }px;
      `;
      document.querySelectorAll('.overlay, .magnify').forEach(function(elem) {
        elem.style.opacity = 0;
        elem.style.transition = 'opacity 300ms ease';
      });
      document.querySelector('.overlay').style.display = 'block';
      setTimeout(function() {
        document.querySelectorAll('.overlay').forEach(function(elem) {
          elem.style.opacity = 0.7;
        });
      }, 50);
      setTimeout(function() {
        document.querySelectorAll('.magnify').forEach(function(elem) {
          elem.style.opacity = 1;
        });
      }, 50);
    });
  });
  
  document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.closest('.close-popup, .overlay, .magnify')) {
      event.preventDefault();
      document.querySelectorAll('.overlay, .magnify').forEach(function(elem) {
        elem.style.opacity = 0;
      });
      setTimeout(function() {
        document.querySelectorAll('.close-popup, .magnify, .overlay').forEach(function(elem) {
          elem.remove();
        });
      }, 300);
    }
  });
});
