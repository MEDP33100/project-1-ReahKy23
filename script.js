document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here!

    let tlCrawl = gsap.timeline()
    tlCrawl.to(".spider-bottom", { x: 520-innerWidth, duration: 10});
    tlCrawl.to(".spider-bottom", {rotate: 20, delay: 1});
    tlCrawl.to(".spider-bottom", { y: -450, duration: 5});
    tlCrawl.to(".spider-bottom", {rotate: 90, delay: 1});
    tlCrawl.to(".spider-bottom", { x: "+=210", duration: 3});
    tlCrawl.to(".spider-bottom", {rotate: 145, delay: 1});
    tlCrawl.to(".spider-bottom", { y: "+=200", duration: 2});
   
});
