document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here!


    //I used chatpgt to help me with this code bloc (making the chirping osund play), 
    //but it is still only working some times
    if (document.body) {
        document.body.addEventListener("mouseenter", function playonce() {
            let birdChirp = document.getElementById("birdChirp");

            if (birdChirp) {
                birdChirp.currentTime = 0;
                birdChirp.play()

            }
        });


    }


    let tlClimb = gsap.timeline()
    
    tlClimb.to("#overlay3", { opacity: 0, duration: 6, ease: "power2.out" });
    tlClimb.to(".spider-climb", { y: -200, duration: 5 });
    tlClimb.to(".spider-climb", { rotate: -90, duration: 2 });
    tlClimb.to(".spider-climb", { x: -230, duration: 2 })
    tlClimb.to(".spider-climb", { rotate: 0, duration: 2 });
    tlClimb.to(".spider-climb", { y: -600, duration: 5 });
    tlClimb.to(".spider-climb", { rotate: 90, delay: 1 });
    tlClimb.to(".spider-climb", { x: "+=220", duration: 3 });
    tlClimb.to(".spider-climb", { rotate: 145, delay: 1 });
    tlClimb.to(".spider-climb", { y: "+=100", duration: 2 });
    tlClimb.to("#last-page button", { opacity: 1, ease: "power2.out" })


    //this is for the hover sound feature of spider on opening page
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