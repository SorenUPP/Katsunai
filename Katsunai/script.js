gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".scene").forEach((panel, index) => {
  gsap.from(panel, {
    scrollTrigger: {
      trigger: panel,
      start: "top 90%",
      end: "top 60%",
      scrub: true
    },
    opacity: 0,
    y: 100,
    scale: 0.95,
    duration: 1.5,
    ease: "power2.out"
  });
});



document.getElementById("navToggle").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("show");
  });
  

  window.addEventListener('scroll', () => {
    const section = document.getElementById('booking-section');
    const reviews = document.querySelectorAll('.review');
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight - 150) {
      reviews.forEach(review => review.classList.add('show'));
    }
  });


  const imageBlocks = document.querySelectorAll('.image-block');
  let currentIndex = 0;
  
  // Function to move to the next image (slide right)
  function slideToNext() {

    imageBlocks[currentIndex].classList.remove('slide-active');
    
  
    currentIndex = (currentIndex + 1) % imageBlocks.length;
  
  
    imageBlocks[currentIndex].classList.add('slide-active');
  }
  

  imageBlocks[currentIndex].classList.add('slide-active');
  
  
  setInterval(slideToNext, 3000);  
  

  /* Footer */
  const footer = document.querySelector("footer");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.classList.add("show");
      }
    });
  }, { threshold: 0.3 });

  observer.observe(footer);


  // Add this JS to toggle scrolling class
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      document.body.classList.add("scrolling");
      setTimeout(() => document.body.classList.remove("scrolling"), 300);
      ticking = false;
    });
    ticking = true;
  }
});


gsap.registerPlugin(ScrollTrigger);

gsap.from(".review-card", {
  scrollTrigger: {
    trigger: ".reviews",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
})


window.addEventListener('scroll', () => {
  const scene = document.getElementById('scene2');
  const reviews = document.querySelectorAll('#scene2 .review');
  const rect = scene.getBoundingClientRect();

  if (rect.top < window.innerHeight - 150) {
    reviews.forEach(review => review.classList.add('show'));
  }
});

