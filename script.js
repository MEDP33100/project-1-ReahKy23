document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here!

    let tlCrawl = gsap.timeline()
    tlCrawl.to(".spider-bottom", { x: 520 - innerWidth, duration: 10 });
    tlCrawl.to(".spider-bottom", { rotate: 20, delay: 1 });
    tlCrawl.to(".spider-bottom", { y: -450, duration: 5 });
    tlCrawl.to(".spider-bottom", { rotate: 90, delay: 1 });
    tlCrawl.to(".spider-bottom", { x: "+=220", duration: 3 });
    tlCrawl.to(".spider-bottom", { rotate: 145, delay: 1 });
    tlCrawl.to(".spider-bottom", { y: "+=150", duration: 2 });
    tlCrawl.to("#next-page", { opacity: 1, delay: 2, duration: 5 });

    // my originnal code to try and make button start new timeline (but it wouldn't disappear after)
    // document.getElementById("next-page").addEventListener("click", function() {
    //     let tlRain = gsap.timeline(); // Create a new GSAP timeline on click
    //     tlRain.to("#next-page", {opactiy: 0, duration: 1, ease: "power2.out"});
    //     tlRain.to("#overlay2", { opacity: 1, delay: 5, duration: 1, ease: "power2.out" });
    // });

    // revision from chatgpt

    let nextButton = document.querySelector("#next-page button");
    let overlay = document.querySelector("#overlay2");
    let clickSound = document.getElementById("clickSound"); // Select audio
    let rainSound = document.getElementById("rain-sound");
    let birdChirp = document.getElementById("bird-chirp");

    rainSound.loop = false;


    if (nextButton) {
        nextButton.addEventListener("click", function() {
            let tlRain = gsap.timeline();

            // Play the sound effect using GSAP
            tlRain.to(nextButton, {opacity: 0, duration: 0.5,ease: "power2.out",
                onStart: () => {
                    clickSound.currentTime = 0; // Reset sound to start
                    clickSound.play(); // Play sound
                    rainSound.play({delay:2, repeat: -1});
                },
                onComplete: () => {
                    nextButton.style.display = "opcaity: 0";
                }
            });

            // Start the animation (Fade in the rain overlay)
            tlRain.to(overlay, {opacity: 1, duration: 1,ease: "power2.out", delay: 2,
                onStart: ()=> {
                    tlRain.to(".spider-bottom", {y: 500, rotate: 360, duration: 4,})
                    tlRain.to("#next-page2", {opacity: 1,});
                },
                // onComplete: () => {
                //     rainSound.currentTime = 0;
                //     rainSound.play();
                // }
            });
            
            
            
        });
    }


});



// tlRain.to("#spider-bottom", {y:500, duration: 4,
//     onComplete: () => {
//         birdChirp.currentTime = 0;
//         birdChirp.play();

//     }
    
// })