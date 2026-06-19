document.addEventListener("DOMContentLoaded", function() {
	const sliderOne = document.querySelectorAll("[data-myslides='slider-1']");
	const sliderTwo = document.querySelectorAll("[data-myslides='slider-2']");
	if (sliderOne) {
		sliderOne.forEach((slider) => {
			animateSlider(slider);
		});
	}
	if (sliderTwo) {
		sliderTwo.forEach((slider) => {
			animateUniversalSlider(slider);
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

// function animateSlider(sliderOne) {
// 	const sliderOneSlides = sliderOne.children;
// 	const elementCount = sliderOne.childElementCount;
// 	const clientWidth = sliderOne.clientWidth;
// 	sliderOne.style.display = "flex";
// 	sliderOne.style.overflow = "hidden";
// 	for (let i = 0; i < elementCount; ++i) {
// 		const slide = sliderOneSlides[i];
// 		slide.style.minWidth = `${clientWidth}px`;
// 		// slide.style.transform = `translateX(0)`;
// 		slide.dataset.slidePosition = 0;
// 	}

// 	// setTimeout(function() {
// 	setInterval(() => {
// 		for (let i = 0; i < elementCount; ++i) {
// 			const slide = sliderOneSlides[i];
// 			const currPosition = slide.dataset.slidePosition;
// 			let dx = currPosition;
// 			const dx_1 = -dx;
// 			const dx_2 = dx_1 - clientWidth;
// 			dx = -dx_2;
// 			if (dx >= clientWidth * (elementCount - 1))
// 				dx = 0;

// 			const animationSlide = [
// 				{ transform: `translate3D(${dx_1}px, 0, 0)` },
// 				{ transform: `translate3D(${dx_2}px, 0, 0)` },
// 			];
// 			const animationDuration = { duration: 500, fill: "forwards", easing: "ease-out" };

// 			slide.animate(animationSlide, animationDuration);
// 			// slide.style.transform = `translateX(${dx}px)`;
// 			slide.dataset.slidePosition = dx;

// 			// console.log(slide.dataset.slidePosition);
// 			// console.log(animationSlide);
// 		}

// 		// Remove and Append
// 		// const slide = sliderOneSlides[0];
// 		// sliderOne.removeChild(slide);
// 		// slide.dataset.slidePosition = clientWidth * (elementCount - 2);
// 		// sliderOne.appendChild(slide);

// 	}, 4000);
// 	// }, 2000);
// }

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

	_slideUpElementss.forEach((el) => {
		const elementOffsetTop = el.getBoundingClientRect().top + window.scrollY;
		if (window.pageYOffset + window.visualViewport.height > elementOffsetTop) {
			if (!el.dataset.animationDone) {
				el.animate(animationSlideUp, animationDuration);
				el.dataset.animationDone = true;
			}
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
			}
		});
	});
});

function animateSlider(sliderOne) {
	const slides = sliderOne.children;
	const elementCount = sliderOne.childElementCount;

	if (elementCount === 0) return;

		// Find the bullets container dynamically
	const heroSection = sliderOne.closest('.hero-section');
	const bullets = heroSection ? heroSection.querySelectorAll('.slider-bullet') : [];

		// Setup track layout cleanly
		sliderOne.style.display = "flex";
		sliderOne.style.overflow = "hidden";
		sliderOne.style.transition = "transform 0.5s ease-out"; // Handle sliding via container level
		
		const clientWidth = sliderOne.clientWidth;
		for (let i = 0; i < elementCount; ++i) {
			slides[i].style.minWidth = `${clientWidth}px`;
		}

		let currentIndex = 0;

		setInterval(() => {
				// 1. Advance to the next slide index smoothly
			currentIndex = (currentIndex + 1) % elementCount;

				// 2. Animate ALL slides uniformly based on the active index
			const translateAmount = -(currentIndex * clientWidth);

			for (let i = 0; i < elementCount; i++) {
				slides[i].animate(
					[
						{ transform: `translate3D(${translateAmount + clientWidth}px, 0, 0)` }, // visual offset reset fix
						{ transform: `translate3D(${translateAmount}px, 0, 0)` }
				],
				{ duration: 500, fill: "forwards", easing: "ease-out" }
				);
			}

				// 3. Update bullets perfectly
			if (bullets.length > 0) {
				bullets.forEach((bullet, index) => {
					if (index === currentIndex) {
						bullet.classList.add('is-active');
					} else {
						bullet.classList.remove('is-active');
					}
				});
			}
		}, 4000);
	}

	function animateUniversalSlider(slider) {
		const children = slider.children;
		const slidesCount = slider.childElementCount;
		const prevBtnEl = document.getElementById(slider.dataset.myslidesBtnPrev);
		const nextBtnEl = document.getElementById(slider.dataset.myslidesBtnNext);
		const tilesParent = document.getElementById(slider.dataset.myslidesTiles);
		const tiles = tilesParent?.children || [];
		let slides = [];
		let activeSlide = 1;
		let gap = 0;
		const sliderStyles = window.getComputedStyle(slider);
		if (['flex', 'grid'].includes(sliderStyles.display)) {
			gap = parseFloat(sliderStyles.getPropertyValue('column-gap')) || 0;
		}
		for (let i = 0; i < slidesCount; ++i) {
			const item = children[i];
			slides.push({
				offsetx: 0,
				slide: item
			});
		}

		const update = () => {
			for (let i = 0; i < slidesCount; ++i) {
				const slide = slides[i];
				const x = -1 * ((activeSlide - 1) * slide.slide.clientWidth + (activeSlide - 1) * gap);
				slide.slide.style.transform = `translate3D(${x}px, 0, 0)`;
				slide.offsetx = x;
			}
		}

		const slideNext = () => {
			if (activeSlide < slidesCount) {
				activeSlide += 1;
				update();
			}
		}

		const slidePrev = () => {
			if (activeSlide > 1) {
				activeSlide -= 1;
				update();
			}
		}

		prevBtnEl?.addEventListener("click", (e) => {
			console.log("Prev clicked")
			slidePrev();
		})
		nextBtnEl?.addEventListener("click", (e) => {
			console.log("Next clicked")
			slideNext();
		})

		for (let i = 0; i < tiles.length; ++i) {
			const item = tiles[i];
			item.addEventListener("click", (e) => {
				for (let i = 0; i < tiles.length; ++i) {
					if (tiles[i] == e.target) {
						activeSlide = i + 1;
						update();
						break;
					}
				}
			});
		}
	}

// Accordian toggle 
(function(){
	const accordianButtons = document.querySelectorAll(".accordian-button");
	accordianButtons.forEach((button) => {
		button.addEventListener("click", function(e) {
			const accordian = this.parentElement;
			accordian.classList.toggle("active");
		});
	});
})();

	// Drawer toggle
function openDrawer(drawerId) {
	const drawer = document.getElementById(drawerId);
	if (!drawer) return;
	drawer.classList.add('is-open');
}

function closeDrawer(drawerId) {
	const drawer = document.getElementById(drawerId);
	if (!drawer) return;
	drawer.classList.remove('is-open');
}

document.addEventListener("DOMContentLoaded", () => {
	const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

	dropdownToggles.forEach(dropdownToggle => {
		dropdownToggle.addEventListener("click", (event) => {
			const dropdownMenu = dropdownToggle.nextElementSibling.querySelector("#dropdown > .menu"); // Get the .menu inside the next sibling of dropdownToggle

			// Close all dropdown menus except the clicked one
			const allDropdownMenus = document.querySelectorAll(".menu");
			allDropdownMenus.forEach(menu => {
				if (menu !== dropdownMenu && menu.classList.contains("open")) {
					menu.classList.remove("open");
				}
			});

			// Remove 'open' class from all dropdown toggles except the clicked one
			dropdownToggles.forEach(toggle => {
				if (toggle !== dropdownToggle && toggle.classList.contains("open")) {
					toggle.classList.remove("open");
				}
			});

			// Toggle 'open' class for the clicked dropdown menu
			dropdownMenu.classList.toggle("open");
			dropdownToggle.classList.toggle("open");

			// Stop event propagation
			event.stopPropagation();
		});
	});
});

function toggleDropdown(event) {
				let dropdown = event.target.closest('.dropdown'); // Get the closest parent with class 'dropdown'
				let submenu = dropdown.querySelector('.submenu'); // Get the submenu inside the dropdown

				// Check if the clicked dropdown is already active
				let isActive = dropdown.classList.contains('is-active');

				// Remove 'is-active' class from all dropdowns and submenus
				let allDropdowns = document.querySelectorAll('.menu-item.dropdown');
				allDropdowns.forEach(item => {
					item.classList.remove('is-active');
				});

				let allSubmenus = document.querySelectorAll('.submenu');
				allSubmenus.forEach(item => {
					item.classList.remove('is-active');
				});

				// If clicked dropdown was not already active, then activate it
				if (!isActive) {
					dropdown.classList.add('is-active');
					submenu.classList.add('is-active');
				}
			}


			function drawCanvas(canvas) {
				const heroSection = document.querySelector('.hero-section');

				const WIDTH = window.innerWidth;
				const HEIGHT = heroSection?.offsetHeight ?? window.innerHeight;

				canvas.width = WIDTH;
				canvas.height = HEIGHT;

				const ctx = canvas.getContext("2d");

	// let gradient = ctx.createLinearGradient(0, 0, 100, 0);
	// gradient.addColorStop(0, "#FCFEF3");
	// gradient.addColorStop(1, "#CFEF1C");
	// ctx.fillStyle = gradient;
	// ctx.fillRect(0, 0, 100, HEIGHT);

	// gradient = ctx.createLinearGradient(200, 0, 300, 0);
	// gradient.addColorStop(0, "#FCFEF3");
	// gradient.addColorStop(1, "#CFEF1C");
	// ctx.fillStyle = gradient;
	// ctx.fillRect(200, 0, 100, HEIGHT);


	// let rectWidth = 120;
	// const nrect = Math.ceil(WIDTH / rectWidth);
	// for (let i = 0; i < nrect; ++i) {
	// 	let gradient = ctx.createLinearGradient(i * rectWidth, 0, i * rectWidth + rectWidth, 0);
	// 	gradient.addColorStop(0, "#D6F526");
	// 	gradient.addColorStop(1, "#CFEF1C");
	// 	ctx.fillStyle = gradient;
	// 	ctx.fillRect(i * rectWidth, 0, rectWidth, HEIGHT);
	// }

	// let k = 0;
	// let speed = 0.5;
	// let ncall = 0;
	// let bw = 0;
	// let shift = 0;


	// const render = () => {
	// 	const rectWidth = 120;
	// 	const nrect = Math.ceil(WIDTH / rectWidth);
	// 	ncall += 1;
	// 	let ratio = ncall / WIDTH;
	// 	bw = rectWidth * ratio;
	// 	console.log("bw = ", bw, "ratio = ", ratio);
	// 	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	// 	for (let i = 0; i < nrect; ++i) {


	// 		let gradient = ctx.createLinearGradient(i * bw, 0, i * bw + bw, 0);
	// 		gradient.addColorStop(0, "#D6F526");
	// 		gradient.addColorStop(1, "#CFEF1C");
	// 		ctx.fillStyle = gradient;
	// 		ctx.fillRect(i * bw, 0, bw, HEIGHT);
	// 	}
	// 	if (bw < rectWidth) {
	// 		requestAnimationFrame(render);
	// 	}
	// 	// setTimeout(render, 500);
	// 	console.log("OK", bw)
	// 	// k += 5;
	// 	// speed = Math.abs(Math.sin(k));
	// 	// console.log(speed);
	// }

				const rectWidth = 120;
				let offset = 0;
				let lastTime = 0;
	const speed = 120; // pixels per second
	let lastPos = 0;
	let newPosX = 0;

	const render = (time) => {
		const nrect = Math.ceil(WIDTH / rectWidth) + 1;
		const delta = (time - lastTime) / 1000;
		lastTime = time;
		if (lastPos - newPosX == 0) {
			offset += speed * delta;
			if (offset > rectWidth) offset -= rectWidth;
		}
		lastPos = newPosX;

		ctx.clearRect(0, 0, WIDTH, HEIGHT);

		for (let i = -1; i < nrect; ++i) {
			const x = i * rectWidth + offset;

			let gradient = ctx.createLinearGradient(x, 0, x + rectWidth, 0);
			gradient.addColorStop(0, "#D6F526");
			gradient.addColorStop(1, "#CFEF1C");
			ctx.fillStyle = gradient;
			ctx.fillRect(x, 0, rectWidth, HEIGHT);
		}

		requestAnimationFrame(render);
	}

	requestAnimationFrame(render);

	heroSection.addEventListener("mousemove", (e) => {
		// console.log("pageX = ", e.pageX, "pageY = ", e.pageY);
		newPosX = e.pageX;
	})


	// render();
}

function animateNavbar(navbar) {
	let lastPos = 0;
	const animationDuration = { duration: 800, fill: "forwards", easing: "ease-out" };
	const styleProps = window.getComputedStyle(navbar);
	console.log(styleProps.getPropertyValue('transform'));
	const breakPoint = 1200;
	let transformY = 1;
	const hamburgerIcon = document.querySelector('#hamburgerNavbarIcon')
	const closeIcon = document.querySelector('#closeNavbarIcon')
	let isSmallDevice = false;

	const animate = (e) => {
		if (window.innerWidth < breakPoint) {
			transformY = 0;
			isSmallDevice = true;
		}
		if (window.scrollY > lastPos) {
			navbar.animate([{ transform: `translate(-50%, -6rem)` }], animationDuration);
		} else {
			navbar.animate([{ transform: `translate(-50%, ${transformY}rem)` }], animationDuration);
		}
		lastPos = window.scrollY;

		// Remove any `open` class in any navbar-item.
		let openItemsMain = navbar.querySelectorAll('.dropdown-toggle.open');
		let openItemsSubmenu = navbar.querySelectorAll('.menu.open');
		let openItemsMainMobile = navbar.querySelectorAll('.navbar-center.visible');
		// console.log(openItems);
		for (let i = 0; i < openItemsMain.length; ++i) {
			const item1 = openItemsMain[i];
			const item2 = openItemsSubmenu[i];
			item2?.classList.remove('open');
			item1.classList.remove('open');
		}

		// For mobile
		for (let i = 0; i < openItemsMainMobile.length; ++i) {
			const item = openItemsMainMobile[i];
			item.classList.remove('visible');
		}
		if (isSmallDevice) {

			hamburgerIcon.classList.remove('hidden');
			closeIcon.classList.add('hidden');
		}
	}
	window.addEventListener("scroll", animate);
}


document.querySelectorAll('.navbar-menu-item.has-dropdown').forEach((menuItem) => {
	menuItem.addEventListener('click', function (e) {
		e.stopPropagation();

		document.querySelectorAll('.navbar-menu-item.has-dropdown').forEach((item) => {
			if (item !== this) {
				item.classList.remove('is-open');

				const toggle = item.querySelector('.dropdown-toggle');
				toggle?.classList.remove('open');
			}
		});

		this.classList.toggle('is-open');

		const currentToggle = this.querySelector('.dropdown-toggle');
		currentToggle?.classList.toggle('open');
	});
});

// prevent closing when clicking inside mega menu
document.querySelectorAll('.navbar-large-menu').forEach((menu) => {
	menu.addEventListener('click', function (e) {
		e.stopPropagation();
	});
});

// close only when clicking outside mega menu
document.addEventListener('click', function (e) {
	const clickedInsideMegaMenu = e.target.closest('.navbar-large-menu');
	const clickedDropdownButton = e.target.closest('.navbar-menu-item.has-dropdown');

	if (!clickedInsideMegaMenu && !clickedDropdownButton) {
		document.querySelectorAll('.navbar-menu-item.has-dropdown').forEach((item) => {
			item.classList.remove('is-open');

			const toggle = item.querySelector('.dropdown-toggle');
			toggle?.classList.remove('open');
		});
	}
});

// back button click
document.querySelectorAll('.button-icon').forEach((button) => {

	button.addEventListener('click', function (e) {
		e.stopPropagation();

		const dropdownItem = this.closest('.navbar-menu-item.has-dropdown');

		if (dropdownItem) {
			dropdownItem.classList.remove('is-open');

			const toggle = dropdownItem.querySelector('.dropdown-toggle');
			toggle?.classList.remove('open');
		}
	});
});

document.querySelector('#navMenuToggler')?.addEventListener('click', () => {

	document.querySelectorAll('#navMenu').forEach((navmenu) => {
		navmenu.classList.toggle('visible');
	});
});

(function() {
	const range = document.querySelector('input[type="range"]');

	function updateRange() {
		const l = range.min || 0;
		const h = range.max || 100;
		const percent = ((range.value - l) / (h - l)) * 100;

		range.style.setProperty('--progress', `${percent}%`);
	}

	if (range) {
		range.addEventListener('input', updateRange);
		updateRange();
	}
})();

// open Modal/Drawer
const loginModal = document.querySelector('.login-modal');
const drawer = document.querySelector('#cartDrawer');

function initLoginModal() {
	const openBtn = document.querySelector('#loginModalOpen');
	const closeBtn = document.querySelector('#loginModalClose');
	openBtn?.addEventListener('click', () => {
		loginModal.classList.add('is-open');
	});
	closeBtn?.addEventListener('click', () => {
		loginModal.classList.remove('is-open');
	});
}

function initCartDrawer() {
	const openBtn = document.querySelector('#cartDrawerOpen');
	const closeBtn = document.querySelector('#cartDrawerClose');
	openBtn?.addEventListener('click', () => {
		drawer.classList.add('is-open');
	});
	closeBtn?.addEventListener('click', () => {
		drawer.classList.remove('is-open');
	});
}

initLoginModal();
initCartDrawer();

// show/hide password EYE button
// Add data-input=togglePasswordVisibility in input:password element
(function () {
	const eyeOpenSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#555555" class="icon icon-tabler icons-tabler-filled icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 4c4.29 0 7.863 2.429 10.665 7.154l.22 .379l.045 .1l.03 .083l.014 .055l.014 .082l.011 .1v.11l-.014 .111a.992 .992 0 0 1 -.026 .11l-.039 .108l-.036 .075l-.016 .03c-2.764 4.836 -6.3 7.38 -10.555 7.499l-.313 .004c-4.396 0 -8.037 -2.549 -10.868 -7.504a1 1 0 0 1 0 -.992c2.831 -4.955 6.472 -7.504 10.868 -7.504zm0 5a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" /></svg>';
	const eyeCloseSVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.1704 3.71413C19.4631 3.42862 19.9217 3.42862 20.2046 3.71413C20.4974 3.99964 20.4974 4.4722 20.2046 4.75771L18.4288 6.54952C19.8436 7.84907 21.0438 9.60149 21.9415 11.7083C22.0195 11.8954 22.0195 12.112 21.9415 12.2892C19.8534 17.1921 16.1358 20.1259 11.9987 20.1259H11.9889C10.1058 20.1259 8.30063 19.5056 6.71018 18.3735L4.81725 20.2834C4.67089 20.4311 4.4855 20.5 4.30011 20.5C4.11472 20.5 3.91957 20.4311 3.78297 20.2834C3.53903 20.0373 3.5 19.6435 3.69515 19.358L3.72442 19.3186L18.1556 4.75771C18.1751 4.73802 18.1946 4.71833 18.2044 4.69864C18.2239 4.67895 18.2434 4.65926 18.2532 4.63957L19.1704 3.71413ZM12.0013 3.88534C13.3966 3.88534 14.7529 4.22007 16.0018 4.85015L12.7429 8.13841C12.5087 8.09903 12.255 8.0695 12.0013 8.0695C9.84494 8.0695 8.09836 9.83177 8.09836 12.0075C8.09836 12.2635 8.12764 12.5195 8.16667 12.7558L4.55643 16.3984C3.5807 15.2564 2.7318 13.8781 2.05854 12.293C1.98049 12.1158 1.98049 11.8992 2.05854 11.7122C4.14662 6.80933 7.86419 3.88534 11.9916 3.88534H12.0013ZM15.2186 9.78855L14.1551 10.8617C14.3307 11.1964 14.4283 11.5902 14.4283 12.0037C14.4283 13.3525 13.3354 14.4551 11.9987 14.4551C11.5889 14.4551 11.1986 14.3567 10.8668 14.1795L9.80327 15.2526C10.4277 15.6759 11.1888 15.9319 11.9987 15.9319C14.1453 15.9319 15.8919 14.1696 15.8919 12.0037C15.8919 11.1865 15.6382 10.4186 15.2186 9.78855Z" fill="black" fill-opacity="0.3"/></svg>';

	const passwords = document.querySelectorAll('[data-input=togglePasswordVisibility]');
	for (let i = 0; i < passwords.length; ++i) {
		let password = passwords[i];
		let div = document.createElement('div');
		div.style.width = '30px';
		div.style.height = '30px';
		div.style.cursor = 'pointer';
		div.innerHTML = eyeCloseSVG;
		div.dataset.open = false;

		password.parentElement.style.setProperty('position', 'relative');
		div.style.setProperty('position', 'absolute');
		div.style.setProperty('right', '4px');
		div.style.setProperty('top', '16px');

		password.parentElement.appendChild(div);

		div.addEventListener('click', function(e) {
			if (this.dataset.open === 'false') {
				div.innerHTML = eyeOpenSVG;
				password.type = 'text';
				this.dataset.open = 'true';
			} else {
				div.innerHTML = eyeCloseSVG;
				password.type = 'password';
				this.dataset.open = 'false';
			}
		});
	}
})();

// quantity increament decreament
document.querySelectorAll('.quantity-counter').forEach((counter) => {
	const quantityInput = counter.querySelector('.quantity-input');
	const decreaseButton = counter.querySelector('.quantity-decrease-btn');
	const increaseButton = counter.querySelector('.quantity-increase-btn');

	decreaseButton.addEventListener('click', () => {
		const currentValue = Number(quantityInput.value);

		if (currentValue > 1) {
			quantityInput.value = currentValue - 1;
		}
	});

	increaseButton.addEventListener('click', () => {
		const currentValue = Number(quantityInput.value);

		if (currentValue < 5) {
			quantityInput.value = currentValue + 1;
		}
	});
});