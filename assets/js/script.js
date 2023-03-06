$(document).ready(function() {

// functions go here
// const el = document.querySelector(".sticks")
// const observer = new IntersectionObserver( 
//   ([e]) => e.target.classList.toggle("stuck", e.intersectionRatio < 1),
//   { threshold: [.2] }
// );

// observer.observe(el);




const stickyElm1 = document.querySelector('.sticks1')

const observer1 = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle('stuck1', e.intersectionRatio < 1),
  {threshold: [1]}
);

observer1.observe(stickyElm1)


const stickyElm2 = document.querySelector('.sticks2')

const observer2 = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle('stuck2', e.intersectionRatio < 1),
  {threshold: [1]}
);

observer2.observe(stickyElm2)

const stickyElm3 = document.querySelector('.sticks3')

const observer3 = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle('stuck3', e.intersectionRatio < 1),
  {threshold: [1]}
);

observer3.observe(stickyElm3)


const stickyElm4 = document.querySelector('.sticks4')

const observer4 = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle('stuck4', e.intersectionRatio < 1),
  {threshold: [1]}
);

observer4.observe(stickyElm4)

const stickyElm5 = document.querySelector('.sticks5')

const observer5 = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle('stuck5', e.intersectionRatio < 1),
  {threshold: [1]}
);

observer5.observe(stickyElm5)



});
