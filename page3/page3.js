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

    let tlClimb = gsap.timeline();

    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    
    tlClimb.to("#overlay3", { opacity: 0, duration: 10, ease: "power2.out"});
    tlClimb.to(".spider-climb", { y: () => -screenHeight * 0.2, duration: 3 });
    tlClimb.to(".spider-climb", { rotate: -90, duration: 1 });
    tlClimb.to(".spider-climb", { x: () => -screenWidth * 0.12, duration: 2 });
    tlClimb.to(".spider-climb", { rotate: 0, duration: 2 });
    tlClimb.to(".spider-climb", { y: () => -screenHeight * 0.65, duration: 3 });
    tlClimb.to(".spider-climb", { rotate: 90, delay: 1 });
    tlClimb.to(".spider-climb", { x: () => "+=" + (screenWidth * 0.15), duration: 2 });
    tlClimb.to(".spider-climb", { rotate: 145, delay: 1 });
    tlClimb.to(".spider-climb", { y: () => "+=" + (screenHeight * 0.1), duration: 1 });
    tlClimb.to("#last-page button", { opacity: 1, ease: "power2.out" });





});