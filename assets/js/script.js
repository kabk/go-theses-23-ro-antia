$(document).ready(function() {

// functions go here
const el = document.querySelector(".sticks")
const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("stuck", e.intersectionRatio < 1),
  { threshold: [.2] }
);

observer.observe(el);
});
