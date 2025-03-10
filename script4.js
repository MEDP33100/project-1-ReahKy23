document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here!


    //this is for the hover sound feature of spider on end page
    const image = document.getElementById('hoverSpider');
    console.log(image);
    if (image) {
        const audio = document.getElementById('spiderAudio');

        image.addEventListener('mouseenter', () => {
            gsap.to(image, { scale: 5.2, duration: 0.3, ease: "power2.out" });
            // Reset audio to start
            audio.play();
        });

        image.addEventListener('mouseleave', () => {
            gsap.to(image, { scale: 1, duration: 0.3, ease: "power2.out" });
        });

    }



});