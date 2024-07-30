gsap.registerPlugin(ScrollTrigger);

// gsap.to(".square", {
//     // x: 1000,
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".square1",
//         start: "top 80%",
//         end: "top 40%",
//         // end: () => `+=${document.querySelector(".square").offsetHeight}`, 
//         markers: true,
//         toggleActions: "restart none none none",
//         scrub: 4,
//         pin: ".square",
//         pinSpacing: true,
//         toggleClass: "red",
//     }
// });

// // Timeline ScrollTrigger 

// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".box",
//         start: "top 80%",
//         end: "top 40%",
//         scrub: 1,
//         markers: true,
//     }
// });

// tl.to(".box", {x: 200, duration: 3})
//   .to(".box", {y: 200, duration:2})
//   .to(".box", {x: 0, duration:5})


ScrollTrigger.create({
    trigger: ".timeline-area",
    start: "top 45%",
    markers: true,
    scrub: 1,
    toggleClass: {targets: "header", className: "Sticky-Nav"},
});