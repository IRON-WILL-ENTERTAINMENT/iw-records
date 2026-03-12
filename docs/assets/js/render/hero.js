import { heroData } from "../../../data/hero.js";

export function renderHero() {
  const el = document.getElementById("hero-content");
  if (!el) {
    console.error("Element not found: #hero-content");
    return;
  }

  const banners = Array.isArray(heroData.liveBanners) ? heroData.liveBanners : [];

  const slidesHtml = banners.length > 0
    ? banners.map((banner, index) => `
        <div class="hero-slide" data-index="${index}">
          <a class="hero-slide-link" href="${banner.href || "#live"}">
            <img src="${banner.imageUrl}" alt="${banner.alt || ""}">
          </a>
        </div>
      `).join("")
    : `
        <div class="hero-slide is-active">
          <div class="hero-slide-placeholder">
            <div class="hero-placeholder-text">LIVE INFO COMING SOON</div>
          </div>
        </div>
      `;

  el.innerHTML = `
    <div class="hero-copy">
      <h1>${heroData.name || ""}</h1>
      <p>${heroData.label || ""}</p>

      <div class="hero-carousel" id="hero-carousel">
        <div class="hero-carousel-viewport">
          <div class="hero-carousel-track">
            ${slidesHtml}
          </div>
        </div>
      </div>
    </div>
  `;

  initHeroCarousel();
}

function initHeroCarousel() {
  const root = document.getElementById("hero-carousel");
  if (!root) return;

  const viewport = root.querySelector(".hero-carousel-viewport");
  const track = root.querySelector(".hero-carousel-track");
  const slides = Array.from(root.querySelectorAll(".hero-slide"));
  const links = Array.from(root.querySelectorAll(".hero-slide-link"));

  if (!viewport || !track || slides.length === 0) return;

  let activeIndex = 0;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;
  let isPointerDown = false;
  let dragOffset = 0;
  let pointerId = null;

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  function getActiveTranslate() {
    const viewportWidth = viewport.clientWidth;
    const activeSlide = slides[activeIndex];
    const slideLeft = activeSlide.offsetLeft;
    const slideWidth = activeSlide.offsetWidth;
    return slideLeft - viewportWidth / 2 + slideWidth / 2;
  }

  function update(applyTransition = true) {
    const target = getActiveTranslate();
    track.style.transition = applyTransition ? "transform 0.35s ease" : "none";
    track.style.transform = `translateX(${-target + dragOffset}px)`;

    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === activeIndex);
    });
  }

  function moveNext() {
    activeIndex = mod(activeIndex + 1, slides.length);
    dragOffset = 0;
    update(true);
  }

  function movePrev() {
    activeIndex = mod(activeIndex - 1, slides.length);
    dragOffset = 0;
    update(true);
  }

  function onPointerDown(event) {
    if (slides.length <= 1) return;

    isPointerDown = true;
    isDragging = false;
    startX = event.clientX;
    currentX = event.clientX;
    dragOffset = 0;
    pointerId = event.pointerId;

    track.style.transition = "none";

    if (viewport.setPointerCapture) {
      viewport.setPointerCapture(pointerId);
    }
  }

  function onPointerMove(event) {
    if (!isPointerDown) return;

    currentX = event.clientX;
    dragOffset = currentX - startX;

    if (Math.abs(dragOffset) > 6) {
      isDragging = true;
    }

    update(false);
  }

  function onPointerUp() {
    if (!isPointerDown) return;

    isPointerDown = false;
    const threshold = 60;

    if (dragOffset <= -threshold) {
      moveNext();
    } else if (dragOffset >= threshold) {
      movePrev();
    } else {
      dragOffset = 0;
      update(true);
    }

    requestAnimationFrame(() => {
      isDragging = false;
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (isDragging) {
        event.preventDefault();
        event.stopPropagation();
      }
    });

    link.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });
  });

  viewport.addEventListener("pointerdown", onPointerDown);
  track.addEventListener("pointerdown", onPointerDown);

  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
  window.addEventListener("pointercancel", onPointerUp);
  window.addEventListener("resize", () => update(false));

  update(false);
}
