document.addEventListener("DOMContentLoaded", function() {
	const sliderOne = document.querySelectorAll("[data-myslides='slider-1']");
	if (sliderOne) {
		sliderOne.forEach((slider) => {
			animateSlider(slider);
		});
	}

	const _slideUpElementss = document.querySelectorAll("[data-myslideup='slidein-1']");
	const animationSlideUp = [
		{ transform: `translate3D(0, 80px, 0)`, opacity: 0 },
		{ transform: `translate3D(0, 0, 0)`, opacity: 1 },
	];
	const animationDuration = { duration: 800, fill: "forwards", easing: "ease-out" };
	// First animate those elemenst which are already visible in viewport on page load
	_slideUpElementss.forEach((el) => {
		const elementOffsetTop = el.getBoundingClientRect().top + window.scrollY;
		if (window.pageYOffset + window.visualViewport.height > elementOffsetTop) {
			if (!el.dataset.animationDone) {
				el.animate(animationSlideUp, animationDuration);
				el.dataset.animationDone = true;
			}

			// console.log(el.offsetTop, el.scrollTop, el.scrollHeight, el.clientHeight);
		}
	});
	window.addEventListener("scroll", () => {
		_slideUpElementss.forEach((el) => {
			const elementOffsetTop = el.getBoundingClientRect().top + window.scrollY;
			if (window.pageYOffset + window.visualViewport.height > elementOffsetTop) {
				if (!el.dataset.animationDone) {
					el.animate(animationSlideUp, animationDuration);
					el.dataset.animationDone = true;
				}

				// console.log(el.offsetTop, el.scrollTop, el.scrollHeight, el.clientHeight);
			}
		});
	});

});

document.querySelector('#navMenuToggler').addEventListener('click', (e) => {
	    // Toggle 'visible' class on all elements with the 'navMenu' id
	const navMenus = document.querySelectorAll('#navMenu');
	navMenus.forEach(navmenu => {
		navmenu.classList.toggle('visible');
	});

	    // Toggle 'hidden' class on the hamburger and close icons
	document.querySelector('#hamburgerNavbarIcon').classList.toggle('hidden');
	document.querySelector('#closeNavbarIcon').classList.toggle('hidden');
});

function addMegaMenu() {
	let megaMenu = document.querySelector('.has-dropdown');
	megaMenu.classList.add('is-active');
}
function closeMegaMenu(event) {
	event.stopPropagation();
	let megaMenu = document.querySelector('.has-dropdown');
	console.log("OK", megaMenu);
	megaMenu.classList.remove('is-active');
}

function animateSlider(sliderOne) {
	const sliderOneSlides = sliderOne.children;
	const elementCount = sliderOne.childElementCount;
	const clientWidth = sliderOne.clientWidth;
	sliderOne.style.display = "flex";
	sliderOne.style.overflow = "hidden";
	for (let i = 0; i < elementCount; ++i) {
		const slide = sliderOneSlides[i];
		slide.style.minWidth = `${clientWidth}px`;
		// slide.style.transform = `translateX(0)`;
		slide.dataset.slidePosition = 0;
	}

	// setTimeout(function() {
	setInterval(() => {
		for (let i = 0; i < elementCount; ++i) {
			const slide = sliderOneSlides[i];
			const currPosition = slide.dataset.slidePosition;
			let dx = currPosition;
			const dx_1 = -dx;
			const dx_2 = dx_1 - clientWidth;
			dx = -dx_2;
			if (dx >= clientWidth * (elementCount - 1))
				dx = 0;

			const animationSlide = [
				{ transform: `translate3D(${dx_1}px, 0, 0)` },
				{ transform: `translate3D(${dx_2}px, 0, 0)` },
			];
			const animationDuration = { duration: 500, fill: "forwards", easing: "ease-out" };

			slide.animate(animationSlide, animationDuration);
			// slide.style.transform = `translateX(${dx}px)`;
			slide.dataset.slidePosition = dx;

			// console.log(slide.dataset.slidePosition);
			// console.log(animationSlide);
		}

		// Remove and Append
		// const slide = sliderOneSlides[0];
		// sliderOne.removeChild(slide);
		// slide.dataset.slidePosition = clientWidth * (elementCount - 2);
		// sliderOne.appendChild(slide);

	}, 4000);
	// }, 2000);
}

////////////////////////////////////////
// @NOTE(muktar): This animation code is my custom implementation
// Script for typing effect Animation
// Usage:
// const services = [
//		"creative", "design", "content"
// ];
// simulateTypingEffect(elementCSS = ".font-tourney-black", wordsToAnimate = services, cursorCSSClass = "typing-cursor");
function simulateTypingEffect(elementCSSClass, words, typingCSSClass = "typing-cursor") {
	document.addEventListener("DOMContentLoaded", function() {
		let activeIndex = 0;
		let current = words[activeIndex].split("");
		let currentCount = 0;
		const typingEl = document.querySelector(elementCSSClass);
		let isErasing  = true;
		// const text     = typingEl.innerText;
		// const letters  = text.split("");
		// const letterEls = letters.map((item) => `<span>${item}</span>`);
		// typingEl.innerHTML = letterEls.join("");
		typingErase = () => {
			const letters = current.map((item) => `<span>${item}</span>`).join("");
			typingEl.innerHTML = letters;
			typingEl.removeChild(typingEl.lastChild);
			typingEl.innerHTML = letters + `<span class="${typingCSSClass}"></span>`;
			current.pop();
			if (current.length === 0) {
				activeIndex = (activeIndex + 1) % words.length;
				current = words[activeIndex].split("");
				isErasing = false;
			}
		}
		typingType = () => {
			const letters = current.map((item) => `<span>${item}</span>`);
			const characters = letters.slice(0, currentCount + 1);
			typingEl.innerHTML = characters.join("") + `<span class="${typingCSSClass}"></span>`;
			if (letters.length === currentCount) {
				isErasing = true;
				currentCount = 0;
			}
			currentCount++;
		}
		const timer = setInterval(() => {
			if (isErasing) {
				typingErase();
			} else {
				typingType();
			}
		}, 250);
	});
}

// FAQ Accordian Function

(function(){
	const accordianButtons = document.querySelectorAll(".accordian-button");
	accordianButtons.forEach((button) => {
		button.addEventListener("click", function(e) {
			const accordian = this.parentElement;
			accordian.classList.toggle("active");
		});
	});
})();

function openDrawer() {
	const drawer = document.querySelector('.drawer');
	if (drawer) {
		drawer.style.display = 'flex';
		drawer.style.opacity = '1';
		drawer.style.visibility = 'visible';

		drawer.classList.add('is-open');
		drawer.classList.remove('is-close');
	}
}

function closeDrawer() {
	const drawer = document.querySelector('.drawer');
	if (drawer) {
		drawer.classList.remove('is-open');
		drawer.classList.add('is-close');

		setTimeout(() => {
			drawer.style.opacity = '0'; 
			drawer.style.visibility = 'hidden'; 
			drawer.style.display = 'none';
		}, 300);
	}
}