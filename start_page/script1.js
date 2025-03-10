document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here!
const image = document.getElementById('hoverImage');
    console.log(image);
    if (image) {
        const audio = document.getElementById('hoverAudio');

        image.addEventListener('mouseenter', () => {
            gsap.to(image, { scale: 1.2, duration: 0.3, ease: "power2.out" });
            // Reset audio to start
            audio.play();
        });

        image.addEventListener('mouseleave', () => {
            gsap.to(image, { scale: 1, duration: 0.3, ease: "power2.out" });
        });

    }
});